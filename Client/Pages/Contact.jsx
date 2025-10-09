import { useEffect, useState } from 'react'
import socket from '../Components/Socket.js';   

function Contact() {
    const [message, changeMessage] = useState("Retrieving message");
    const [webSocketMessage, changeWebSocketMessage] = useState("No WebSocket Message");

    useEffect(() => {
        fetch('/api/message') 
            .then(response => response.json())
            .then(data => changeMessage(data.message))
            .catch(error => {
                console.error('Error fetching data:', error);
                changeMessage('Error fetching data');
            }); 
        socket.emit("get_data", {request: "data"});
        socket.on("submit_response", (data) => changeWebSocketMessage(data.message));
        return () => {
            socket.off("submit_response");
        };
        
    }, [])
    function onClickHandler(event) {
        alert("button pressed");
        fetch('/api/button', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: "Button Pressed" }),
        });

    }
    return (
        <>
            <div>{message}</div>
            <button onClick={onClickHandler}>Theoretically pressing this will print something in the backend console</button>  
            <div>{webSocketMessage}</div>
        </>

    );
}

export default Contact;

