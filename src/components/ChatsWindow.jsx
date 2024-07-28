import React, {useState} from 'react';
import {AppBar, CircularButton} from "./CommonComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../css/chats-window.css'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import catImage from '/src/images/cat.webp';
import jaguarImage from '/src/images/jaguar.webp';
import turtleImage from '/src/images/turtle.webp';
import pelicanImage from '/src/images/pelican.webp';
import blackbirdImage from '/src/images/blackbird.webp';
import pandaImage from '/src/images/panda.webp';
import HorizontalScroll from "./HorizontalScroll.jsx";

export default function ChatsWindow()
{
    const appBarSecondaryButton = <CircularButton icon={faPen}
                                                  style={{marginLeft: 'auto'}}></CircularButton>;
    return (
        <div className='chatsWindowContainer'>
            <AppBar title='Chats' secondaryButton={appBarSecondaryButton}></AppBar>
            <SearchBar></SearchBar>
            <ContactsPanel></ContactsPanel>
            <ChatsHomeSwitcher></ChatsHomeSwitcher>
        </div>
    );
};


function SearchBar()
{
    return (
        <div className='searchBar'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchBarIcon'/>
            <input type="text" name="searchBar" placeholder="Search..."></input>
        </div>
    );
}

function ContactsPanel()
{
    return (
        <div className="app">
            <HorizontalScroll>
                {chatsData.map((chat, index) => <Contact key={'contact' + index} name={chat.name}
                                                         profileImg={chat.profileImage}></Contact>)}
            </HorizontalScroll>
        </div>
    );
}

function Contact({name, profileImg})
{
    return (
        <div className='contact'>
            <img src={profileImg} alt={name + "' contact profile image."} draggable={false}/>
            <p>{name}</p>
        </div>
    )
}

function ChatsHomeSwitcher()
{
    const [homeTabIsSelected, setHomeTabIsSelected] = useState(true);

    return (
        <div className="chatsHomeSwitcher">
            <span>
                <button className='chatsHomeSwitcherButton' onClick={toggleActiveTab}
                        id='selectedHomeSwitcherButton'>Home</button>
                <button className='chatsHomeSwitcherButton' onClick={toggleActiveTab}>Channels</button>
            </span>
            {
                homeTabIsSelected ?
                    // Draw the chats panel when home tab button is selected.
                    <div className="chatsPanel">
                        {chatsData.map((chat, index) => <Chat key={'chat' + index} name={chat.name}
                                                              lastMsg={chat.lastMsg}
                                                              lastMsgDate={chat.lastMsgDate}
                                                              profileImg={chat.profileImage}></Chat>)}
                    </div>
                    // Or draw the channels panel when the channels tab button is selected.
                    :
                    <div><h1>Coming Soon...</h1></div>
            }
        </div>
    );

    function toggleActiveTab(e)
    {
        const switcherButtons = document.getElementsByClassName('chatsHomeSwitcherButton');

        if (e.target.innerText === 'Home')
        {
            // Set the home button as the selected one.
            switcherButtons[0].id = 'selectedHomeSwitcherButton';
            switcherButtons[1].id = '';
            setHomeTabIsSelected(true);
        }
        else
        {
            // Set the channels button as the selected one.
            switcherButtons[0].id = '';
            switcherButtons[1].id = 'selectedHomeSwitcherButton';
            setHomeTabIsSelected(false);
        }
    }
}

function Chat({name, lastMsg, lastMsgDate, profileImg})
{
    return (
        <span className="chat">
            <img src={profileImg} alt={name + "' profile image."} draggable={false}/>
            <div>
                <h3 style={{margin: 0, gridColumn: 'span 2', fontWeight: 'normal'}}>{name}</h3>
                <p>{lastMsg + '   ' + lastMsgDate}</p>
                <FontAwesomeIcon icon={faCheckDouble}
                                 style={{marginLeft: 'auto', marginRight: '15px'}}></FontAwesomeIcon>
            </div>
        </span>
    );
}

const chatsData = [
    {
        name: "Noor",
        lastMsg: "Hey how are you today?",
        lastMsgDate: 'Mar 5',
        profileImage: pelicanImage,
    },
    {
        name: "Bilal",
        lastMsg: "Yo Mr.White!",
        lastMsgDate: 'Jul 17',
        profileImage: jaguarImage,
    },
    {
        name: "Ghieth",
        lastMsg: "Do you have any plans for tonight?",
        lastMsgDate: 'Sep 7',
        profileImage: catImage,
    },
    {
        name: "Gehad",
        lastMsg: "We're not the same!",
        lastMsgDate: 'Oct 22',
        profileImage: blackbirdImage,
    },
    {
        name: "Saad",
        lastMsg: "He can't get away with it.",
        lastMsgDate: 'Jan 6',
        profileImage: turtleImage,
    },
    {
        name: "Zahir",
        lastMsg: "Go fix the car.",
        lastMsgDate: 'Dec 20',
        profileImage: pandaImage,
    },
]