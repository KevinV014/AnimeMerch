import Layout from "|@/components/layout";
import Product from "|@/components/product";
import { getLastestItems } from "|@/services/itemService";
import styleProduct from "../styles/product.module.css"
import style from "../styles/home.module.css"


export default function store({ items }) {
  return (
    <Layout>
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop the Anime T-Shirt 2023 Collection</h2>
            <p>
              Level up your comfort this season with our new Anime Collection
              — all new joggers, beanies, drinkware, and for the first time
              ever, Octocookie cutters!
            </p>
          </div>
        </div>
      </div>

      <h3 className="pt-12 mb-8 text-2xl font-semibold">Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getLastestItems();

  return {
    props: {
      items: res
    }
  }
}