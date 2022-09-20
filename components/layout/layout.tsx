import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui/Navbar';

interface Props {
    children?: React.ReactNode | undefined,
    title?: string | undefined
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;


export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Nicolas Calero" />
                <meta name="description" content="Informacion sobre el pokemon" />
                <meta name="keyword" content="name,pokemon,pokedex" />

                <meta property="og:title" content={`Infomracion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>
        </>
    )
}
