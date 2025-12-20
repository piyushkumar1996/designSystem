/*
    1. Let’s only render those 20 visible items, and pretend the others exist by
    managing scroll space intelligently.
    2. Viewport - container window
    3. Virtual window with total height of list - To show virtual scroll
    4. To make scrolling feel natural:
        -> Create an empty container that matches the total height of all 10,000 items,
        -> Position your visible items absolutely inside that space based on their index.
*/


import React, { useState } from 'react'
import style from './virtual.module.css'

const items = Array.from({ length: 30 }, ((_, index) => `${index}`));
const itemSize = 50;
const windowSize = 200;
const listHeight = itemSize * items.length

const VirtualizedList = (props) => {
    const [currentScroll, setCurrentScroll] = useState(0);

    const itemCount = Math.floor(windowSize / itemSize);

    const startIndex = Math.floor(currentScroll / itemSize);

    const endIndex = Math.min(startIndex + itemCount + 2, items.length);;

    const viewableList = items.slice(startIndex, endIndex);

    return (
      <>
        <h2>Virtualized List with static height</h2>
        <div
            onScroll={(e) => setCurrentScroll(e.target.scrollTop)}
            className={style.virtualContainer}
            style={{
                height: `${windowSize}px`,
            }}>
            <div 
                className={style.virtualInnerContainer}
                style={{
                    height: listHeight,
                }}
            >
                <div 
                    className={style.virtualContent}
                    style={{
                        top: itemSize * startIndex,
                    }}>
                    {viewableList.map((el, index) => (
                        <div 
                            key={el} 
                            className={style.virtualItem}
                            style={{
                                height: `${itemSize}px`,
                            }}>
                            {`Current item is ${el}`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default VirtualizedList