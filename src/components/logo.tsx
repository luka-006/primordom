import { cn } from "@/lib/utils";

type LogoProps = { className?: string; showText?: boolean; size?: "sm" | "md" | "lg" };
const sizes = { sm: { icon: 32, text: "text-base" }, md: { icon: 40, text: "text-lg" }, lg: { icon: 48, text: "text-xl" } };
export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const s = sizes[size];
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
        <rect width="48" height="48" rx="12" className="fill-primary" />
        <path d="M24 11L12 22h4v13h16V22h4L24 11z" className="fill-primary-foreground" fillOpacity="0.95" />
        <path d="M10 38c3-2 7-3 14-3s11 1 14 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ stroke: "var(--accent-brand)" }} />
        <circle cx="24" cy="26" r="2" style={{ fill: "var(--accent-brand)" }} />
      </svg>
      {showText && (<span className={cn("font-heading font-semibold tracking-tight", s.text)}>Primor<span className="text-primary">Dom</span></span>)}
    </span>
  );
}
