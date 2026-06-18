import React from "react";
import { Link } from "react-router-dom";

export default function MatrixSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Matrix calculator: 2×2 add, subtract &amp; multiply
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>matrix calculator</strong> to perform{" "}
          <strong>matrix operations</strong> on two <strong>2×2 matrices</strong>:
          <strong> addition</strong>, <strong>subtraction</strong>, and{" "}
          <strong>multiplication</strong>. Enter <strong>matrix A</strong> and{" "}
          <strong>matrix B</strong>, choose an operation, and read the result
          matrix plus <strong>det(A)</strong> and <strong>det(B)</strong> for
          reference.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For general arithmetic, use the{" "}
          <Link
            to="/math/basic-calculator"
            className="text-primary hover:underline"
          >
            Basic Calculator
          </Link>
          . For advanced functions, try the{" "}
          <Link
            to="/math/scientific-calculator"
            className="text-primary hover:underline"
          >
            Scientific Calculator
          </Link>
          . For linear powers, see the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a matrix?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>matrix</strong> is a rectangular array of numbers. A{" "}
          <strong>2×2 matrix</strong> has two rows and two columns—common in
          linear algebra, graphics transforms, and systems of equations.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>A + B</strong> and <strong>A − B</strong> (element-wise)
          </li>
          <li>
            <strong>A × B</strong> (row-by-column product)
          </li>
          <li>
            <strong>det(A)</strong> and <strong>det(B)</strong> shown
          </li>
          <li>
            <strong>2×2 size only</strong> on this page
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this matrix calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Add, subtract, multiply 2×2 matrices</li>
              <li>Result matrix grid</li>
              <li>2×2 determinants of A and B</li>
              <li>Decimal entries allowed</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>3×3 or larger matrices</li>
              <li>Matrix inverse or transpose</li>
              <li>Eigenvalues / eigenvectors</li>
              <li>Row-reduced echelon form (RREF)</li>
              <li>Scalar multiply-only mode</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Matrix formulas (2×2)</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Addition:       C[i,j] = A[i,j] + B[i,j]
Subtraction:    C[i,j] = A[i,j] − B[i,j]

Multiplication:
  C[0,0] = A[0,0]×B[0,0] + A[0,1]×B[1,0]
  C[0,1] = A[0,0]×B[0,1] + A[0,1]×B[1,1]
  C[1,0] = A[1,0]×B[0,0] + A[1,1]×B[1,0]
  C[1,1] = A[1,0]×B[0,1] + A[1,1]×B[1,1]

Determinant:    det([[a,b],[c,d]]) = ad − bc`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Matrix multiplication rules
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For 2×2 matrices, each entry in <strong>A × B</strong> is a dot product
          of a row of A with a column of B.{" "}
          <strong>Matrix multiplication is not commutative</strong>—usually{" "}
          <strong>A × B ≠ B × A</strong>. Dimensions must align: (2×2)(2×2) → 2×2.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this matrix calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Fill in the four cells of matrix A.</li>
          <li>Fill in the four cells of matrix B.</li>
          <li>Select +, −, or ×.</li>
          <li>Read the result matrix and determinants in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>A + B</strong> with A = [[1,2],[3,4]] and B = [[5,6],[7,8]]
            → <strong>[[6,8],[10,12]]</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>A × B</strong> with the same matrices →{" "}
            <strong>[[19,22],[43,50]]</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>det(A)</strong> = 1×4 − 2×3 = <strong>−2</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (matrices)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What operations can I perform?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Addition</strong>, <strong>subtraction</strong>, and{" "}
              <strong>multiplication</strong> of two 2×2 matrices—not inverse or
              eigenvalues.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use 3×3 matrices?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—this page is <strong>2×2 only</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you add two matrices?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Add corresponding entries: top-left + top-left, etc.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is A × B the same as B × A?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Generally <strong>no</strong>—order matters for matrix
              multiplication.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the determinant used for?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For 2×2, <strong>det = ad − bc</strong> tells whether the matrix is
              invertible (det ≠ 0). This tool shows det(A) and det(B) but does
              not compute inverses.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I find the inverse here?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not on this page. Inverse requires det ≠ 0 and a separate formula.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do both matrices need the same size?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—both are fixed at <strong>2×2</strong> for every operation here.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can entries be decimals?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Fractions can be entered as decimals (e.g. 0.5 for 1/2).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
