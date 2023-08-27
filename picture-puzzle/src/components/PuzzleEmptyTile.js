import React from 'react';
import '../App.scss';
import './PuzzleBoard.scss';

function PuzzleEmptyTile({ setIsOpen, moveCount,handleRestartClick,isPlayerWin, setIsPlayerWin,isStarted, setIsStarted, setMoveCount, images,data, setImages,dragItem, dragOverItem, dragStart,dragEnter}) {
  const drop = (e) => {
    const copyItems = [...images[1]];
    const initialListItem = [...data[0]];
    const dragItemContent = copyItems[dragItem.current];
    const dragOverItemContent = copyItems[dragOverItem.current]
    copyItems.splice(dragItem.current,1,dragOverItemContent);
    copyItems.splice(dragOverItem.current,1,dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setImages(Object.values({"0": images[0], "1": copyItems}));
    setMoveCount(moveCount+1);
    {(JSON.stringify(copyItems) === JSON.stringify(initialListItem) && setIsOpen(true))}
  };
  return (
    <div className='tile-main'>
      {isStarted && images[1] && images[1].map((image,index) => (
            <div className={image.cls} id={image.id} key={index} 
            onDragEnter={(e) => dragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnd={drop}
            draggable={image.id != 'blank'}>
            </div>
           ))
           }
    </div>
  );
}

export default PuzzleEmptyTile;