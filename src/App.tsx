import { useState } from "react"

export function App()
{
  let [count, setCount] = useState(0);
  let [message, setMessage] = useState("i");
  let words = 
  [
    "am",
    "a",
    "skibidi",
    "sigma"
  ];

  return (
    <>
      <h1 onClick={() => 
        {
          if(words[count])
          {
            setCount(count + 1);
            setMessage(`${message } ${words[count]}`)
          }
        }}>{message}</h1>
    </>
  )
}