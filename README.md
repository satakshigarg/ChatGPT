# ChatGPT

ChatGPT clone with added features

## Features

- SSO using GitHub and Google
- Send chat with/without history
- Choose model from a variety of GPT-3/GPT-4 models
- Stores your chats in local storage 👀
- Same user interface as the original ChatGPT
- Custom chat titles
- Export/Import your chats 🔼🔽
- Currently returns a random string 200 characters for every input

## Requirements

- Node JS
- npm
- [Create Clerk project and add GitHub and Google as authentication methods](https://clerk.com/)

## Setup

1. Clone the repository

```
git clone https://github.com/satakshigarg/ChatGPT.git
```

2. Install client dependencies

```
cd ChatGPT
npm install
```

3. Create a .env file in root folder and add your CLERK_PUBLISHABLE_KEY

## Usage

1. Start the app

```
npm run dev
```

2. Start the app using run.sh

```
chmod +x run.sh
./run.sh

```