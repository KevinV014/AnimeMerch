import Link from "next/link"
import Image from "next/image"

import style from "../styles/product.module.css"
import { convertToPath } from "|@/lib/utils";
import CartButton from "./cartButton";
import { useAppContext } from "./stateWrapper";

export default function Product({ item, qty = 0, showAs }) {
    if (showAs === "Page") {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image
                        src={item.image}
                        alt="Picture of the author"
                        width={800}
                        height={800}
                    />
                </div>
                <div className={style.info}>
                    <div>
                        <h2>{item.title}</h2>
                    </div>
                    <div className={style.price}>${item.price}</div>
                    <div>{item.description}</div>
                    <div>
                        <CartButton item={item} />
                    </div>
                </div>
            </div>
        );
    }

    if (showAs === "ListItem") {

        const cart = useAppContext()

        function handleClick() {
            cart.deleteItemToCart(item)
        }

        return (
            <div className={style.listItem}>
                <div>
                    <Image
                        src={item.image}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <div>${item.price}</div>
                    {qty === 0 ? "" : <div>{qty} units</div>}

                    {qty === 0 ? "" : <div>Subtotal: $ {qty * item.price} </div>}

                </div>
            </div>
        );
    }

    return (
        <div className={style.item}>
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <Image
                        src={item.image}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </Link>
            </div>
            <div>
                <h3>
                    <Link href={`/store/${convertToPath(item.title)}`}>
                    </Link>
                </h3>
            </div>
            <h5>{item.title}</h5>
            <div>${item.price}</div>
            <div>
                <CartButton item={item} />
            </div>
        </div>
    );
}