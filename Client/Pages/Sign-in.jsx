import { useEffect, useState } from 'react'
import '../Styles/App.css';
import '../Styles/SignIn.css';

function SignIn(props) {
	const [username, setusername] = useState('..');
	function onChangeHandler(event) {
		setusername(event.target.value);
	}
	function onClickHandler() {
		props.setUser(username);
		alert('Signed in as ' + username);
		setusername('');
	}

	return (
        <>
            <div className='Page-div'>
                Assign yourself a name to sign in!
                <div className='Sign-in'>
                    Username:
					<input value={username} onChange={onChangeHandler} />
					<button onClick={onClickHandler}>Post</button>
                   New User? Type a name and it will be created for you!
                </div>
            </div>

     
		</>
		
	);
}

export default SignIn;