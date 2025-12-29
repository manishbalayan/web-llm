import { useState } from "react";
import { CreateMLCEngine } from "@mlc-ai/web-llm";
export default function App() {
  const [engine, setEngine] = useState(null)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const[isloaded,setIsloaded]=useState(true)
  async function loadModel() {
    const e = await CreateMLCEngine("Llama-3.2-1B-Instruct-q4f32_1-MLC");
    setEngine(e)
    setIsloaded(false)
  }
  async function send() {
    if (!input || !engine) return;
    const response = await engine.chat.completions.create({
      messages: [{ role: "user", content: input }],
      stream: false
    });
    const reply = response.choices[0].message.content;
    setMessages([
      ...messages,
      { role: "user", text: input },
      { role: "bot", text: reply }
    ]);
    setInput("");
  }
  return (
    <div style={{ padding: 20 }}>
      {isloaded && <button onClick={loadModel}>Load Model</button>}
      <div>
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role}:</b> {m.text}
          </p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
      />
      <button onClick={send}>Send</button>
    </div>
  );
}