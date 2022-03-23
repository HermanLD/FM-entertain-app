import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "../../stores/counter";

describe("counter test", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("inc test", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it("Double test", () => {
    const counter = useCounterStore();
    counter.increment();
    expect(counter.doubleCount).toBe(2);
  });
});
