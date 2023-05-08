import Layout from '|@/components/layout'
import { getItems } from '|@/services/itemService'
import Product from '|@/components/product'
import styleItems from "../../styles/product.module.css"
export default function Home({ items }) {
    return (
        <Layout title="Bienvenido">
            <h1 className='text-3xl font-bold mb-4 pt-9'>Store</h1>
            <div className={styleItems.items}>
                {
                    items &&
                    items.map((item) => (
                        <Product key={item.id} item={item} showAs="Default" />
                    ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await getItems()

    return {
        props: {
            items: res,
        }
    }
}


