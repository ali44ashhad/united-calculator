import { Link, useLocation, useParams } from "react-router-dom";
import { calculators } from "../data/calculators";

const LABELS = {
  finance: "Finance",
  health: "Health",
  math: "Math",
  geometry: "Geometry",
  statistics: "Statistics",
  other: "Other",
  "all-calculators": "All Calculators",
};

function titleCaseFromSlug(slug) {
  return (slug || "")
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function GlobalBreadcrumb() {
  const location = useLocation();
  const params = useParams();

  const pathname = location.pathname.toLowerCase();

  const crumbs = [{ label: "Home", to: "/" }];

  if (pathname === "/") {
    return null;
  }

  if (pathname.startsWith("/all-calculators")) {
    crumbs.push({ label: LABELS["all-calculators"], to: "/all-calculators" });
  } else if (params.category) {
    const catKey = params.category.toLowerCase();
    const catLabel = LABELS[catKey] || titleCaseFromSlug(catKey);
    crumbs.push({ label: catLabel, to: `/${catKey}` });

    if (params.id) {
      const calc = calculators.find((c) => c.id === params.id);
      crumbs.push({ label: calc?.title || titleCaseFromSlug(params.id) });
    }
  } else {
    // Fallback for any other routes
    const segs = pathname.split("/").filter(Boolean);
    for (let i = 0; i < segs.length; i++) {
      const to = "/" + segs.slice(0, i + 1).join("/");
      const isLast = i === segs.length - 1;
      crumbs.push({
        label: LABELS[segs[i]] || titleCaseFromSlug(segs[i]),
        to: isLast ? undefined : to,
      });
    }
  }

  return (
    <div className="mb-8">
      <nav className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide">
        {crumbs.map((c, idx) => {
          const last = idx === crumbs.length - 1;
          return (
            <span key={`${c.label}-${idx}`} className="flex items-center gap-2">
              {c.to && !last ? (
                <Link className="hover:underline" to={c.to}>
                  {c.label}
                </Link>
              ) : (
                <span className="text-on-surface">{c.label}</span>
              )}
              {!last && (
                <span className="material-symbols-outlined text-[12px] text-outline">
                  chevron_right
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}

