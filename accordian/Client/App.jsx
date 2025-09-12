import { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'  



// Page components
function Home() {
    const [data, setData] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;

        axios.get(`${API_URL}/api`)
            .then(res => setData(res.data.message))
            .catch(err => console.error('Connection error:', err));
    }, []);



    return (
        <>
            <div>
                <h1>React + Node.js</h1>
                <p>{data ? data : 'Loading...'}</p>
            </div>
            <h1>Welcome to the Store!</h1>
            <h2>This website is purely a demo! You will not be recieving these things!</h2>

        </>
    );
}

function Products({ products, cart, setCart }) {
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
}

function About() {
    return (
        <>
            <h1>About Us</h1>
            <h2>Im a really awful coder tryna make a website</h2>
        </>
    );
}

function Cart({ cart, products }) {
    return (
        <div className='main-div'>
            <main><h1>Checkout Page</h1></main>
            <ul className="checkout-ul">
                {cart.map(id => {
                    const product = products.find(p => p.id === id);
                    return product ? (
                        <li>
                            <div className="checkout-div" key={id}>
                                <img src={product.image} alt={product.title} width="50" />
                                <span>{product.title} - ${product.price}</span>
                            </div>
                            </li>
                    ) : (
                        <li>
                            <div key={id}>Product not found</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function Contact() {
    return <h1>Contact</h1>;
}

function ChatAssistant() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = { sender: 'user', text: input };
        setMessages(msgs => [...msgs, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await res.json();
            setMessages(msgs => [...msgs, { sender: 'assistant', text: data.reply }]);
        } catch (err) {
            setMessages(msgs => [...msgs, { sender: 'assistant', text: 'Error: Could not get response.' }]);
        }
        setLoading(false);
    };



    return (
        <div className="chat-assistant">
            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.sender}>
                        <b>{msg.sender === 'user' ? 'You' : 'Assistant'}:</b> {msg.text}
                    </div>
                ))}
                {loading && <div className="assistant">Assistant: ...</div>}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                />
                <button type="submit" disabled={loading}>Send</button>
            </form>
        </div>
    );
}

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL;
    /*
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []); 
    */
        useEffect(() => {
            axios.get(`${API_URL}/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.error('Frontend error:', err));
    }, []); 
    

    return (
        
        <Router>
            
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/assistant">Assistant</Link></li>
                    <li><Link to="/cart">Checkout</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products cart={cart} products={products} setCart={setCart} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/assistant" element={<ChatAssistant />} />
                <Route path="/cart" element={<Cart cart={cart} products={products} />} />
            </Routes>
        </Router>
    );
}

export default App
