import { site } from "@/content/site";

/**
 * Contribution data comes from the public jogruber proxy over GitHub's
 * GraphQL contributions calendar. No token required, so nothing to leak
 * and nothing to rotate.
 */
const API = "https://github-contributions-api.jogruber.de/v4";

export type Day = {
  date: string;
  count: number;
  /** 0–4, GitHub's own intensity bucket. */
  level: number;
};

export type Year = {
  year: number;
  total: number;
  /** Columns of 7, Sunday-first. `null` pads the partial first/last week. */
  weeks: (Day | null)[][];
};

type ApiResponse = {
  total: Record<string, number>;
  contributions: Day[];
};

/** Splits a flat run of days into Sunday-first week columns. */
function toWeeks(days: Day[]): (Day | null)[][] {
  if (days.length === 0) return [];

  const weeks: (Day | null)[][] = [];
  // Pad so the first column starts on a Sunday.
  let current: (Day | null)[] = Array.from(
    { length: new Date(days[0].date + "T00:00:00Z").getUTCDay() },
    () => null,
  );

  for (const day of days) {
    current.push(day);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  }
  if (current.length > 0) {
    while (current.length < 7) current.push(null);
    weeks.push(current);
  }
  return weeks;
}

async function fetchYear(year: number): Promise<Year | null> {
  try {
    const res = await fetch(`${API}/${site.github}?y=${year}`, {
      // Rebuilt hourly — the graph moves at most once a day.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const data = (await res.json()) as ApiResponse;
    const days = data.contributions ?? [];
    const total = Object.values(data.total ?? {})[0] ?? 0;
    if (days.length === 0) return null;

    return { year, total, weeks: toWeeks(days) };
  } catch {
    // A dead upstream should degrade to "no graph", never to a broken page.
    return null;
  }
}

/**
 * Every year with activity, newest first. Years that return nothing are
 * dropped so the tab strip never offers an empty graph.
 */
export async function getContributionYears(
  firstYear = 2020,
): Promise<Year[]> {
  const now = new Date().getUTCFullYear();
  const years = Array.from(
    { length: now - firstYear + 1 },
    (_, i) => now - i,
  );

  const settled = await Promise.all(years.map(fetchYear));
  return settled.filter((y): y is Year => y !== null && y.total > 0);
}
