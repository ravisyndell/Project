import { useRouter} from 'next/router'

function ProductDetalis(){

    const router =  useRouter()
    const productid = router.query.productid
    return <h1>Detalis Abouts Product {productid}</h1>

}

export default ProductDetalis