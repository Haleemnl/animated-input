// "use client"

// import { useEffect, useState } from "react"

// interface InteractiveCharacterProps {
//     isTyping: boolean
// }

// export default function InteractiveCharacter({ isTyping }: InteractiveCharacterProps) {

//     const [displayState, setDisplayState] = useState<"sad" | "happy">("sad")

//     useEffect(() => {
//         setDisplayState(isTyping ? "happy" : "sad")
//     }, [isTyping])



//     return (
//         <div className="relative w-48 h-48">


//             <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 {/* Head */}
//                 <circle cx="100" cy="100" r="70" fill="#f1d953" className="drop-shadow-lg" />

//                 {/* Left Eye */}
//                 <circle cx="75" cy="85" r="12" fill="#FFFFFF" />
//                 <circle
//                     cx="75"
//                     cy="85"
//                     r="8"
//                     fill="#000000"
//                     className={`transition-all duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-100"}`}
//                 />

//                 {/* Right Eye */}
//                 <circle cx="125" cy="85" r="12" fill="#FFFFFF" />
//                 <circle
//                     cx="125"
//                     cy="85"
//                     r="8"
//                     fill="#000000"
//                     className={`transition-all duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-100"}`}
//                 />

//                 {/* Left Eye Shine */}
//                 <circle
//                     cx="77"
//                     cy="82"
//                     r="3"
//                     fill="#FFFFFF"
//                     className={`transition-opacity duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-50"}`}
//                 />

//                 {/* Right Eye Shine */}
//                 <circle
//                     cx="127"
//                     cy="82"
//                     r="3"
//                     fill="#FFFFFF"
//                     className={`transition-opacity duration-300 ${displayState === "happy" ? "opacity-100" : "opacity-50"}`}
//                 />

//                 {/* Mouth - Sad (downward curve) */}
//                 {displayState === "sad" && (
//                     <path
//                         d="M 70 130 Q 100 115 130 130"
//                         // d="M 70 120 Q 100 140 130 120"
//                         stroke="#000000"
//                         strokeWidth="3"
//                         fill="none"
//                         strokeLinecap="round"
//                         className="animate-pulse"
//                     />
//                 )}

//                 {/* Mouth - Happy (upward smile) */}
//                 {displayState === "happy" && (
//                     <path
//                         d="M 70 120 Q 100 140 130 120"
//                         stroke="#000000"
//                         strokeWidth="3"
//                         fill="none"
//                         strokeLinecap="round"
//                         className="animate-pulse"
//                         style={{ animationDuration: "1.5s" }}
//                     />
//                 )}

//                 {/* Eyebrows - Sad (downward angle) */}
//                 {displayState === "sad" && (
//                     <>
//                         <path
//                             d="M 60 60 Q 75 70 90 65"
//                             stroke="#000000"
//                             strokeWidth="2.5"
//                             fill="none"
//                             strokeLinecap="round"
//                             className="transition-all duration-300"
//                         />
//                         <path
//                             d="M 110 65 Q 125 70 140 60"
//                             stroke="#000000"
//                             strokeWidth="2.5"
//                             fill="none"
//                             strokeLinecap="round"
//                             className="transition-all duration-300"
//                         />
//                     </>
//                 )}

//                 {/* Eyebrows - Happy (raised) */}
//                 {displayState === "happy" && (
//                     <>
//                         <path
//                             d="M 60 70 Q 75 60 90 70"
//                             stroke="#000000"
//                             strokeWidth="2.5"
//                             fill="none"
//                             strokeLinecap="round"
//                             className="transition-all duration-300"
//                         />
//                         <path
//                             d="M 110 70 Q 125 60 140 70"
//                             stroke="#000000"
//                             strokeWidth="2.5"
//                             fill="none"
//                             strokeLinecap="round"
//                             className="transition-all duration-300"
//                         />
//                     </>
//                 )}

//                 {/* Blush - appears when happy */}
//                 {displayState === "happy" && (
//                     <>
//                         <circle cx="50" cy="110" r="8" fill="#FF69B4" opacity="0.4" className="animate-pulse" />
//                         <circle cx="150" cy="110" r="8" fill="#FF69B4" opacity="0.4" className="animate-pulse" />
//                     </>
//                 )}

//                 {/* Tears - appears when sad */}
//                 {displayState === "sad" && (
//                     <>
//                         <circle cx="75" cy="100" r="2" fill="#87CEEB" opacity="0.6" />
//                         <circle cx="75" cy="105" r="1.5" fill="#87CEEB" opacity="0.4" />
//                         <circle cx="125" cy="100" r="2" fill="#87CEEB" opacity="0.6" />
//                         <circle cx="125" cy="105" r="1.5" fill="#87CEEB" opacity="0.4" />
//                     </>
//                 )}
//             </svg>


//         </div>
//     )
// }





























"use client"

import type React from "react"
import { useState } from "react"

type EmotionState = "bored" | "thinking" | "happy"

export default function InteractiveCharacter() {
    const [input, setInput] = useState("")
    const [emotion, setEmotion] = useState<EmotionState>("bored")
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInput(value)

        if (value.length === 0) {
            setEmotion("bored")
            setSubmitted(false)
        } else {
            setEmotion("thinking")
            setSubmitted(false)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim()) {
            setEmotion("happy")
            setSubmitted(true)
            // Reset after 2 seconds
            setTimeout(() => {
                setInput("")
                setEmotion("bored")
                setSubmitted(false)
            }, 2000)
        }
    }

    const getCharacterImage = () => {
        switch (emotion) {
            case "thinking":
                return "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXh0MnYzZXN3cGo3N3JybmluNmtseDQ2eXNmajdmY2xuajlycDFlbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14mgxYFJHXGmoo/giphy.gif"
            case "happy":
                return "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXBhZm9lMmFuaWo4dHE4azhhODBjbXhwcTUzNGQ4amIwMHoyazZ4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aQYR1p8saOQla/giphy.gif"
            case "bored":
            default:
                return "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWYzZmF1YXhzc2trdWl3azZqcHNremhvemM3OWcwaG1sc3ZmdWk1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tXL4FHPSnVJ0A/giphy.gif"
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                {/* Character Display */}
                <div className="flex justify-center mb-8">
                    <img
                        src={getCharacterImage() || "/placeholder.svg"}
                        alt={`Character looking ${emotion}`}
                        className="w-64 h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Status Text */}
                <div className="text-center mb-6 h-6">
                    {emotion === "bored" && <p className="text-gray-500 text-sm">I'm bored... say something!</p>}
                    {emotion === "thinking" && <p className="text-blue-600 text-sm font-medium">Hmm, interesting...</p>}
                    {emotion === "happy" && <p className="text-green-600 text-sm font-medium">Yay! That's awesome!</p>}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type something..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-black"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Submit
                    </button>
                </form>

                {/* Submitted Message */}
                {submitted && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                        <p className="text-green-700 text-sm">
                            You said: <span className="font-semibold">{input}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
