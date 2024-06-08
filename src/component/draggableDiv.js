import React, { useRef, useState, useEffect } from 'react';

const DraggableDiv = ({ otherElementId }) => {
    const divRef = useRef(null);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const savedPosition = localStorage.getItem('dragPosition');
        if (savedPosition) {
            setDragPosition(JSON.parse(savedPosition));
        }
    }, []);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.style.left = `${dragPosition.x}px`;
            divRef.current.style.top = `${dragPosition.y}px`;
            console.log('Initial position set:', dragPosition);
        }
    }, [dragPosition]);

    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', '');
        event.target.style.cursor = 'grabbing';
        console.log('Drag started');
    };

    const handleDragEnd = (event) => {
        event.target.style.cursor = 'grab';
        console.log('Drag ended');
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        console.log('Dragging over');
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const x = event.clientX - divRef.current.offsetWidth / 2;
        const y = event.clientY - divRef.current.offsetHeight / 2;
        console.log('Dropped at:', { x, y });
        setDragPosition({ x, y });
        divRef.current.style.left = `${x}px`;
        divRef.current.style.top = `${y}px`;

        if (checkCollision()) {
            console.log('Collision detected on drop');
            moveDivToNearestEmptySpace();
        } else {
            localStorage.setItem('dragPosition', JSON.stringify({ x, y }));
        }
    };

    const findEmptySpaces = () => {
        const emptySpaces = [];
        const elements = document.body.getElementsByTagName('*');
        const pageWidth = window.innerWidth;
        const pageHeight = window.innerHeight;

        for (let x = 0; x < pageWidth; x += 10) {
            for (let y = 0; y < pageHeight; y += 10) {
                let isOccupied = false;
                for (const element of elements) {
                    const rect = element.getBoundingClientRect();
                    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                        isOccupied = true;
                        break;
                    }
                }
                if (!isOccupied) {
                    emptySpaces.push({ x, y });
                }
            }
        }
        console.log('Empty spaces found:', emptySpaces);
        return emptySpaces;
    };

    const checkCollision = () => {
        const draggableRect = divRef.current.getBoundingClientRect();
        const otherElement = document.getElementById(otherElementId);
        const otherElementRect = otherElement?.getBoundingClientRect();

        if (
            otherElementRect &&
            draggableRect.right > otherElementRect.left &&
            draggableRect.left < otherElementRect.right &&
            draggableRect.bottom > otherElementRect.top &&
            draggableRect.top < otherElementRect.bottom
        ) {
            return true;
        }
        return false;
    };

    const moveDivToNearestEmptySpace = () => {
        const draggableRect = divRef.current.getBoundingClientRect();
        const emptySpaces = findEmptySpaces();

        const distances = emptySpaces.map((emptySpace) => {
            const distanceX = Math.abs(draggableRect.left - emptySpace.x);
            const distanceY = Math.abs(draggableRect.top - emptySpace.y);
            return Math.sqrt(distanceX ** 2 + distanceY ** 2);
        });

        const nearestIndex = distances.indexOf(Math.min(...distances));
        console.log('Nearest empty space index:', nearestIndex);

        if (nearestIndex !== -1) {
            const nearestEmptySpace = emptySpaces[nearestIndex];
            setDragPosition({ x: nearestEmptySpace.x, y: nearestEmptySpace.y });
            divRef.current.style.left = `${nearestEmptySpace.x}px`;
            divRef.current.style.top = `${nearestEmptySpace.y}px`;

            localStorage.setItem('dragPosition', JSON.stringify({ x: nearestEmptySpace.x, y: nearestEmptySpace.y }));
        }
    };

    return (
        <div
            ref={divRef}
            className="draggable-div"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            Drag me!
        </div>
    );
};

export default DraggableDiv;
