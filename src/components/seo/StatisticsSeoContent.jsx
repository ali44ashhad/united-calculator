import React from "react";
import { Link } from "react-router-dom";

export default function StatisticsSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Statistics calculator: mean, median, mode, and range
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Descriptive statistics summarize a dataset in a few numbers. This{" "}
          <strong>statistics calculator</strong> accepts comma-separated values
          and returns <strong>count</strong>, <strong>mean</strong> (average),{" "}
          <strong>median</strong> (middle), <strong>mode</strong> (most
          frequent), and <strong>range</strong> (largest minus smallest).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For spread measures like variance and standard deviation, use the{" "}
          <Link
            to="/statistics/standard-deviation-calculator"
            className="text-primary hover:underline"
          >
            Standard Deviation Calculator
          </Link>
          . To plan how many survey responses you need, try the{" "}
          <Link
            to="/statistics/sample-size-calculator"
            className="text-primary hover:underline"
          >
            Sample Size Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Definitions</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Mean</strong> — sum divided by count.
          </li>
          <li>
            <strong>Median</strong> — middle value after sorting (average of two
            middles when n is even).
          </li>
          <li>
            <strong>Mode</strong> — value(s) that appear most often; ties list all
            modes.
          </li>
          <li>
            <strong>Range</strong> — maximum minus minimum.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter numbers separated by commas.</li>
          <li>Read count, mean, median, mode, and range in the summary.</li>
          <li>Reset to restore the default example list.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            For <strong>10, 20, 20, 40, 50</strong>: count = 5, mean ={" "}
            <strong>28</strong>, median = <strong>20</strong>, mode ={" "}
            <strong>20</strong>, range = <strong>40</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if every value appears once?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Then every number is a mode (each has frequency 1). The calculator
              lists all values that share the highest frequency.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include standard deviation?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—this page focuses on central tendency and range. Use the
              Standard Deviation Calculator for variance and SD.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
