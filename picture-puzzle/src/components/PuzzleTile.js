import React from 'react';
import '../App.scss';

function PuzzleTile({setIsOpen,moveCount,handleRestartClick, setMoveCount, isStarted ,setIsStarted, data ,images, setImages,dragItem, dragOverItem, dragStart}) {
    const drop = (e) => {
     
      const copyListItems = [...images];
      const dragItemContent = copyListItems[0][dragItem.current];
      const initialListItems = [...data[1]];
      const initialListItem = [...data[0]];
      {copyListItems[1][dragOverItem.current]["cls"] == "blank" && copyListItems[0].splice(dragItem.current,1)};
      {dragOverItem.current == "0" && copyListItems[1][dragOverItem.current]["cls"] == "blank" && 
        copyListItems[1].splice(0,1,dragItemContent) && copyListItems[0].splice(dragItem.current,0,initialListItems[0]) && setMoveCount(moveCount+1) };
      {dragOverItem.current && copyListItems[1][dragOverItem.current]["cls"] == "blank" && 
          copyListItems[1].splice(dragOverItem.current,1,dragItemContent) && copyListItems[0].splice(dragItem.current,0,initialListItems[0]) && setMoveCount(moveCount+1)};
      dragItem.current = null;
      dragOverItem.current = null;
      setImages(copyListItems);
      {console.log("hhhhhhhi")}
      {(JSON.stringify(copyListItems[1]) === JSON.stringify(initialListItem)) && setIsOpen(true) }
    };

  return (
    <div className='tile-main ' >
           { isStarted? images[0] && images[0].map((image,index) =>(
            
            <div className={image.cls} id={image.id} key={index} 
            onDragStart={(e) => dragStart(e, index)
            }
            onDragOver={(e)=>e.preventDefault()}
            onDragEnd={drop}
            draggable={image.id != 'blank'}>
            </div>))
            : images[0] && images[0].map((image,index) => (
              <div className={image.cls} id={image.id} key={index}>
              </div>))}       
    </div>
    );
  }

export default PuzzleTile;