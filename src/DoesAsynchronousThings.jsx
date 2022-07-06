import { useState } from "react";

// See the `lib/suspensify.js` tab above.
import { suspensify } from "./lib/suspensify";

// Renders a button that, when clicked, fetches and displays
// a random cat fact.
export default function DoesAsynchronousThings() {
  // Holds the pending Promise.
  const [promise, setPromise] = useState();

  // Triggers a network request, wraps the Promise in a
  // Suspense-aware interface, and sets the pending Promise.
  const onClick = () => {
    setPromise(suspensify(fetchCatFact()));
  };

  // If the pending Promise is set, try to read it.
  // The `read()` method is added by `suspensify()`
  const catFact = promise ? promise.read() : null;

  return (
    <div>
      <button onClick={onClick}>Fetch Cat Fact</button>
      {catFact && <p>{catFact.fact}</p>}
    </div>
  );
}

// Fetches a random cat fact from https://catfact.ninja/.
async function fetchCatFact() {
  const res = await fetch("https://catfact.ninja/fact");

  return res.json();
}
