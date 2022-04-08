This example project uses:
- [Next.js](https://nextjs.org/) for the full-stack app
- [PandaScore](https://pandascore.co/) as esports data API
- [ohmyfetch](https://github.com/unjs/ohmyfetch) to make HTTP requests

## Getting Started

First, copy `.env.local.example` as `.env.local`. 

Then, set `PANDASCORE_API_TOKEN` to your PandaScore API token value. Your token can be found in your [account](https://app.pandascore.co/dashboard/)

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

When configuring your app on Vercel, don't forget to set the `PANDASCORE_API_TOKEN` environment variable.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.