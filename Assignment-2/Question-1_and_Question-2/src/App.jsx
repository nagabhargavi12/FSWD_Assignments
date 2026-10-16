import React, { useState } from "react";
import PlanCard from "./PlanCard.jsx";

const plans = [
  { id: 1, name: "Daily 1.5 GB", price: 299, days: 28 },
  { id: 2, name: "Daily 2 GB", price: 349, days: 28 },
  { id: 3, name: "Annual", price: 2999, days: 365 },
  { id: 4, name: "Add-on 10 GB", price: 99, days: 7 },
];

export default function App() {
 
  const [selectedPlanId, setSelectedPlanId] = useState(2);
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId);

  return (
    <main className="page">
      <section className="picker" aria-labelledby="page-title">
        <p className="eyebrow">SAMPLE SCREEN</p>
        <h1 id="page-title">Choose a recharge plan</h1>
        <p className="description">Select the plan that works best for you.</p>

        <div className="plan-grid">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isSelected={selectedPlanId === plan.id}
              onSelect={() => setSelectedPlanId(plan.id)}
            />
          ))}
        </div>

        <p className="selected-summary" aria-live="polite">
          <strong>Selected:</strong> {selectedPlan.name} · ₹
          {selectedPlan.price.toLocaleString("en-IN")}
        </p>
      </section>
    </main>
  );
}

