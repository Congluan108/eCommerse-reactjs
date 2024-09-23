import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';
import SaleHomepage from '@components/SaleHomePage/SaleHomePAge;';

function HomePage() {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProduct(res.contents);
        });
    }, []);
    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProduct.slice(0, 2)} />
            <PopularProduct data={listProduct.slice(2, listProduct.length)} />
            <SaleHomepage />
            <div
                style={{
                    height: '200px'
                }}
            ></div>
        </>
    );
}

export default HomePage;
