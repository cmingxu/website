"use client"

import React, { useMemo } from "react"

export type SquaresProps = {
  direction?: "diagonal" | "up" | "right" | "down" | "left"
  speed?: number // animation speed multiplier
  borderColor?: string
  squareSize?: number // px
  className?: string
}

// Lightweight squares background using CSS repeating-linear-gradients.
// This mirrors the React Bits Squares effect API and moves the grid smoothly.
export function Squares({
  direction = "diagonal",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  className,
}: SquaresProps) {
  const duration = useMemo(() => {
    const base = 20 // seconds
    const d = base / Math.max(0.1, speed)
    return Math.max(6, Math.min(60, d))
  }, [speed])

  const keyframesName = useMemo(
    () => `rb-squares-${direction}-${squareSize}-${Math.round(speed * 1000)}`,
    [direction, squareSize, speed]
  )

  const halfX = `${squareSize}px`
  const halfY = `${squareSize}px`

  // Compute 50% state for background position based on direction
  const midPos = useMemo(() => {
    switch (direction) {
      case "up":
        return { x1: "0", y1: `-${halfY}`, x2: "0", y2: `-${halfY}` }
      case "down":
        return { x1: "0", y1: halfY, x2: "0", y2: halfY }
      case "left":
        return { x1: `-${halfX}`, y1: "0", x2: `-${halfX}`, y2: "0" }
      case "right":
        return { x1: halfX, y1: "0", x2: halfX, y2: "0" }
      case "diagonal":
      default:
        return { x1: halfX, y1: "0", x2: "0", y2: halfY }
    }
  }, [direction, halfX, halfY])

  const styleTag = `@keyframes ${keyframesName} {\n  0% { background-position: 0 0, 0 0; }\n  50% { background-position: ${midPos.x1} ${midPos.y1}, ${midPos.x2} ${midPos.y2}; }\n  100% { background-position: 0 0, 0 0; }\n}`

  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `repeating-linear-gradient(0deg, transparent 0, transparent ${squareSize - 1}px, ${borderColor} ${squareSize - 1}px, ${borderColor} ${squareSize}px), repeating-linear-gradient(90deg, transparent 0, transparent ${squareSize - 1}px, ${borderColor} ${squareSize - 1}px, ${borderColor} ${squareSize}px)`,
        animation: `${keyframesName} ${duration}s ease-in-out infinite`,
        willChange: "background-position",
        pointerEvents: "none",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: styleTag }} />
    </div>
  )
}