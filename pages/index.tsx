import Head from "next/head"

import Main from '../components/main'
import CoolTitle from "../components/cool-title"
import CustomArticle from "../components/custom-article"

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

                <CustomArticle>
                    <h2>What are Latin Variants?</h2><br />
                    <p>Latin variants are joke languages that people can use for secret messages. Pig Latin, for example. You can find out more about the languages themselves by going to their designated page:</p><br /><br />
                    <p>

                    </p>

                    <ul>
                        <li><a href="./pages/egglatin">Egg Latin</a></li>
                        <li><a href="./pages/piglatin">Pig Latin</a></li>
                        <li><a href="./pages/bolatin">Bacon & Omelette Latin <abbr title="Translating issues (both forwards and back) do not recommend using for the time being">[BROKEN]</abbr></a></li>
                    </ul>
                </CustomArticle>
            </Main>
        </>
    )
}