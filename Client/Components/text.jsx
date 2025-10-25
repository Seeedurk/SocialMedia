import { useState, useEffect, useRef } from 'react';
import NewPost from './newPost.jsx'
import '../Styles/text.css';
import socket from './Socket.js';

function text() {
    const exploded = useRef(false);
    const [Posts, setPosts] = useState([
    ]);



    useEffect(() => {

        const responseHandler = (posts) => {
            if (!exploded.current) {
                setPosts(prev => [...prev, ...JSON.parse(posts)]);
                exploded.current = true;
            }

        }

        const renderHandler = (data) => {
            setPosts(JSON.parse(data));
            console.log(Posts);
        }

        socket.emit("init_posts");

        socket.on("post_response", responseHandler);
        socket.on("Render_response", renderHandler);
        return () => {
            socket.off("post_response", responseHandler);
            socket.off("Render_response", renderHandler);
            
        };

    }, [])



    return (
        <div className='div-text'>

            <NewPost setPosts={setPosts} />

            {Posts.map(post => (
                <div className="text">
                    <h3>{post.user}</h3>
                    {post.text}
                </div>
                )
            )};

            <div className="text">
                <h3>Andre Quesada</h3>
                <p>Yo im looking for a partner, preferrably a girl but ill settle for a guy, hit me up if youre interested
                    Im currently a proffessional gooner and flood escaper.</p>



            </div>
            <div className="text">
                <h3>Gavin Mangubat</h3>
                Homsapien

            </div>
        
        </div>

    );
}

export default text;