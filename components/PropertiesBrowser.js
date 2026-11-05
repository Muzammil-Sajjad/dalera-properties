"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";
import { properties, developers } from "@/lib/data";

const FILTERS = [
  ["developer", "Developer"],
  ["location", "Location"],
  ["type", "Property type"],
  ["bedrooms", "Bedrooms"],
  ["status", "Project status"],
  ["handover", "Handover year"],
];
// AED budget range filter can be added once verified prices exist in lib/data.js.

export default function PropertiesBrowser() {
  const params = useSearchParams();
  const fromQuery = developers.find((d) => d.slug === params.get("developer"));
  const [values, setValues] = useState({ developer: fromQuery ? fromQuery.name : "" });

  const options = useMemo(() => {
    const o = {};
    FILTERS.forEach(([k]) => (o[k] = [...new Set(properties.map((p) => p[k]))]));
    return o;
  }, []);

  const list = properties.filter((p) => FILTERS.every(([k]) => !values[k] || p[k] === values[k]));
  const set = (k, v) => setValues((s) => ({ ...s, [k]: v }));

  return (
    <>
      <form className="filters" onSubmit={(e) => e.preventDefault()} aria-label="Filter properties">
        {FILTERS.map(([k, label]) => (
          <div className="field" key={k}>
            <label htmlFor={`f-${k}`}>{label}</label>
            <select id={`f-${k}`} value={values[k] || ""} onChange={(e) => set(k, e.target.value)}>
              <option value="">All</option>
              {options[k].map((v) => <option key={v}>{v}</option>)}
            </select>
          </div>
        ))}
        <button type="button" className="btn btn--line-green" onClick={() => setValues({})}>
          Reset filters
        </button>
      </form>

      <p className="result-count">{list.length} of {properties.length} projects</p>
      {list.length ? (
        <div className="card-grid">
          {list.map((p) => <PropertyCard key={p.slug} p={p} />)}
        </div>
      ) : (
        <p className="empty">No projects match these filters. Reset the filters to see every project.</p>
      )}
    </>
  );
}
