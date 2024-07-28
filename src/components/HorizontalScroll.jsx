import React, {useRef, useState, useEffect} from 'react';
import '../css/horizontal-scroll.css';

const HorizontalScroll = ({children}) =>
{
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() =>
    {
        const handleMouseMove = (e) =>
        {
            if (!isDragging) return;
            const x = e.pageX - containerRef.current.offsetLeft;
            const walk = (x - startX); // Adjust this multiplier for scroll speed
            containerRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () =>
        {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () =>
        {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    const handleMouseDown = (e) =>
    {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    return (
        <div
            className="horizontal-scroll"
            ref={containerRef}
            onMouseDown={handleMouseDown}
        >
            {children}
        </div>
    );
};

export default HorizontalScroll;

