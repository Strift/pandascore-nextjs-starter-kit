import Head from 'next/head'

// Docs: https://github.com/unjs/ohmyfetch
import { $fetch } from 'ohmyfetch'

const API_TOKEN = process.env.PANDASCORE_API_TOKEN

export async function getServerSideProps(context) {
  const runningSeries = await $fetch(`https://api.pandascore.co/series/running?token=${API_TOKEN}`)

  return {
    props: {
      runningSeries
    }, 
  }
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>PandaScore Next.js Starter Kit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Running Esports Events</h1>
      <ul>
        {props.runningSeries.map(series => (
          <li key={series.id}>
            {series.league.name} {series.full_name}
          </li>
        ))}
      </ul>
      
    </div>
  )
}
