import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from "../components/layout";

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Person() {
    const { query } = useRouter()
    const { data, error } = useSWR(
        () =>`https://api.openweathermap.org/data/2.5/weather?q=Samara&appid=ac075ea5cfa4018b69bccf57516490d5`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <Layout>
            <h1>{
                (Math.round(data.main.temp - 273.15) > 0 ? '+' + Math.round(data.main.temp - 273.15) + '°' : '-' + Math.round(data.main.temp - 273.15) + '°')
            }</h1>
        </Layout>
    )
}
