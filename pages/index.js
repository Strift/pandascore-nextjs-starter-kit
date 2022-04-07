import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
