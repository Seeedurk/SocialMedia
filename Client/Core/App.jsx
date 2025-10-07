import { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../Styles/App.css';
import Navigation from '../Components/navigation.jsx'



// I should really move the navigation routes into the main
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
        <div className="divin">
            <h1>Welcome to the Webite!</h1>
            <h2>This website is purely a demo!!</h2>
            <Feed />
        </div>
    );
}

function MyFunctionComponent() {
    let ILoveJSX = Math.floor(Math.random() * 3)
    return (
        <h1>{ILoveJSX}</h1>
    )
}


function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL;
        useEffect(() => {
            axios.get(`${API_URL}/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.error('Frontend error:', err));
    }, []); 
    
    return (
        <>
            <Navigation />
            
        </>
       

    );
}

export default App
