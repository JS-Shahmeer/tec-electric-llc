import React from "react";

export default function SectionLabel({ number, text }) {
  return (
    <div className="spec-label mb-4">
      [ {number}. {text} ]
    </div>
  );
}