import { useState, useEffect, useRef } from 'react';
import NewPost from './newPost.jsx'
import '../Styles/text.css';
import socket from './Socket.js';

function text() {
    const exploded = useRef(false);
    const [Posts, setPosts] = useState([{
        user: "Sedrik",
        text: "Hello, I'm looking for a partner to join me on my adventures. I'm a skilled warrior and a loyal companion. If you're interested, please reach out to me! #Adventurer #PartnerWanted"
    }
    ]);



    useEffect(() => {
        
        socket.emit("init_posts");
        const Handler = (posts) => {
            if (!exploded.current) {
                setPosts(prev => [...prev, ...JSON.parse(posts)]);
                exploded.current = true;
            }

        }
        const Render = (data) => {
            setPosts(JSON.parse(data));
            console.log(Posts);
        }
        socket.on("post_response", Handler);
        socket.on("Render_response", Render);
        return () => {
            socket.off("post_response", Handler);
            socket.off("Render_response", Render);
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

                #Impoverished #Single #LookingForLove #Gooner #FloodEscaper #Proffessional


            </div>
            <div className="text">
                <h3>Gavin Mangubat</h3>


            </div>
        
        </div>

    );
}

export default text;