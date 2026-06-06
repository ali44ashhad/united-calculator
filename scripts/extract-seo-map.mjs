import fs from "fs";

const content = fs.readFileSync("src/pages/CalculatorPage.jsx", "utf8");
const map = {};

const blockRegex =
  /calculator\?\.id === "([^"]+)"[\s\S]*?<(\w+SeoContent)\s*\/?>/g;
let match;
while ((match = blockRegex.exec(content)) !== null) {
  map[match[1]] = match[2];
}

const output = `// Auto-generated SEO component mapping for lazy loading
export const seoComponentByCalculatorId = ${JSON.stringify(map, null, 2)};
`;

fs.writeFileSync("src/data/seoMap.js", output);
console.log(`Wrote ${Object.keys(map).length} entries to src/data/seoMap.js`);
