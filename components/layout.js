import Head from "next/head"
import style from "../styles/layout.module.css"
import Menu from "./menu"
import ShoppingCart from "./shoppingCart"

export default function Layout({ children, title }) {
    return <div className={style.ayout}>
        <Head>
            <title>Anime merch {title ? `|  ${title}` : ""}</title>
            <meta name='description' content="generated by create next app"></meta>
            <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
        </Head>

        <Menu />

        <div className={style.container}>{children}</div>
        <ShoppingCart />
    </div>
}