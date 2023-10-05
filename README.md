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
![Screenshot (237)](https://github.com/aressss1/discord-clone/assets/127649710/bc2f4110-cd65-4535-8ac4-4adad2cdf267)
![Screenshot (238)](https://github.com/aressss1/discord-clone/assets/127649710/15d3507e-9291-4be9-8f2b-210d90ff5e2e)
![Screenshot (239)](https://github.com/aressss1/discord-clone/assets/127649710/e8a04269-7183-42ff-8f55-6d1f6acd5f64)
![Screenshot (240)](https://github.com/aressss1/discord-clone/assets/127649710/b0293da3-3880-40e4-9b1e-d26a6caddabc)
![Screenshot (241)](https://github.com/aressss1/discord-clone/assets/127649710/1fa89573-daf0-4be1-b793-47562de670f6)
![Screenshot (242)](https://github.com/aressss1/discord-clone/assets/127649710/5aed64b7-3122-4ecc-9226-cbaec3637bb8)
![Screenshot (243)](https://github.com/aressss1/discord-clone/assets/127649710/a71c27da-9e7b-42ab-98d2-25f17f49e503)
![Screenshot (244)](https://github.com/aressss1/discord-clone/assets/127649710/3a8f3dec-086e-41c7-9184-817996716e52)
![Screenshot (245)](https://github.com/aressss1/discord-clone/assets/127649710/d2c960b6-0a37-4a0c-a365-0a41bf9218ce)
![Screenshot (246)](https://github.com/aressss1/discord-clone/assets/127649710/1689a384-8fdc-4016-a171-43595be2d333)
![Screenshot (247)](https://github.com/aressss1/discord-clone/assets/127649710/1b813c0f-add3-489c-a4c4-62f7d156ec69)
![Screenshot (248)](https://github.com/aressss1/discord-clone/assets/127649710/3f5f4d84-7c1e-49dd-ab72-dd5aa8301f7c)


### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-discord-clone.git
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
