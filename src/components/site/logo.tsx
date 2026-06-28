import { COMPANY_NAME } from "@/content/home";
import { cn } from "@/lib/utils";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <span
      aria-label={`${COMPANY_NAME} wordmark`}
      className={cn("wordmark shrink-0", compact && "wordmark-compact", className)}
      role="img"
    >
      <span aria-hidden="true" className="wordmark-core">
        <span className="wordmark-letter">A</span>
        <span className="wordmark-x wordmark-x-left">X</span>
        <span className="wordmark-x wordmark-x-right">X</span>
        <span className="wordmark-letter">ION</span>
      </span>
    </span>
  );
}
