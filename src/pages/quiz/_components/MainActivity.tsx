import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ExplainSection from "./ExplainSection";

const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <main
        className="flex h-screen w-full flex-col"
        style={{
          background:
            "linear-gradient(123deg, #7CABE9 54%, #0169F4 79%, #055ED6 99%)",
        }}
      >
        <main className="flex w-full flex-grow flex-col items-center bg-white/[.84] pt-[200px]">
          <ExplainSection />
        </main>
      </main>
    </AppScreen>
  );
};

export default MainActivity;
