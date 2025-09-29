import { useEffect, useState } from 'react';
import './App.css';  

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
            <div className="text">
                <h1>Basic Chat Feed</h1>
                There would be some text here!
            </div>
            <div className="text">
                <h3>Andre Quesada</h3>
                <p>Yo im looking for a partner, preferrably a girl but ill settle for a guy, hit me up if youre interested
                    Im currently a proffessional gooner and flood escaper.</p>

                #Impoverished #Single #LookingForLove #Gooner #FloodEscaper #Proffessional  


            </div>
            <div className="text">
                <h3>Gavin Mangubat</h3>
                <p>Proffessional gooner, last girlfrield a milennoa ago,tu gooning menace</p>

                #Impoverished #Single #LookingForLove #Gooner #FloodEscaper #Proffessional


            </div>
		</>
		
	);
}

export default Feed;