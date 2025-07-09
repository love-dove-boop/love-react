import React from "react";
import { Link } from "react-router-dom";

// Footer shown on every page
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        Contact us at <a href="mailto:support@wmb.com">support@wmb.com</a> | 
        <Link style={{ marginLeft: 8 }} to="/learn-more">Learn more about WMB</Link>
      </div>
      <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} World Money Bank (WMB)
      </div>
    </footer>
  );
}