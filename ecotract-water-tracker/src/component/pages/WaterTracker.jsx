import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";

export default function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("water_count");
    if (saved) setCount(Number(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("water_count", count);
  }, [count]);

  useEffect(() => {
    async function fetchTip() {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTip(data.slip.advice);
      } catch {
        setError("Failed to load tip");
      } finally {
        setLoading(false);
      }
    }
    fetchTip();
  }, []);

  const addWater = useCallback(() => setCount(c => c + 1), []);
  const removeWater = useCallback(() => setCount(c => Math.max(0, c - 1)), []);
  const reset = useCallback(() => setCount(0), []);

  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>Daily Water Tracker</h2>

        <button onClick={removeWater}>-</button>
        <span style={{ margin: 10 }}>{count}</span>
        <button onClick={addWater}>+</button>
        <button onClick={reset} style={{ marginLeft: 10 }}>Reset</button>

        <CounterDisplay count={count} goal={goal} />

        <div style={{ marginTop: 20 }}>
          <h4>Today's Health Tip</h4>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <p>{tip}</p>}
        </div>
      </div>
    </>
  );
}
