import type { TypeActivities } from "./shadowingflow";

import { useActions } from "@stackflow/react";

export const useShadowingFlow = () => {
  return useActions<TypeActivities>();
};
