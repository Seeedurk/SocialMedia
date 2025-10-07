import { useEffect, useState } from 'react'

function Contact() {
    const [message, changeMessage] = useState("Retrieving message");
    useEffect(() => {
        fetch('/api/message') 
            .then(response => response.json())
            .then(data => changeMessage(data.message))
            .catch(error => {
                console.error('Error fetching data:', error);
                changeMessage('Error fetching data');
            }); 
    }, [])
    function onClickHandler(event) {
        alert("button pressed");
        fetch('api/button', {
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
        
        </>

    );
}

export default Contact;

