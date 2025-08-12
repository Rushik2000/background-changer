import { useState } from "react"

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="flex justify-center h-screen items-center text-4xl font-marathi"> जय श्रीराम 🔱🚩 </div>
        <div className="fixed flex flex-wraps justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "red" }}>
              Red</button>
            <button onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "green" }}>
              Green</button>
            <button onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "blue" }}>
              Blue</button>
            <button onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "orange" }}>
              Orange</button>
            <button onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "black" }}>
              Black</button>
            <button onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shodow-lg font-serif"
              style={{ backgroundColor: "white" }}>
              White</button>
            <button onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "olive" }}>
              Olive</button>
            <button onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "pink" }}>
              Pink</button>
            <button onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shodow-lg font-serif"
              style={{ backgroundColor: "yellow" }}>
              Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
