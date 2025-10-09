import { useState, useEffect } from 'react';
import '../Styles/text.css';
import socket from './Socket.js';
function newPost(props) {
	const [postText, setPostText] = useState('Make some text here dweeb!');
	function onChangeHandler(event) {
		setPostText(event.target.value);
	}
	function onClickHandler() {
		const newPost = {
			user: "Sedrik",
			text:  postText 
		}
		props.setPosts(prev => [newPost, ...prev]);
		socket.emit("new_post", newPost);
		setPostText('');
	}
	return(
		<div className='post-text'>
			Create Post
			<div className='post-div'>
				<input value={postText} onChange={onChangeHandler} />
				<button onClick={onClickHandler}>Post</button>
			</div>
        </div>

	);
}

export default newPost;