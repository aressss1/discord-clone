# Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL

This is a repository for Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL 

Features:

- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users
- Create Text, Audio and Video call Channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database using Planetscale
- Authentication with Clerk

### Preview

![prismify-render-1716880584388](https://github.com/aressss1/discord-clone/assets/127649710/4693d37d-c063-43b9-a6b1-ccefd02f6453)
![prismify-render-1716880568157](https://github.com/aressss1/discord-clone/assets/127649710/861664fe-d92c-4323-9527-b97289f127e1)
![prismify-render-1716880550775](https://github.com/aressss1/discord-clone/assets/127649710/5e6e8ab4-b55a-457c-92fc-4930372a91a8)
![prismify-render-1716880534904](https://github.com/aressss1/discord-clone/assets/127649710/e798ef5c-7e4d-44ce-a80e-417faf692546)
![prismify-render-1716880485234](https://github.com/aressss1/discord-clone/assets/127649710/fecd0282-e685-46ff-803a-788f1de75b85)
![prismify-render-1716880632044](https://github.com/aressss1/discord-clone/assets/127649710/17af9ccb-3e6f-4591-a23d-945112dd3290)
![prismify-render-1716880617105](https://github.com/aressss1/discord-clone/assets/127649710/7298d981-20a4-4b0e-834f-3fed74f92877)
![prismify-render-1716880601603](https://github.com/aressss1/discord-clone/assets/127649710/3df251a6-b807-4f76-bdae-1bd47053c308)



### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
https://github.com/aressss1/discord-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

https://nextjs.org/docs/deployment) for more details.
