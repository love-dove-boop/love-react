import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header>
      <span className="logo">Your Logo</span>
      <nav>
        {/* ...your nav links */}
        <ThemeSwitcher />
      </nav>
    </header>
  );
}





