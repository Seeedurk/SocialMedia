import { useEffect, useState } from 'react'
import Text from '../Components/text.jsx'
import Menu from '../Components/menu.jsx'
import Friends from '../Components/friends-list.jsx';
import '../Styles/App.css';

function Feed(props) {

	return (
        <>
            <div className="main-div" >
                <Menu user={props.user} />

                <Text />


                <Friends />
    

            </div>

     
		</>
		
	);
}

export default Feed;