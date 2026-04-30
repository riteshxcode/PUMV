// import Button from 'react-bootstrap/Button';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function Cards() {

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(() => {
    //     // Define the async function
    //     const fetchData = async () => {
    //         try {

    //             const response = await axios.get('https://dummyjson.com/products');
    //             setData(response.data.products);
    //             console.log(response.data.products)
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }

    //     };

        // Call the async function
        // fetchData();
    // }, []); 
    // Empty dependency array means this effect runs once on mount


    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <>

<h1>cards</h1>



            {/* <div>
                <h1 style={{ textAlign: "center" }}>Our Team's</h1>

                <ul>
                    {data.map((product) => (
                        <li key={product.id}>
                            <img src={product.thumbnail} style={{ width: '200px', height: '200px' }} />
                            <p>Price: ${product.price}</p>
                            <p>{product.title}</p>
                            <p>{product.brand}</p>

                            <br />
                        </li>
                    ))}
                </ul>
            </div> */}

        </>
    );
}

export default Cards;
