"use client";

import { useState } from "react";
import type { Year } from "@/lib/github";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

/** GitHub's five intensity buckets, restated in the site palette. */
const LEVEL = ["#17171a", "#33481a", "#567a22", "#8fbf30", "#c8ff4d"];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function format(dateISO: string) {
  const d = new Date(dateISO + "T00:00:00Z");
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

/** Month name above the first week column that starts a new month. */
function monthLabels(year: Year) {
  const labels: { index: number; label: string }[] = [];
  let last = -1;
  year.weeks.forEach((week, i) => {
    const first = week.find((d) => d !== null);
    if (!first) return;
    const month = new Date(first.date + "T00:00:00Z").getUTCMonth();
    if (month !== last) {
      labels.push({ index: i, label: MONTHS[month] });
      last = month;
    }
  });
  return labels;
}

export function Contributions({ years }: { years: Year[] }) {
  const [selected, setSelected] = useState(0);

  if (years.length === 0) {
    return (
      <Reveal>
        <p className="mt-10 text-sm text-muted">
          Contribution data is unavailable right now.{" "}
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-cream underline decoration-line underline-offset-4 hover:text-accent"
          >
            See GitHub directly ↗
          </a>
        </p>
      </Reveal>
    );
  }

  const year = years[Math.min(selected, years.length - 1)];
  const labels = monthLabels(year);

  return (
    <Reveal>
      <div className="mt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <p className="text-sm text-muted">
            <span className="display-tight mr-2 text-3xl text-cream">
              {year.total.toLocaleString()}
            </span>
            contributions in {year.year}
          </p>

          {/* Year picker. The early years are the custom-ROM era. */}
          <div className="-mx-1 flex max-w-full gap-1 overflow-x-auto px-1 pb-1">
            {years.map((y, i) => (
              <button
                key={y.year}
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={i === selected}
                className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-colors ${
                  i === selected
                    ? "border-accent text-accent"
                    : "border-line text-muted hover:border-faint hover:text-cream"
                }`}
              >
                {y.year}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal scroll keeps the full year readable on a phone. */}
        <div className="-mx-5 mt-6 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          <div className="min-w-max">
            <div className="relative mb-1.5 h-3">
              {labels.map(({ index, label }) => (
                <span
                  key={`${label}-${index}`}
                  className="absolute top-0 font-mono text-[10px] text-faint"
                  style={{ left: `${index * 13}px` }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex gap-[3px]">
              {year.weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) =>
                    day ? (
                      <span
                        key={day.date}
                        title={`${day.count} contribution${
                          day.count === 1 ? "" : "s"
                        } on ${format(day.date)}`}
                        className="h-2.5 w-2.5 rounded-[2px]"
                        style={{ backgroundColor: LEVEL[day.level] }}
                      />
                    ) : (
                      <span key={`${wi}-${di}`} className="h-2.5 w-2.5" />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <span className="label-mono">Less</span>
          {LEVEL.map((c) => (
            <span
              key={c}
              className="h-2.5 w-2.5 rounded-[2px]"
              style={{ backgroundColor: c }}
            />
          ))}
          <span className="label-mono">More</span>
        </div>
      </div>
    </Reveal>
  );
}
