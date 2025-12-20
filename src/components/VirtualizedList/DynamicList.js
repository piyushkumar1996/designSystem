import React, { useState } from 'react';
import { itemHeights, listItem, windowSize } from './constant';
import style from './dynamic.module.css';

const binaryCummulativeSearch = (itemOffsets, target) => {
    let start = 0;
    let end = itemOffsets.length - 1;
    let resultIndex = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (itemOffsets[mid] === target) {
            resultIndex = mid;
            break;
        } else if (itemOffsets[mid] < target) {
            resultIndex = mid; // this index is still valid; move right
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return resultIndex;
}

const createItemOffset = (itemHeights) => {
    let currentSum = 0;
    const itemOffset = itemHeights.map((_, index) => {
        if (index > 0) {
            currentSum = currentSum + itemHeights[index - 1]
        }
        return currentSum;
    });
    return itemOffset
}

const getEndIndex = (itemHeights, windowSize, startIndex) => {
    let currentSum = 0;
    let j = startIndex;
    while (j < itemHeights.length && currentSum <= windowSize) {
        currentSum += itemHeights[j];
        j++;
    }
    return j;
};

const itemOffsets = createItemOffset(itemHeights);

const totalHeight = itemHeights.reduce((acc, curr) => acc + curr, 0)

const DynamicList = (props) => {
    const [scrollTop, setScrollTop] = useState(0)

    const startIndex = binaryCummulativeSearch(itemOffsets, scrollTop);

    const endIndex = getEndIndex(itemHeights, windowSize, startIndex) + 2;
    const end = Math.min(endIndex, itemHeights.length);

    const visibleItem = listItem.slice(startIndex, end)

    return (
        <div>
            <h2 className={style.dynamicTitle}>Dynamic List</h2>
            <div
                onScroll={(e) => setScrollTop(e.target.scrollTop)}
                className={style.dynamicContainer}
                style={{
                    height: `${windowSize}px`,
                }}>
                <div
                    className={style.dynamicInnerContainer}
                    style={{
                        height: `${totalHeight}px`,
                    }}>
                    <div 
                        className={style.dynamicContent}
                        style={{ 
                            top: itemOffsets[startIndex]
                        }}>
                        {visibleItem.map((item, index) => (
                            <div
                                className={style.dynamicItem}
                                style={{
                                    height: `${item.height}px`,
                                }}
                                key={item.id}
                            >
                                {item.id}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicList