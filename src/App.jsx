import { Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";
import DoesAsynchronousThings from "./DoesAsynchronousThings";

// The root of the app. It has an Error Boundary, a Suspense Boundary, and a
// component that demonstrates asynchronous loading.
export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="Loading...">
        <DoesAsynchronousThings />
      </Suspense>
    </ErrorBoundary>
  );
}
