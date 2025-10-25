import react from 'react';
import Feed from '../Pages/Feed.jsx';
import Contact from '../Pages/Contact.jsx';
import SignIn from '../Pages/Sign-in.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '../assets/logo.jpg';
import '../Styles/App.css';


function navigation(props) {
    return (
        <Router>
            <nav className="navbar">
                <div className="div-left">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <ul>
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to="/projects">Sedrik-Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
                <Routes>
                <Route path="/" element={<Feed user={props.user} />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<SignIn setUser={props.setUser} />} />
                </Routes>
            </Router>

    );

}

export default navigation