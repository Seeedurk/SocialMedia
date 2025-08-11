import { useState, useEffect } from 'react'
import './App.css'


function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                });

        }
        FetchData();
        
        console.log(products)
    }, [products]);

  return (
    <>
          <div className='header-div'>Store place</div>
          
          <div className='main-div'>
              {
                  products.map(product => (
                      <div className="product-div" key={product.id}>
                          <img src={product.image} alt={product.title} width="100" />
                          <button>
                              ${product.price}
                          </button>
                          <h2>{product.title}</h2>
                      </div>
                  ))
                  }
          </div>

    </>
  )
}

export default App
