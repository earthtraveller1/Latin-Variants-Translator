import '../styles/global.css'
import { AppProps } from "next/app";
import Head from 'next/head'

export default function LVTApp({ Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}