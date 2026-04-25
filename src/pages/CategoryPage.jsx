import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { calculators } from "../data/calculators";
import GlobalBreadcrumb from "../components/GlobalBreadcrumb";
import { Helmet } from "react-helmet-async";

const CATEGORY_META = {
  finance: {
    title: "Financial Calculators",
    description:
      "From mortgage payments and compound interest to tax estimations and retirement planning. Accurate tools designed for trust and precision in your financial decisions.",
    icon: "account_balance",
    bannerClass: "bg-primary-container text-on-primary-container",
  },
  health: {
    title: "Health Calculators",
    description:
      "Fitness and medical metrics including BMI, Body Fat, BMR, calorie planning, and more.",
    icon: "monitor_heart",
    bannerClass: "bg-surface-container-highest text-on-surface",
  },
  math: {
    title: "Math Calculators",
    description:
      "From basic arithmetic to advanced algebra and number tools, designed for speed and accuracy.",
    icon: "functions",
    bannerClass: "bg-surface-container-highest text-on-surface",
  },
  geometry: {
    title: "Geometry Calculators",
    description:
      "Triangles, circles, volume, surface area, and geometry formulas with clear results.",
    icon: "architecture",
    bannerClass: "bg-surface-container-highest text-on-surface",
  },
  statistics: {
    title: "Statistics Calculators",
    description:
      "Standard deviation, z-score, sample size, p-value, and core statistics tools.",
    icon: "show_chart",
    bannerClass: "bg-surface-container-highest text-on-surface",
  },
  other: {
    title: "Other Calculators",
    description:
      "Everyday utilities, conversions, and miscellaneous calculators for common tasks.",
    icon: "straighten",
    bannerClass: "bg-surface-container-highest text-on-surface",
  },
};

function getFinanceSubcategory(calc) {
  const t = (calc.title || "").toLowerCase();
  if (
    t.includes("tax") ||
    t.includes("vat") ||
    t.includes("sales tax") ||
    t.includes("income tax") ||
    t.includes("estate")
  ) {
    return "Tax";
  }
  if (
    t.includes("retire") ||
    t.includes("401") ||
    t.includes("ira") ||
    t.includes("pension") ||
    t.includes("social security") ||
    t.includes("rmd")
  ) {
    return "Retirement";
  }
  if (
    t.includes("loan") ||
    t.includes("mortgage") ||
    t.includes("refinance") ||
    t.includes("amort") ||
    t.includes("payment") ||
    t.includes("lease") ||
    t.includes("debt") ||
    t.includes("down payment") ||
    t.includes("rent")
  ) {
    return "Loans";
  }
  if (
    t.includes("invest") ||
    t.includes("sip") ||
    t.includes("compound") ||
    t.includes("roi") ||
    t.includes("irr") ||
    t.includes("bond") ||
    t.includes("return") ||
    t.includes("savings")
  ) {
    return "Investment";
  }
  return "All";
}

function getSubcategoryIcon(name) {
  switch (name) {
    case "Investment":
      return "trending_up";
    case "Loans":
      return "home";
    case "Retirement":
      return "savings";
    case "Tax":
      return "receipt_long";
    default:
      return "all_inclusive";
  }
}

function getCardIcon(category, title) {
  const t = (title || "").toLowerCase();
  if (category === "Finance") {
    if (t.includes("mortgage")) return "house";
    if (t.includes("interest")) return "show_chart";
    if (t.includes("retire") || t.includes("401") || t.includes("ira"))
      return "elderly";
    if (t.includes("auto")) return "payments";
    if (t.includes("tax") || t.includes("vat")) return "calculate";
    return "account_balance_wallet";
  }
  if (category === "Health") return "monitor_heart";
  if (category === "Math") return "functions";
  if (category === "Geometry") return "architecture";
  if (category === "Statistics") return "show_chart";
  return "calculate";
}

function getPill(label) {
  return (label || "").toUpperCase().slice(0, 12);
}

const CategoryPage = () => {
  const { category } = useParams();
  const [subcat, setSubcat] = useState("All");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const categoryKey = (category || "").toLowerCase();
  const categoryName =
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  const meta = CATEGORY_META[categoryKey] || {
    title: `${categoryName} Calculators`,
    description: `Browse our free ${categoryName.toLowerCase()} calculators.`,
    icon: "calculate",
    bannerClass: "bg-surface-container-highest text-on-surface",
  };

  const allInCategory = useMemo(() => {
    return calculators.filter((c) => c.category.toLowerCase() === categoryKey);
  }, [categoryKey]);

  const subcategoryCounts = useMemo(() => {
    if (categoryKey !== "finance") {
      return [{ name: `All ${categoryName}`, count: allInCategory.length }];
    }

    const counts = new Map();
    for (const c of allInCategory) {
      const s = getFinanceSubcategory(c);
      counts.set(s, (counts.get(s) || 0) + 1);
    }

    const items = [
      { name: `All ${categoryName}`, count: allInCategory.length, key: "All" },
      ...["Investment", "Loans", "Retirement", "Tax"].map((k) => ({
        name: k,
        count: counts.get(k) || 0,
        key: k,
      })),
    ];
    return items;
  }, [allInCategory, categoryKey, categoryName]);

  const filtered = useMemo(() => {
    let list = allInCategory;
    if (categoryKey === "finance" && subcat !== "All") {
      list = list.filter((c) => getFinanceSubcategory(c) === subcat);
    }

    if (sort === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "newest") {
      list = [...list].reverse();
    }
    return list;
  }, [allInCategory, categoryKey, subcat, sort]);

  const pageSize = 24;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const pageItems = filtered.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const showingCount = pageItems.length;

  return (
    <>
      <Helmet>
        <title>{`${categoryName} Calculators | Free Online Tools`}</title>
        <meta
          name="description"
          content={`Browse our free ${categoryName.toLowerCase()} calculators. Instantly solve problems, convert units, and perform accurate calculations online.`}
        />
        <meta
          name="keywords"
          content={`${categoryName.toLowerCase()} calculators, online ${categoryName.toLowerCase()} tools, free ${categoryName.toLowerCase()} calculator`}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://unitedcalculator.net/${category.toLowerCase()}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${categoryName} Calculators | Free Online Tools`}
        />
        <meta
          property="og:description"
          content={`Explore our ${categoryName.toLowerCase()} calculators to quickly solve problems and make accurate calculations.`}
        />
        <meta
          property="og:url"
          content={`https://unitedcalculator.net/${category.toLowerCase()}`}
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "${categoryName} Calculators",
  "url": "https://unitedcalculator.net/${category.toLowerCase()}",
  "description": "Browse our collection of free ${categoryName.toLowerCase()} calculators to solve problems quickly and accurately.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://unitedcalculator.net"
  }
}
          `}
        </script>

        {/* JSON-LD: Breadcrumb */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://unitedcalculator.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "${categoryName} Calculators",
      "item": "https://unitedcalculator.net/${category.toLowerCase()}"
    }
  ]
}
          `}
        </script>
      </Helmet>

      <main className="flex-grow">
        <section className="max-w-[1280px] mx-auto px-6 py-6">
          <GlobalBreadcrumb />
        </section>

        {/* Category Header */}
        <section className="max-w-[1280px] mx-auto px-6 mb-10">
          <div
            className={[
              "relative overflow-hidden rounded-xl p-8 md:p-12 shadow-lg",
              meta.bannerClass,
            ].join(" ")}
          >
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {meta.title}
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                {meta.description}
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
              <span className="material-symbols-outlined text-[300px]">
                {meta.icon}
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          {/* Sidebar Filters */}
          <aside className="md:col-span-3 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-on-surface mb-4">
                Sub-Categories
              </h3>
              <div className="flex flex-col gap-1">
                {subcategoryCounts.map((s) => {
                  const key = s.key || "All";
                  const selected = key === subcat;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setSubcat(key);
                        setPage(1);
                      }}
                      className={[
                        "flex items-center justify-between w-full p-3 rounded-lg transition-colors",
                        selected
                          ? "bg-surface-container-high text-primary font-medium"
                          : "hover:bg-surface-container text-on-surface-variant",
                      ].join(" ")}
                    >
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">
                          {getSubcategoryIcon(
                            key === "All" ? "All" : key
                          )}
                        </span>
                        {s.name}
                      </span>
                      <span className="text-sm font-medium opacity-60">
                        {s.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-5 rounded-xl border border-outline-variant bg-surface-container-lowest">
              <h4 className="text-lg font-semibold text-on-surface mb-2">
                Need help?
              </h4>
              <p className="text-on-surface-variant mb-4">
                Unsure which tool you need for your situation?
              </p>
              <Link
                to="/all-calculators"
                className="block text-center w-full py-2 bg-secondary-container text-on-secondary-fixed font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Browse All Tools
              </Link>
            </div>
          </aside>

          {/* Tool Grid */}
          <div className="md:col-span-9">
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <p className="text-on-surface-variant">
                Showing{" "}
                <span className="font-bold text-on-surface">
                  {showingCount}
                </span>{" "}
                calculators
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                  Sort by:
                </span>
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                    setPage(1);
                  }}
                  className="bg-transparent border border-outline-variant rounded-lg px-3 py-2 font-medium text-sm focus:outline-none"
                >
                  <option value="popular">Most Popular</option>
                  <option value="az">Alphabetical</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageItems.map((calc) => {
                const pill =
                  categoryKey === "finance"
                    ? getFinanceSubcategory(calc)
                    : categoryName;
                return (
                  <Link
                    key={calc.id}
                    to={`/${categoryKey}/${calc.id}`}
                    className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined">
                        {getCardIcon(calc.category, calc.title)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-on-surface mb-2">
                      {calc.title}
                    </h3>
                    <p className="text-on-surface-variant mb-6 flex-grow">
                      {calc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold bg-surface-container px-2 py-1 rounded text-primary">
                        {getPill(pill)}
                      </span>
                      <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">
                        arrow_forward
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors"
                  aria-label="Previous page"
                >
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>

                {Array.from({ length: Math.min(3, pageCount) }).map((_, i) => {
                  const n = i + 1;
                  const active = n === safePage;
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={[
                        "w-10 h-10 flex items-center justify-center rounded-lg font-medium",
                        active
                          ? "bg-primary text-on-primary"
                          : "border border-outline-variant hover:bg-surface-container transition-colors",
                      ].join(" ")}
                    >
                      {n}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors"
                  aria-label="Next page"
                >
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Feature Area */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Precision You Can Trust
              </h2>
              <p className="text-lg text-on-surface-variant mb-6">
                Every calculator is designed for clarity and practical accuracy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    verified
                  </span>
                  <span className="text-on-surface">
                    Verified formula accuracy
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    update
                  </span>
                  <span className="text-on-surface">
                    Updated calculators library
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    lock
                  </span>
                  <span className="text-on-surface">
                    No data storage, fully private
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-surface-container-highest">
                <img
                  className="w-full h-full object-cover"
                  alt="Modern workspace"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXwFAnYU_Hvx0Te2wuUbxB2radyvK8vg_SgSz1JXt1jy7DK3JWydaUO570NMEJ-sZygR6yZjeenqjdENRVqc676sHTIg4kY6ORWg4UULGRaBsVSY79-hreV3002viFUP-jk8_nEW3bBkGUc6U0gjcgSOOeFwHId3ZlnDoewjk1t7IDTQMMVXEYMFbjy8yZ4fSI349UUCXeZCnbkNs18JZ0Mqbzo6RqGXJilDqFn33Cm7AUro0PRZe7Y0mZAdhT22Pi0T8m-7H_jcY"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-outline-variant hidden sm:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-2 h-10 bg-primary rounded-full" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                      CALCULATORS
                    </p>
                    <p className="text-2xl font-semibold text-on-surface">
                      {allInCategory.length}+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
