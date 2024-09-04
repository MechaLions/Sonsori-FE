import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import "@stackflow/plugin-basic-ui/index.css";

import QuizActivity from "@/pages/shadowing/_components/QuizActivity";
import MainActivity from "@/pages/shadowing/_components/MainActivity";
import AnswerActivity from "@/pages/shadowing/_components/AnswerActivity";

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
    QuizActivity,
    AnswerActivity,
  },
  initialActivity: () => "MainActivity",
});

export type TypeActivities = typeof activities;
