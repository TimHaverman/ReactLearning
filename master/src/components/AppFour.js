import React from 'react';
import Product from "./Products";
import productData from "./productsData";

function AppFour(props){
    const productComponents = productData.map(item => <Product key={item.id} product={item}/>);

    return(
        <div>
            {productComponents}
        </div>
    )
}
export default AppFour