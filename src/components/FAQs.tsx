"use client";
import { useState } from "react";

type Item = { q: string; a: string };

export default function FAQ({
  items,
}: {
  items: Item[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y rounded-2xl border">
      {items.map((it, i) => {
        const open = openIndex === i;
        return (
          <div key={i}>
            <button
              className="w-full text-left px-4 py-3 flex items-center justify-between"
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className="font-medium">{it.q}</span>
              <span className="text-xl">{open ? "−" : "+"}</span>
            </button>
            {open && <div className="px-4 pb-4 text-sm text-gray-700">{it.a}</div>}
          </div>
        );
      })}
    </div>
  );
}