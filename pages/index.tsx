import Head from "next/head";
import Main from '../components/main'
import CoolTitle from "../components/cool-title";

export default function Index() {
    return (
        <>
            <Head>
                <title>Hello!</title>
            </Head>

            <Main>
                <CoolTitle>
                    Latin Variants
                </CoolTitle>
            </Main>
        </>
    )
}