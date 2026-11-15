import React from "react";
export default function PlanCard({ plan, isSelected, onSelect }) {
  return (
    <article className={`plan-card${isSelected ? " plan-card--selected" : ""}`}>
      <h2 className="plan-name">{plan.name}</h2>
      <p className="plan-price">₹{plan.price.toLocaleString("en-IN")}</p>
      <p className="plan-days">{plan.days} days validity</p>
      <button
        type="button"
        className={`select-button${isSelected ? " select-button--selected" : ""}`}
        onClick={onSelect}
        aria-pressed={isSelected}
      >
        {isSelected ? "Selected" : "Select"}
      </button>
    </article>
  );
}
