import React from 'react';

function ProductTile( {bannerText, productImage, productName, productPrice }) {
    return (
        <article>
            <span>{ bannerText }</span>
            <img src={ productImage } alt="product photo"/>
            <p> { productName }</p>
            <h4>{`€${productPrice}`}</h4>
        </article>
    );
}

export default ProductTile;