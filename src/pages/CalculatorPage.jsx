import { Suspense, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { calculators } from "../data/calculators";
import GlobalBreadcrumb from "../components/GlobalBreadcrumb";
import {
  getCalculatorComponent,
  getSeoComponent,
} from "../utils/calculatorLoaders";

const CalculatorPage = () => {
  const { category, id } = useParams();
  const [copied, setCopied] = useState(false);
  const calculator = calculators.find((c) => c.id === id);
  const CalculatorComponent = getCalculatorComponent(calculator?.component);
  const SeoComponent = getSeoComponent(calculator?.id);

  const shareUrl = window.location.href;
  const shareText = calculator?.title || "Check this calculator";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categoryName = useMemo(() => {
    const c = (category || "").toLowerCase();
    return c ? c.charAt(0).toUpperCase() + c.slice(1) : "Calculators";
  }, [category]);

  const categoryIcon = useMemo(() => {
    const c = (category || "").toLowerCase();
    if (c === "finance") return "account_balance_wallet";
    if (c === "health") return "monitor_heart";
    if (c === "math") return "functions";
    if (c === "geometry") return "architecture";
    if (c === "statistics") return "show_chart";
    return "calculate";
  }, [category]);

  const popularInCategory = useMemo(() => {
    if (!calculator) return [];
    const list = calculators.filter(
      (c) => c.category === calculator.category && c.id !== calculator.id
    );
    return list.slice(0, 4);
  }, [calculator]);

  const relatedTools = useMemo(() => {
    if (!calculator) return [];
    const list = calculators.filter(
      (c) => c.category === calculator.category && c.id !== calculator.id
    );
    return list.slice(0, 3);
  }, [calculator]);

  const exploreMore = useMemo(() => {
    if (!calculator) return [];
    const current = calculator.category.toLowerCase();

    const CATEGORY_CARDS = [
      {
        key: "finance",
        title: "Finance",
        subtitle: "Loans, interest, tax & investing",
        icon: "account_balance_wallet",
        colorClass: "bg-blue-100 text-primary",
      },
      {
        key: "health",
        title: "Health",
        subtitle: "BMI, calories, fitness metrics",
        icon: "monitor_heart",
        colorClass: "bg-green-100 text-emerald-700",
      },
      {
        key: "math",
        title: "Math",
        subtitle: "Percentages, algebra, numbers",
        icon: "functions",
        colorClass: "bg-indigo-100 text-indigo-700",
      },
      {
        key: "geometry",
        title: "Geometry",
        subtitle: "Shapes, area, volume tools",
        icon: "architecture",
        colorClass: "bg-orange-100 text-orange-700",
      },
      {
        key: "statistics",
        title: "Statistics",
        subtitle: "Stats, z-score, p-value tools",
        icon: "show_chart",
        colorClass: "bg-slate-100 text-slate-700",
      },
      {
        key: "other",
        title: "Other",
        subtitle: "Everyday utilities & converters",
        icon: "straighten",
        colorClass: "bg-purple-100 text-purple-700",
      },
    ];

    return CATEGORY_CARDS.filter((c) => c.key !== current);
  }, [calculator]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText, url: shareUrl });
        return;
      } catch {
        // fallback below
      }
    }
    handleCopyLink();
  };

  return (
    <main className="flex-grow max-w-[1280px] mx-auto w-full px-6 py-6">
      <div className="mb-8">
        <GlobalBreadcrumb />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
              {calculator?.title}
            </h1>
            <p className="text-on-surface-variant max-w-2xl text-lg">
              {calculator?.description}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined">share</span>
              {copied ? "Copied" : "Share"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined">print</span>
              Print
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] min-h-[280px]">
            <Suspense
              fallback={
                <div
                  className="min-h-[200px] animate-pulse rounded-lg bg-surface-container"
                  aria-hidden="true"
                />
              }
            >
              {CalculatorComponent ? (
                <CalculatorComponent />
              ) : (
                <p>Calculator not found.</p>
              )}
            </Suspense>
          </div>

          {SeoComponent && (
            <Suspense fallback={null}>
              <SeoComponent />
            </Suspense>
          )}

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-on-surface">
              Related {categoryName} Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTools.map((c) => (
                <Link
                  key={c.id}
                  className="p-5 bg-white border border-outline-variant rounded-xl hover:border-primary hover:shadow-md transition-all group"
                  to={`/${c.category.toLowerCase()}/${c.id}`}
                >
                  <span className="material-symbols-outlined text-primary mb-3 block">
                    {categoryIcon}
                  </span>
                  <h4 className="font-bold text-on-surface group-hover:text-primary mb-1">
                    {c.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    {c.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container rounded-xl p-6">
            <h3 className="text-lg text-on-surface mb-4 flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-primary">star</span>
              Popular in {categoryName}
            </h3>
            <div className="space-y-3">
              {popularInCategory.map((c) => (
                <Link
                  key={c.id}
                  className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-lg border border-outline-variant hover:border-primary transition-all group"
                  to={`/${c.category.toLowerCase()}/${c.id}`}
                >
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary">
                    trending_up
                  </span>
                  <span className="text-sm font-medium text-on-surface group-hover:text-primary">
                    {c.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant">
            <h3 className="font-h2 text-h2 text-on-surface mb-4">
              Explore More
            </h3>
            <div className="space-y-4">
              {exploreMore.map((c) => (
                <Link
                  key={c.key}
                  className="group flex items-center p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-primary transition-all"
                  to={`/${c.key}`}
                >
                  <div
                    className={[
                      "w-10 h-10 rounded flex items-center justify-center shrink-0",
                      c.colorClass,
                    ].join(" ")}
                  >
                    <span className="material-symbols-outlined">{c.icon}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-h3 text-h3 text-sm group-hover:text-primary transition-colors">
                      {c.title}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {c.subtitle}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">info</span>
              <h3 className="text-lg font-semibold text-on-surface">
                How it works
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              This calculator uses standard formulas to produce results from the
              inputs you provide. Exact assumptions may vary per tool.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CalculatorPage;
