import { useEffect, useState } from 'react'
import Text from '../Components/text.jsx'
import Menu from '../Components/menu.jsx'
import Friends from '../Components/friends-list.jsx';

import '../Styles/App.css';

function Feed() {
    /*
    const OnClickHandler = (event) => {
        alert(`The following has been added to checkout:` + products.find(p => p.id === Number(event.target.value)).title);
        setCart(prev => [...prev, Number(event.target.value)]);

    }

    return (
        <div className='main-div'>
            {products.map(product => (
                <div className="product-div" key={product.id}>
                    <img src={product.image} alt={product.title} width="100" />
                    ${product.price}
                    <button value={product.id} onClick={OnClickHandler}>
                        Buy
                    </button>
                    <h2>{product.title}</h2>
                </div>
            ))}
        </div>
    );
    */

	return (
        <>
            <div className="main-div" >
                <Menu />

                <Text />


                <Friends />
    

            </div>

     
		</>
		
	);
}

export default Feed;