import react from 'react';
import Feed from './Feed.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '../assets/logo.jpg';
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
                </Routes>
            </Router>

    );

}

export default navigation