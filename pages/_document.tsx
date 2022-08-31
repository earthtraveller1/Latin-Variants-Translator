import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta content="https://anthonyhuang07.github.io/Latin-Variants-Translator/" property="og:url" />
                <meta content="https://i.imgur.com/mU0RScm.png" property="og:image" />
                <link href="https://fonts.googleapis.com/css2?family=Aldrich&family=Fira+Code&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="https://i.imgur.com/mU0RScm.png" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}