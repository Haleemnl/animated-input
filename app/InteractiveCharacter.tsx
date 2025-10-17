"use client"

import { useEffect, useState } from "react"

interface InteractiveCharacterProps {
    isTyping: boolean
}

export default function InteractiveCharacter({ isTyping }: InteractiveCharacterProps) {

    const [displayState, setDisplayState] = useState<"sad" | "happy">("sad")

    useEffect(() => {
        setDisplayState(isTyping ? "happy" : "sad")
    }, [isTyping])



    return (
        <div className="relative w-48 h-48">


            <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Head */}
                <circle cx="100" cy="100" r="70" fill="#f1d953" className="drop-shadow-lg" />

                {/* Left Eye */}
                <circle cx="75" cy="85" r="12" fill="#FFFFFF" />
                <circle
                    cx="75"
                    cy="85"
                    r="8"
                    fill="#000000"
                    className={`transition-all duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-100"}`}
                />

                {/* Right Eye */}
                <circle cx="125" cy="85" r="12" fill="#FFFFFF" />
                <circle
                    cx="125"
                    cy="85"
                    r="8"
                    fill="#000000"
                    className={`transition-all duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-100"}`}
                />

                {/* Left Eye Shine */}
                <circle
                    cx="77"
                    cy="82"
                    r="3"
                    fill="#FFFFFF"
                    className={`transition-opacity duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-50"}`}
                />

                {/* Right Eye Shine */}
                <circle
                    cx="127"
                    cy="82"
                    r="3"
                    fill="#FFFFFF"
                    className={`transition-opacity duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-50"}`}
                />

                {/* Mouth - Sad (downward curve) */}
                {displayState === "sad" && (
                    <path
                        d="M 70 130 Q 100 115 130 130"
                        // d="M 70 120 Q 100 140 130 120"
                        stroke="#000000"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        className="animate-pulse"
                    />
                )}

                {/* Mouth - Happy (upward smile) */}
                {displayState === "happy" && (
                    <path
                        d="M 70 120 Q 100 140 130 120"
                        stroke="#000000"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        className="animate-pulse"
                        style={{ animationDuration: "1.5s" }}
                    />
                )}

                {/* Eyebrows - Sad (downward angle) */}
                {displayState === "sad" && (
                    <>
                        <path
                            d="M 60 60 Q 75 70 90 65"
                            stroke="#000000"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            className="transition-all duration-300"
                        />
                        <path
                            d="M 110 65 Q 125 70 140 60"
                            stroke="#000000"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            className="transition-all duration-300"
                        />
                    </>
                )}

                {/* Eyebrows - Happy (raised) */}
                {displayState === "happy" && (
                    <>
                        <path
                            d="M 60 70 Q 75 60 90 70"
                            stroke="#000000"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            className="transition-all duration-300"
                        />
                        <path
                            d="M 110 70 Q 125 60 140 70"
                            stroke="#000000"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            className="transition-all duration-300"
                        />
                    </>
                )}

                {/* Blush - appears when happy */}
                {displayState === "happy" && (
                    <>
                        <circle cx="50" cy="110" r="8" fill="#FF69B4" opacity="0.4" className="animate-pulse" />
                        <circle cx="150" cy="110" r="8" fill="#FF69B4" opacity="0.4" className="animate-pulse" />
                    </>
                )}

                {/* Tears - appears when sad */}
                {displayState === "sad" && (
                    <>
                        <circle cx="75" cy="100" r="2" fill="#87CEEB" opacity="0.6" />
                        <circle cx="75" cy="105" r="1.5" fill="#87CEEB" opacity="0.4" />
                        <circle cx="125" cy="100" r="2" fill="#87CEEB" opacity="0.6" />
                        <circle cx="125" cy="105" r="1.5" fill="#87CEEB" opacity="0.4" />
                    </>
                )}
            </svg>


        </div>
    )
}
