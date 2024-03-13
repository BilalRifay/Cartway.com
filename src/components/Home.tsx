import React, { useEffect, useState } from 'react';
import '../stylesheet/home.css';

interface Product {
    product_name: string | null;
    price: number | null;
    description: string | null;
    rating: number | null;
    brand: string | null;
}

export const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://api-e-commerce-9xdg.onrender.com/v1/products')
            .then(result => result.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error("Invalid product data format");
                }
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, []);

    if (products.length === 0) {
        return <div style={{ textAlign: 'center' }}>Loading...</div>;
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Search...' />
                    <button type='submit'>Search</button>
                </div>
                <div className="navbar-left">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Account</a><img src="./images/account_icon.png" alt="account_icon" className='account_icon' /></li>
                    </ul>
                </div>
            </nav>
            <div className="gallery">
                {products.map((product, index) => (
                    <div key={index} className="content">
                        <img src="./images/logo.png" alt="image" />
                        <h3>{product.product_name}</h3>
                        <p>{product.brand}</p>
                        <p>{product.description}</p>
                        <h6>${product.price}</h6>
                        <h6>🏆Rating :{product.rating}</h6>
                        <button className='buynow'>Buy Now</button>
                    </div>
                ))}
            </div>
        </>
    );
};
