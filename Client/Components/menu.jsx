import React from 'react';
import '../Styles/Menu.css';  

function Menu(props) {
    return (
        <div className="menu">
            <div>
                <h2>{props.user}</h2>
            </div>
            <div>
                <button>
                    Work in progress!
                </button>
                <button>
                    Notifications

                </button>

                <button>
                    Messages

                </button>

            </div>
        </div>
    );
}

export default Menu;