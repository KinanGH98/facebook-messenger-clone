import '../css/facebook-messenger.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faUserGroup} from '@fortawesome/free-solid-svg-icons'
import {faSwatchbook} from '@fortawesome/free-solid-svg-icons'
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import ChatsWindow from "./ChatsWindow";
import PeopleWindow from "./PeopleWindow";
import StoriesWindow from "./StoriesWindow";
import React, {useState} from 'react';

export default function FacebookMessenger()
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChatsWindow></ChatsWindow>}/>
                <Route path="/people" element={<PeopleWindow></PeopleWindow>}/>
                <Route path="/stories" element={<StoriesWindow></StoriesWindow>}/>
            </Routes>
            <BottomNavBar></BottomNavBar>
        </Router>
    );
};


function BottomNavBar()
{
    const [currentNav, setCurrentNav] = useState(0);

    return (
        <nav className="bottomNavBar">
            <BottomNavBarButton route='/' icon={faComment} text='Chats'></BottomNavBarButton>
            <BottomNavBarButton route='/people' icon={faUserGroup} text='People'></BottomNavBarButton>
            <BottomNavBarButton route='/stories' icon={faSwatchbook} text='Stories'></BottomNavBarButton>
        </nav>
    );
}

function BottomNavBarButton({route, icon, text})
{
    return (
        <NavLink to={route}
                 className={({isActive}) => (isActive) ? 'bottomNavBarSelectedButton' : 'bottomNavBarButton'}>

            <FontAwesomeIcon icon={icon} size='lg'></FontAwesomeIcon>
            <h5>{text}</h5>
        </NavLink>
    );
}