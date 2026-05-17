import React from "react";
import { Link } from "react-router-dom";

export default function BandwidthSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Download time calculator: how long will my file take at this Mbps?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Waiting on a large download—game patch, video export, cloud backup—
          usually starts with one question:{" "}
          <strong>how long will this take on my connection?</strong> This{" "}
          <strong>bandwidth / download time calculator</strong> estimates duration
          from <strong>file size in megabytes (MB)</strong> and your{" "}
          <strong>download speed in megabits per second (Mbps)</strong>. It
          converts size to megabits, divides by speed, and shows minutes,
          seconds, and total seconds.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The page title says “bandwidth calculator” because many people search
          that phrase when they mean transfer time. This tool does{" "}
          <strong>not</strong> size office WAN links for 50 users or compute
          required Mbps from concurrent streams—it is a{" "}
          <strong>single-file download estimator</strong>. For unit conversions
          (GB, Gbps, etc.), see the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          MB vs Mbps — why the ×8 step matters
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Megabytes (MB)</strong> measure stored file size on disk or in
          a store listing. <strong>Megabits per second (Mbps)</strong> measure
          how fast data moves over the network each second. Internet providers
          advertise Mbps; file sizes are usually MB or GB. There are{" "}
          <strong>8 megabits in 1 megabyte</strong>, so a 100 MB file is 800
          megabits of data to move.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Megabits to download = file size (MB) × 8
Time (seconds) = megabits ÷ speed (Mbps)
Time (minutes) = seconds ÷ 60`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this download speed calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter <strong>file size in MB</strong> (check the download page or
            file properties).
          </li>
          <li>
            Enter your <strong>download speed in Mbps</strong> (speed test,
            plan label, or Ethernet rating).
          </li>
          <li>
            Read <strong>Estimated time</strong>, <strong>Total seconds</strong>
            , and converted <strong>megabits</strong> in the summary.
          </li>
          <li>
            Remember: Wi-Fi, VPN, disk writes, and server limits can make real
            time longer than the estimate.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>100 MB</strong> file at <strong>10 Mbps</strong>:
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Megabits = 100 × 8 = <strong>800 Mb</strong>
            <br />
            Seconds = 800 ÷ 10 = <strong>80 sec</strong> ≈{" "}
            <strong>1 min 20 sec</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this estimate assumes (and what it ignores)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Assumes</strong> steady speed at the Mbps you typed for the
            whole transfer.
          </li>
          <li>
            <strong>Ignores</strong> TCP overhead, packet loss, Wi-Fi congestion,
            and upload caps on the remote server.
          </li>
          <li>
            <strong>Ignores</strong> simultaneous downloads, streaming, or
            family members on the same connection.
          </li>
          <li>
            Upload time uses the same math but your{" "}
            <strong>upload Mbps</strong> is often much lower than download on
            home broadband—enter upload speed if you use this for sending files.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common search questions this page answers
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          People look for “how long to download 10 GB at 100 Mbps,” “download
          time calculator Mbps,” or “convert MB to download time.” The same
          formula scales: convert GB to MB (× 1024 for binary GB, or × 1000 for
          decimal marketing GB—stay consistent with your file label), then apply
          (MB × 8) / Mbps. For a 1 GB (1000 MB) file at 50 Mbps: 8000 / 50 = 160
          seconds, about 2 minutes 40 seconds in ideal conditions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate download time from file size and Mbps?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply file size in MB by 8 to get megabits, then divide by your
              download speed in Mbps. The result is time in seconds.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is my real download slower than the calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Real networks rarely hit peak Mbps continuously. Distance, Wi-Fi,
              VPN, antivirus scanning, and server rate limits all add delay.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 100 Mbps the same as 100 MB/s?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. 100 Mbps is 100 megabits per second. 100 MB/s would be 800 Mbps
              in megabits—eight times faster.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this for upload time?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes, with the same formula, but enter your{" "}
              <strong>upload</strong> Mbps from a speed test, not download.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this plan network bandwidth for my office?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Enterprise planning needs concurrent users, codecs, QoS, and
              peak-hour multipliers. This tool is for single-file time estimates
              only.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
