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
      className={cn("flex w-full flex-col justify-center gap-4", className)}
      {...props}
    >
      <h1 className="text-center text-[70px] font-bold [text-shadow:_0px_4px_4px_rgba(0,0,0,0.25)]">
        {step}
      </h1>
      {children}
    </header>
  );
};

const ActivityContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <main className="shadowing-container h-full w-full pt-[88px]">
      <section
        className={cn(
          "flex h-full w-full flex-col items-center justify-between bg-white/[.42] pb-[110px] pt-[50px]",
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

const ActivityFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer className={cn(className, "sticky bottom-0 z-50")} {...props} />
  );
};
ActivityFooter.displayName = "ActivityFooter";

const Activity = ({ children }: { children: React.ReactNode }) => {
  return children;
};
Activity.displayName = "Activity";

export { ActivityHeader, ActivityContent, ActivityFooter, Activity };
