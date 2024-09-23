"use client";

import { useToast } from "@ui/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@ui/components/ui/toast";

interface ToasterProps {
  className?: string;
  isDestructive?: boolean;
}

export function Toaster(props: ToasterProps) {
  const { toasts } = useToast();
  const { className, isDestructive } = props;

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {isDestructive ? (
              <div className="flex w-full justify-center">
                {title && (
                  <ToastTitle className="grow text-center">{title}</ToastTitle>
                )}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            ) : (
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            )}
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport className={className} />
    </ToastProvider>
  );
}
