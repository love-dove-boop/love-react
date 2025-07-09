import React from "react";
import "./../styles/styles.css";

export default function FloatingImages() {
  return (
    <div className="floating-images">
      <img src="image1.png" className="floating" alt="floating 1" />
      <img src="image2.png" className="floating" alt="floating 2" />
      {/* Add more images as needed */}
    </div>
  );
}