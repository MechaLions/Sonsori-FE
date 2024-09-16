import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ExplainSection from "./ExplainSection";

const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <main
        className="h-full w-full grow"
        style={{
          background:
            "linear-gradient(123deg, #7CABE9 54%, #0169F4 79%, #055ED6 99%)",
        }}
      >
        <main className="flex h-full w-full flex-col items-center justify-center bg-white/[.84] pt-[88px]">
          <ExplainSection />
        </main>
      </main>
    </AppScreen>
  );
};

export default MainActivity;
