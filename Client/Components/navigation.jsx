import react from 'react';
import Feed from '../Pages/Feed.jsx';
import Contact from '../Pages/Contact.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '../assets/logo.jpg';
import '../Styles/App.css';


function navigation() {
    return (
        <Router>
            <nav className="navbar">
                <div className="div-left">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <ul>
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to="/projects">Sedrik-Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/groups">Groups</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Router>

    );

}

export default navigation