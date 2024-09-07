import type { TypeActivities } from "./quizflow";

import { useActions } from "@stackflow/react";

export const useQuizFlow = () => {
  return useActions<TypeActivities>();
};
