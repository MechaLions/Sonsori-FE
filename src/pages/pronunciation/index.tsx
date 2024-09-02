import { Suspense } from "react";

import { Stack } from "@/utils/pronunciationflow";

const PronunciationPage = () => {
  return (
    <main className="h-full w-full">
      <Suspense fallback={<div className="text-3xl font-bold">Loading...</div>}>
        <Stack />
      </Suspense>
    </main>
  );
};

export default PronunciationPage;
