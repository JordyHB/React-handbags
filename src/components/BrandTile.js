import React from 'react';

function BrandTile({ children, title, image, imageAlt }) {
    return (
        <section>
            {/*checks if an image is passed skipping otherwise*/}
            { image && <img src={ image } alt={ imageAlt }/> }
            <h2>{ title }</h2>
            { children }

        </section>
    );
}

export default BrandTile;