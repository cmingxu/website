"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"

export type LogoLoopProps = {
  logos: React.ReactNode[]
  speed?: number // pixels per second
  direction?: "left" | "right"
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  ariaLabel?: string
  className?: string
  style?: React.CSSProperties
}

export function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  ariaLabel = "Partner logos",
  className,
  style,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [duration, setDuration] = useState<number>(20)
  const [paused, setPaused] = useState<boolean>(false)

  // Duplicate logos for seamless loop
  const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const trackWidth = el.scrollWidth / 2 // width of one sequence
    const pixelsPerSecond = Math.max(10, speed)
    const seconds = trackWidth / pixelsPerSecond
    setDuration(seconds)
  }, [logos, speed])

  const onMouseEnter = () => {
    if (pauseOnHover) setPaused(true)
  }
  const onMouseLeave = () => {
    if (pauseOnHover) setPaused(false)
  }

  return (
    <div
      ref={containerRef}
      className={`group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className ?? ""}`}
      style={{ width, ...style }}
      aria-label={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex items-center"
        style={{
          // animate from 0 to -50% (left) or reverse (right)
          animationName: direction === "left" ? "logo-loop-left" : "logo-loop-right",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center"
            style={{ marginRight: gap, height: logoHeight }}
          >
            {/* Constrain height while keeping aspect ratio */}
            <div style={{ height: logoHeight, display: "flex", alignItems: "center" }}>{logo}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes logo-loop-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes logo-loop-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}