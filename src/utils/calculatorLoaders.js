import { lazy } from "react";
import { seoComponentByCalculatorId } from "../data/seoMap";

const calculatorModules = import.meta.glob("../calculators/**/*.jsx");
const seoModules = import.meta.glob("../components/seo/*SeoContent.jsx");

function buildLazyMap(modules) {
  const map = {};
  for (const path in modules) {
    const name = path.split("/").pop()?.replace(".jsx", "");
    if (name) {
      map[name] = lazy(modules[path]);
    }
  }
  return map;
}

const calculatorComponents = buildLazyMap(calculatorModules);
const seoComponents = buildLazyMap(seoModules);

export function getCalculatorComponent(componentName) {
  return componentName ? calculatorComponents[componentName] : null;
}

export function getSeoComponent(calculatorId) {
  const componentName = seoComponentByCalculatorId[calculatorId];
  return componentName ? seoComponents[componentName] : null;
}
