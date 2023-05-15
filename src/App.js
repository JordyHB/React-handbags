import React from 'react';
import './App.css';
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import story from './assets/our_story.png'
import NavButton from './components/Navbutton';
import ProductTile from './components/ProductTile';
import BrandTile  from  './components/BrandTile'


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                < NavButton
                    buttonText="to the collection"
                    disabled={false}
                />
                < NavButton
                    buttonText="shop all bags"
                    disabled={false}
                />
                < NavButton
                    buttonText="pre-orders"
                    disabled={true}
                />
            </nav>
            <main>
                <ProductTile
                    bannerText="Best Seller"
                    productImage= { bag1 }
                    productName="The handy bag"
                    productPrice="400,-"
                />
                <ProductTile
                    bannerText="Best Seller"
                    productImage={ bag2 }
                    productName="The stylish bag"
                    productPrice="250,-"
                />
                <ProductTile
                    bannerText="New Collection"
                    productImage={ bag3 }
                    productName="The simple bag"
                    productPrice="300,-"
                />
                <ProductTile
                    bannerText="New Collection"
                    productImage={ bag4 }
                    productName="The trendy bag"
                    productPrice="150,-"
                />
            </main>
            <footer>
                <BrandTile
                    title="The brand"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ullam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quaerat.</p>
                </BrandTile>
                <BrandTile
                    image={ brand }
                    imageAlt="Brand Logo"
                />
                <BrandTile
                    image={ story }
                    imageAlt="Happy Customers"
                />
                <BrandTile
                    title="Our story"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae culpa, deleniti eveniet excepturi explicabo modi nostrum, perferendis perspiciatis reiciendis repellat soluta suscipit tempora velit.</p>
                </BrandTile>
            </footer>
        </>
    );
}

export default App;



