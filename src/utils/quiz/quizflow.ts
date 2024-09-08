import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import "@stackflow/plugin-basic-ui/index.css";

import ResultActivity from "@/pages/quiz/_components/ResultActivity";
import QuizActivity from "@/pages/quiz/_components/QuizActivity";
import MainActivity from "@/pages/quiz/_components/MainActivity";

export const { Stack, activities } = stackflow({
  transitionDuration: 500,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    MainActivity,
    ResultActivity,
    QuizActivity,
  },
  initialActivity: () => "MainActivity",
});

export type TypeActivities = typeof activities;
