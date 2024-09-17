import React from "react";
import { cn } from "@ui/lib/utils";

interface ActivityHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: number;
}

const ActivityHeader: React.FC<ActivityHeaderProps> = ({
  className,
  children,
  step,
  ...props
}) => {
  return (
    <header
      className={cn("flex w-full flex-col justify-center gap-2", className)}
      {...props}
    >
      <h1 className="text-center text-[70px] font-bold leading-tight [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]">
        {step}
      </h1>
      {children}
    </header>
  );
};

interface ActivityContentProps extends React.HTMLAttributes<HTMLDivElement> {
  container: "pronunciation" | "shadowing" | "quiz";
}

const ActivityContent: React.FC<ActivityContentProps> = ({
  className,
  children,
  container,
  ...props
}) => {
  return (
    <main className={`${container}-container h-full w-full pt-[88px]`}>
      <section
        className={cn(
          "flex h-full w-full flex-col items-center justify-start gap-2 bg-white/[.42] pt-[40px]",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    </main>
  );
};
ActivityContent.displayName = "ActivityContent";

const ActivityMain = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn(
        "flex w-full flex-1 flex-col items-center justify-center gap-14",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

ActivityMain.displayName = "ActivityMain";

const Activity = ({ children }: { children: React.ReactNode }) => {
  return children;
};
Activity.displayName = "Activity";

export { ActivityHeader, ActivityContent, ActivityMain, Activity };
