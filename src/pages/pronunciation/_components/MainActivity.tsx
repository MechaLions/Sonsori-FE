import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ExplainSection from "./ExplainSection";
import CategorySection from "./CategorySection";

const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <main
        className="w-full grow"
        style={{
          background:
            "linear-gradient(123deg, #7CABE9 54%, #0169F4 79%, #055ED6 99%)",
        }}
      >
        <main className="flex w-full grow flex-col items-center gap-[74px] bg-white/[.84] py-[100px]">
          <ExplainSection />
          <CategorySection />
        </main>
      </main>
    </AppScreen>
  );
};

export default MainActivity;
