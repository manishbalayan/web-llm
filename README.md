# Web LLM Chat App (Client-Side)
A minimal **client-side AI chat application** built using **React** and **@mlc-ai/web-llm**.  
This project runs a **local LLM directly in the browser** — no backend, no API keys, no server.
The model is downloaded and executed entirely on the client using WebGPU.
---

## Features
- Fully **client-side LLM**
- No backend or API key required
- Runs locally in the browser
- Simple chat interface
- Uses `@mlc-ai/web-llm` with MLC compiled models
---

##  Model Used
- **Llama-3.2-1B-Instruct (quantized)**
- Loaded using:
  ```js
  CreateMLCEngine("Llama-3.2-1B-Instruct-q4f32_1-MLC")
  ```
