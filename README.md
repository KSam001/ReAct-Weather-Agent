# Agentic AI - ReAct Weather & Location Agent

An autonomous AI agent built with JavaScript and the OpenAI API that uses the ReAct (Reasoning + Acting) framework to answer location and weather-dependent questions.

## Features

- **ReAct Loop:** Cycles through Thought, Action, PAUSE, and Observation.
- **Tool Calling:** Dynamically parses LLM actions to call custom tools (`getLocation`, `getCurrentWeather`).
- **Regex Parsing:** Extracts function names and arguments directly from structured prompt responses.

## Setup & Installation

1. **Clone the repository:**
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd "Agentic AI"

2. **Install dependencies:**
   npm install

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your OpenAI API Key:
   OPENAI_API_KEY=your_openai_api_key_here

4. **Run the agent:**
   node index.js