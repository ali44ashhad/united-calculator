import React from "react";
import { Link } from "react-router-dom";

export default function IPSubnetSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          IPv4 subnet calculator: network, broadcast, and how many hosts fit
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Homelab VLANs, firewall rules, and CCNA study all start with the same
          question: given an <strong>IP address</strong> and a{" "}
          <strong>subnet mask</strong>, what is the <strong>network ID</strong>,
          what is the <strong>broadcast</strong>, and how many devices can I
          address? This <strong>free IP subnet calculator</strong> bitwise-ANDs
          and ORs the octets, shows the matching <strong>CIDR prefix</strong>{" "}
          (like <strong>/24</strong>), and estimates{" "}
          <strong>usable hosts</strong> with the classic minus-two rule for
          typical LAN masks.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter dotted-decimal mask only (for example{" "}
          <strong>255.255.255.0</strong>), not slash notation alone—the summary
          prints the equivalent <strong>/prefix</strong> for you.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Quick example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`IP:     192.168.1.1
Mask:   255.255.255.0  →  /24
Network:  192.168.1.0
Broadcast: 192.168.1.255
Usable hosts: 254 (192.168.1.1 – 192.168.1.254)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/bandwidth-calculator"
              className="text-primary hover:underline"
            >
              Bandwidth Calculator
            </Link>{" "}
            — estimate download time from file size and link speed.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Why must the mask be “contiguous”?
            </dt>
            <dd className="mt-1">
              Real IPv4 subnets use a run of 1 bits then 0 bits in the 32-bit mask.
              Masks like 255.0.255.0 are invalid on normal networks and are
              rejected here.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is the wildcard mask?
            </dt>
            <dd className="mt-1">
              It is the bitwise inverse of the subnet mask (per octet). ACL and
              OSPF examples sometimes reference it alongside the subnet mask.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
