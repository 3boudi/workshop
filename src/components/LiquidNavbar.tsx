import * as React from "react"

export type NimbusFx = "plane" | "drop" | "spin" | "glow" | "wave" | "pop" | "none"

export type LiquidNavItem = {
  label: string
  href?: string
  icon?: React.ReactNode
  stickerSrc?: string
  fx?: NimbusFx
}

export type LiquidNavbarProps = {
  items?: LiquidNavItem[]
  defaultActive?: number
  active?: number
  onChange?: (index: number, item: LiquidNavItem) => void
  tone?: "light" | "dark"
  compact?: boolean
  sound?: boolean
  className?: string
  style?: React.CSSProperties
  onJoinClick?: () => void
}

const I = (d: React.ReactNode) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)

export const WorkshopIcons = {
  home: I(<><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>),
  supervisor: I(<><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /><path d="m17 11 2 2 4-4" /></>),
  program: I(<><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>),
  requirements: I(<><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>),
  registration: I(<><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></>),
}

export const DEFAULT_WORKSHOP_ITEMS: LiquidNavItem[] = [
  { label: "Home", href: "#home", icon: WorkshopIcons.home, fx: "pop" },
  { label: "Supervisor", href: "#supervisor", icon: WorkshopIcons.supervisor, fx: "glow" },
  { label: "Program", href: "#program", icon: WorkshopIcons.program, fx: "wave" },
  { label: "Requirements", href: "#requirements", icon: WorkshopIcons.requirements, fx: "spin" },
  { label: "Registration", href: "#registration", icon: WorkshopIcons.registration, fx: "plane" },
]

/* ---------- Workshop Green, Distinct Hover & Neon Active CSS ---------- */
const NIMBUS_CSS = `
.nimbus-nav{
  --n-tint:rgba(255,255,255,.94);
  --n-fg:#061A0C;
  --n-fg-soft:#4A5D50;
  --n-rim:rgba(118,245,18,.75);
  position:relative;display:inline-flex;align-items:center;gap:3px;padding:3px 4px;border-radius:999px;isolation:isolate;
  border:1.5px solid #093316;
  font-family:ui-sans-serif,-apple-system,"SF Pro Text","Segoe UI",system-ui,sans-serif;-webkit-font-smoothing:antialiased;user-select:none;-webkit-tap-highlight-color:transparent
}
.nimbus-nav[data-tone="dark"]{--n-tint:rgba(9,51,22,.92);--n-fg:#FFFFFF;--n-fg-soft:rgba(244,251,240,.75);--n-rim:rgba(118,245,18,.55)}
.nimbus-glass{
  position:absolute;inset:0;border-radius:inherit;z-index:-1;overflow:hidden;background:var(--n-tint);
  -webkit-backdrop-filter:blur(12px) saturate(1.2);backdrop-filter:blur(12px) saturate(1.2);
  box-shadow:inset 0 1px 1px var(--n-rim),0 4px 14px -6px rgba(9,51,22,.28),0 2px 0 #093316
}

/* Nav Item Base */
.nimbus-item{
  position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 12px;border:0;border-radius:999px;background:transparent;color:var(--n-fg-soft);
  font-family:inherit;font-weight:700;font-size:12px;line-height:1;letter-spacing:-.01em;text-decoration:none;cursor:pointer;
  transition:color .2s cubic-bezier(.16,1,.3,1),background .2s ease,border .2s ease,transform .15s ease,box-shadow .2s ease;
}

/* 1. HOVER STATE: Light Green ONLY for Inactive Items */
.nimbus-item:not([aria-current="page"]):hover{
  color:#0D421C !important;
  background:#DCFCE7 !important;
  border:1px solid #86EFAC !important;
  box-shadow:0 2px 10px rgba(118,245,18,.35) !important;
  transform:translateY(-1px)
}
.nimbus-item:not([aria-current="page"]):hover .nv-ico svg{
  stroke:#16A34A !important;
  transform:scale(1.1)
}

/* 2. ACTIVE STATE: Pure Deep Forest (#093316) & Neon Green (#76FF03) - ZERO LIGHT GREEN */
.nimbus-item[aria-current="page"]{
  color:#76FF03 !important;
  background:#093316 !important;
  border:1.5px solid #76FF03 !important;
  box-shadow:0 0 10px rgba(118,245,18,.45),inset 0 0 4px rgba(118,245,18,.25) !important;
  transform:translateY(-0.5px) !important;
}
.nimbus-item[aria-current="page"] .nv-ico svg{
  stroke:#76FF03 !important;
  transform:scale(1.15) !important;
}

/* Active item hover keeps pure dark green and neon border */
.nimbus-item[aria-current="page"]:hover{
  color:#76FF03 !important;
  background:#093316 !important;
  border:1.5px solid #76FF03 !important;
  box-shadow:0 0 12px rgba(118,245,18,.55),inset 0 0 4px rgba(118,245,18,.25) !important;
}
.nimbus-item[aria-current="page"]:hover .nv-ico svg{
  stroke:#76FF03 !important;
}

.nimbus-item:focus-visible{outline:2px solid #76FF03;outline-offset:2px}
.nv-ico{position:relative;display:inline-flex;align-items:center;justify-content:center;flex:none}
.nv-ico svg,.nv-ico img{transition:transform .35s cubic-bezier(.3,1.6,.5,1),stroke .2s ease}
.nv-sticker-img{width:16px;height:16px;object-fit:contain}

/* Animation keyframes */
.nv-ico[data-fx="pop"] svg{animation:nvPop .45s cubic-bezier(.3,1.6,.5,1) both}
@keyframes nvPop{0%{transform:scale(.72)}60%{transform:scale(1.2)}100%{transform:scale(1.15)}}
.nv-ico[data-fx="plane"] svg{animation:nvPlane 1s cubic-bezier(.55,0,.3,1) both}
@keyframes nvPlane{0%{transform:none}12%{transform:translate(-2px,2px) rotate(6deg)}42%{transform:translate(40px,-20px) rotate(-20deg) scale(.9);opacity:0}43%{transform:translate(-40px,12px) rotate(-10deg) scale(.9);opacity:0}58%{opacity:1}80%{transform:translate(2px,-1px) rotate(2deg)}100%{transform:scale(1.15)}}
.nv-ico[data-fx="drop"] svg{animation:nvDrop .85s cubic-bezier(.4,0,.3,1) both;transform-origin:50% 100%}
@keyframes nvDrop{0%{transform:none}26%{transform:translateY(-10px) scale(.88,1.12)}46%{transform:translateY(2px) scale(1.2,.75)}62%{transform:translateY(-2px) scale(.95,1.05)}100%{transform:scale(1.15)}}
.nv-ico[data-fx="spin"] svg{animation:nvSpin .85s cubic-bezier(.2,.75,.25,1) both}
@keyframes nvSpin{0%{transform:perspective(60px) rotateY(0)}100%{transform:perspective(60px) rotateY(360deg) scale(1.15)}}
.nv-ico[data-fx="glow"] svg{animation:nvHop .75s cubic-bezier(.3,1.4,.5,1) both;transform-origin:50% 100%}
@keyframes nvHop{0%{transform:none}30%{transform:translateY(-4px) scale(1.04,.96)}55%{transform:translateY(0) scale(1.1,.9)}100%{transform:scale(1.15)}}
.nv-ico[data-fx="wave"] svg{animation:nvWave .85s ease-in-out both;transform-origin:50% 92%}
@keyframes nvWave{0%{transform:none}20%{transform:rotate(-14deg)}40%{transform:rotate(10deg)}60%{transform:rotate(-6deg)}100%{transform:scale(1.15)}}

/* Responsive compact mode */
.nimbus-label{display:inline-block;white-space:nowrap}
@media (max-width:1023px){
  .nimbus-nav .nimbus-label{display:none !important}
  .nimbus-nav{padding:2px 3px;gap:1px}
  .nimbus-item{height:30px !important;padding:0 8px !important;gap:0 !important}
  .nv-ico svg{width:15px !important;height:15px !important}
}
@media (max-width:480px){
  .nimbus-item{height:28px !important;padding:0 6px !important}
  .nv-ico svg{width:14px !important;height:14px !important}
}
@media (prefers-reduced-motion:reduce){.nv-ico svg,.nv-ico img{animation:none!important;transition:none}}
`

export const LiquidNavbar: React.FC<LiquidNavbarProps> = ({
  items = DEFAULT_WORKSHOP_ITEMS,
  defaultActive = 0,
  active,
  onChange,
  tone = "light",
  compact = false,
  sound = false,
  className = "",
  style,
  onJoinClick,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultActive)
  const currentActive = active !== undefined ? active : activeIndex
  const navRef = React.useRef<HTMLElement>(null)
  const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([])

  const handleClick = (idx: number, it: LiquidNavItem, e: React.MouseEvent) => {
    setActiveIndex(idx)
    onChange?.(idx, it)
    if (it.href && it.href.startsWith("#")) {
      e.preventDefault()
      const el = document.querySelector(it.href)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NIMBUS_CSS }} />
      <nav
        ref={navRef}
        className={`nimbus-nav ${className}`}
        data-tone={tone}
        data-compact={compact ? "true" : "false"}
        style={style}
        role="navigation"
        aria-label="Workshop Navigation"
      >
        <div className="nimbus-glass" />

        {items.map((it, idx) => {
          const isAct = idx === currentActive
          return (
            <a
              key={it.label}
              ref={(el) => { itemRefs.current[idx] = el }}
              href={it.href || "#"}
              className="nimbus-item"
              aria-current={isAct ? "page" : undefined}
              onClick={(e) => handleClick(idx, it, e)}
              title={it.label}
            >
              <span className="nv-ico" data-fx={isAct ? it.fx || "pop" : undefined}>
                {it.stickerSrc ? (
                  <img src={it.stickerSrc} alt={it.label} className="nv-sticker-img" />
                ) : (
                  it.icon
                )}
              </span>
              <span className="nimbus-label">{it.label}</span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
