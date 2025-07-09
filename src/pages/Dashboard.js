import React from "react";
import { motion } from "framer-motion";
import "./../styles/styles.css";

const features = [
  {
    section: "User Actions",
    items: [
      "Free transfer to WMB accounts",
      "Transfer to another bank",
      "Mobile top up",
      "Bill payment",
      "Loans",
      "Cheques",
    ],
  },
  {
    section: "Accounts",
    items: [
      "Transaction history",
      "Generate statement",
      "Signed statement",
      "Link BVN",
      "Link NIN",
      "Link another account",
      "Contact account office",
      "View beneficiaries",
    ],
  },
  {
    section: "Payment Methods",
    items: [
      "Split payment (share payment between two WMB users)",
      "Card payment",
    ],
  },
  {
    section: "Bill Payment",
    items: [
      "Payment history",
      "International airtime",
      "TV subscription",
      "Transportation bill",
      "Supermarket checkout",
    ],
  },
  {
    section: "Cheques",
    items: [
      "Owned cards",
      "Create new card",
      "Create cheque",
    ],
  },
];

export default function Dashboard() {
  return (
    <motion.main
      className="dashboard-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {features.map(({ section, items }) => (
        <section className="section" key={section}>
          <div className="section-title">{section}</div>
          <div className="features-grid">
            {items.map((item) => (
              <motion.button
                className="feature-card"
                key={item}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px rgba(0,112,243,0.15)",
                  borderColor: "#0070f3",
                  backgroundColor: "#e6f0ff",
                  color: "#0070f3",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => alert(`You clicked: ${item}`)}
              >
                {item}
              </motion.button>
            ))}
            {/* Animated Learn More button */}
            <motion.button
              className="feature-card learn-more"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 32px rgba(255, 175, 0, 0.20)",
                borderColor: "#ffaf00",
                backgroundColor: "#fff7e6",
                color: "#ffaf00",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => alert("Learn more about these features!")}
            >
              Learn More
            </motion.button>
          </div>
        </section>
      ))}
    </motion.main>
  );
}