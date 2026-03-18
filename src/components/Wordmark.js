import { Logo } from "@/components/site/logo";

export default function Wordmark({ compact = false, className = "" }) {
  return <Logo className={className} compact={compact} />;
}
