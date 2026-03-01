import React from "react";

function CounterDisplay({ count, goal }) {
  console.log("CounterDisplay rendered");
  return (
    <div style={{ marginTop: 10 }}>
      <div>{count} / {goal} glasses completed</div>
      {count >= goal && <div style={{ color: "green" }}>Goal Reached</div>}
    </div>
  );
}

export default React.memo(CounterDisplay);
