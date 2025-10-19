// "use client"

// import { useState } from "react"
// import InteractiveCharacter from "./InteractiveCharacter"

// export default function Home() {
//   const [inputValue, setInputValue] = useState("")

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">

//           <div className="flex justify-center">

//             <div className="">
//               <p className="text-right text-black">{inputValue.length > 0 ? "😊 yayyy!" : "😴 I'm bored..."}</p>


//               <InteractiveCharacter isTyping={inputValue.length > 0} />
//             </div>

//           </div>

//           <div className="space-y-3">
//             <label className="block text-sm font-semibold text-gray-700">Say something to make me smile!</label>
//             <input
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               placeholder="Start typing..."
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-400"
//             />
//           </div>


//         </div>
//       </div>
//     </main>
//   )
// }




















import React from 'react'
import InteractiveCharacter from './InteractiveCharacter'

const page = () => {
  return (
    <div>

      <InteractiveCharacter />

    </div>
  )
}

export default page