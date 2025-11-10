import React, { useState } from "react";
const teethData = [
  { id: 1, name: "Upper Right Third Molar (Wisdom Tooth)" },
  { id: 2, name: "Upper Right Second Molar" },
  { id: 3, name: "Upper Right First Molar" },
  { id: 4, name: "Upper Right Second Premolar" },
  { id: 5, name: "Upper Right First Premolar" },
  { id: 6, name: "Upper Right Canine" },
  { id: 7, name: "Upper Right Lateral Incisor" },
  { id: 8, name: "Upper Right Central Incisor" },
  { id: 9, name: "Upper Left Central Incisor" },
  { id: 10, name: "Upper Left Lateral Incisor" },
  { id: 11, name: "Upper Left Canine" },
  { id: 12, name: "Upper Left First Premolar" },
  { id: 13, name: "Upper Left Second Premolar" },
  { id: 14, name: "Upper Left First Molar" },
  { id: 15, name: "Upper Left Second Molar" },
  { id: 16, name: "Upper Left Third Molar (Wisdom Tooth)" },
  { id: 17, name: "Lower Left Third Molar (Wisdom Tooth)" },
  { id: 18, name: "Lower Left Second Molar" },
  { id: 19, name: "Lower Left First Molar" },
  { id: 20, name: "Lower Left Second Premolar" },
  { id: 21, name: "Lower Left First Premolar" },
  { id: 22, name: "Lower Left Canine" },
  { id: 23, name: "Lower Left Lateral Incisor" },
  { id: 24, name: "Lower Left Central Incisor" },
  { id: 25, name: "Lower Right Central Incisor" },
  { id: 26, name: "Lower Right Lateral Incisor" },
  { id: 27, name: "Lower Right Canine" },
  { id: 28, name: "Lower Right First Premolar" },
  { id: 29, name: "Lower Right Second Premolar" },
  { id: 30, name: "Lower Right First Molar" },
  { id: 31, name: "Lower Right Second Molar" },
  { id: 32, name: "Lower Right Third Molar (Wisdom Tooth)" },
];
export default function Practice() {
  const [selectedTooth, setSelectedTooth] = useState(null);
  const handleClick = (tooth) => {
    setSelectedTooth(tooth);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dental Chart (Click on a Tooth)</h2>
      <svg width="800" height="300">
        {teethData.map((tooth, index) => {
          const x = (index % 16) * 45 + 20; // position teeth horizontally
          const y = index < 16 ? 50 : 150; // upper row & lower row
          return (
            <rect
              key={tooth.id}
              x={x}
              y={y}
              width="30"
              height="50"
              rx="5"
              ry="5"
              fill={selectedTooth?.id === tooth.id ? "orange" : "white"}
              stroke="black"
              onClick={() => handleClick(tooth)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </svg>                                                                                                                                                                                            
      {selectedTooth && (
        <div style={{ marginTop: "20px" }}>
          <h3>Tooth Details</h3>
          <p>
            <b>ID:</b> {selectedTooth.id}
          </p>
          <p>
            <b>Name:</b> {selectedTooth.name}
          </p>
        </div>
      )}
    </div>
  );
}
