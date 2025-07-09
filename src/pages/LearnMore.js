import React from "react";

// This page describes the bank's mission and services
export default function LearnMore() {
  return (
    <main style={{
      maxWidth: "800px",
      margin: "3rem auto",
      background: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 2px 14px rgba(0,0,0,0.08)"
    }}>
      <h1>About World Money Bank (WMB)</h1>
      <p>
        <strong>World Money Bank (WMB)</strong> is a modern digital bank that helps you manage your money securely, easily, and smartly—anywhere in the world!
      </p>
      <ul>
        <li><strong>Instant Transfers:</strong> Send money to WMB or other banks quickly.</li>
        <li><strong>Smart Payments:</strong> Pay bills, recharge, and shop globally in one place.</li>
        <li><strong>Personalized Services:</strong> Link accounts, manage beneficiaries, and more.</li>
        <li><strong>Modern Tools:</strong> Split payments, manage cards and cheques easily.</li>
        <li><strong>Always Secure:</strong> Your money and data are protected with top encryption.</li>
      </ul>
      <p>
        <em>Experience the future of banking with WMB—where your money works for you.</em>
      </p>
    </main>
  );
}