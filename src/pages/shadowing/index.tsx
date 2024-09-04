import { Suspense } from "react";

import { Stack } from "@/utils/shadowing/shadowingflow";

const ShadowingPage = () => {
  return (
    <main className="h-full w-full">
      <Suspense fallback={<div className="text-3xl font-bold">Loading...</div>}>
        <Stack />
      </Suspense>
    </main>
  );
};

export default ShadowingPage;
