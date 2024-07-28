import '../css/common-components.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from "react";
import {
    faBars,
    faComment,
    faStore,
    faCommentDots,
    faBoxArchive,
    faGear,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import jacutingaImage from '/src/images/jacutinga.webp';

export function CircularButton({onClick, icon, style})
{
    return (
        <button onClick={onClick} className='circularButton' style={style}>
            <FontAwesomeIcon icon={icon}/>
        </button>
    )
}

export function AppBar({title, secondaryButton})
{
    const [isSideBarToggled, setIsSideBarToggled] = useState(false);

    return (
        <>
            <div className='appBar'>
                <CircularButton icon={faBars} onClick={toggleSideBar}></CircularButton>
                <h1>{title}</h1>
                {secondaryButton}
            </div>
            <SideBar isOpened={isSideBarToggled} onSideBarToggleClick={toggleSideBar}></SideBar>
        </>
    );

    function toggleSideBar()
    {
        setIsSideBarToggled(!isSideBarToggled);
    }
}

export function SideBar({isOpened, onSideBarToggleClick})
{
    return (
        <motion.div className='sideBar'
                    initial={{width: 0, opacity: 0}}
                    animate={{width: isOpened ? '100%' : 0, opacity: isOpened ? 1 : 0}}
        >
            <div className='sideBarContent'>
                <SideBarHeader></SideBarHeader>
                <SideBarItem icon={faComment} text='Chats'></SideBarItem>
                <SideBarItem icon={faStore} text='Marketplace'></SideBarItem>
                <SideBarItem icon={faCommentDots} text='Message requests'></SideBarItem>
                <SideBarItem icon={faBoxArchive} text='Archive'></SideBarItem>
                <a style={{marginTop: 'auto', whiteSpace: 'nowrap'}} href="https://www.flaticon.com/free-icons/animals"
                   title="animals icons">Animals icons created by Freepik - Flaticon</a>
            </div>
            <div className="sideBarToggleDiv" onClick={onSideBarToggleClick}></div>
        </motion.div>
    )
}

function SideBarHeader()
{
    return (
        <div className='sideBarHeader'>
            <img src={jacutingaImage} alt="User profile image."/>
            <h3>Ahmed Kinan Ghabash</h3>
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
        </div>
    );
}

function SideBarItem({icon, text})
{
    return (
        <div className='sideBarItem'>
            <FontAwesomeIcon icon={icon} className='sideBarItemIcon'></FontAwesomeIcon>
            <h4 style={{margin: 0}}>{text}</h4>
        </div>
    );
}
