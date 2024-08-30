import type { TypeActivities } from "./pronunciationflow";

import { useActions } from "@stackflow/react";

export const usePronunciationFlow = () => {
  return useActions<TypeActivities>();
};
