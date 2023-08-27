import React from 'react';
import '../App.scss';
import './PuzzleBoard.scss';
import PuzzleTile from './PuzzleTile';
import PuzzleEmptyTile from './PuzzleEmptyTile';
import { useState, useRef } from 'react';
import {Button, Typography} from '@mui/material';
import AlertDialog from './Dialog';

function PuzzleOneBoard({level, handleLevel}) {


  const data1 = [[{cls:"tile", id:"tile0"},{cls:"tile", id:"tile1"},{cls:"tile", id:"tile2"},{cls:"tile", id:"tile3"},{cls:"tile", id:"tile4"},{cls:"tile", id:"tile5"}],
  [{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"}]];

  const [images, setImages] = useState(data1);
  const [isStarted, setIsStarted] = useState(false);

  const handleShuffle = () => {
    const changes = shuffle([...images[0]]);
    setImages(Object.values({"0":changes, "1": images["1"]}));
  }

  const handleClear = () => {
    setImages(data1);
  }

  const handleStartClick = () => {
    setIsStarted(true);
    handleShuffle();
    setMoveCount(0);
  }

  const handleRestartClick = () => {
    setIsStarted(false);
    setIsPlayerWin(false);
    handleClear();
    setIsOpen(false);
  }

  const [moveCount, setMoveCount] = useState(0);
  const [isPlayerWin, setIsPlayerWin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
      dragItem.current = position;
      console.log(dragItem.current, "position")

  }

  const dragEnter = (e, position) => {
      dragOverItem.current = position;
      //  console.log(dragOverItem.current, "dragover")
  }


  const shuffle = (arra1) => {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

//   const props = [
//     moveCount={moveCount},
//     setMoveCount={setMoveCount},
//     dragItem={dragItem},
//     dragOverItem={dragOverItem},
//     shuffle={shuffle},
//     dragStart={dragStart},
//     dragEnter={dragEnter},
//     isPlayerWin={isPlayerWin},
//     setIsPlayerWin={setIsPlayerWin},
//     setIsOpen={setIsOpen},
//     isOpen={isOpen},
//     handleClear={handleClear},
//     handleShuffle={handleShuffle},
//     isStarted={isStarted}, 
//     setIsStarted={setIsStarted},
//     data1={data1},
//     images={images},
//     setImages={setImages},
//     handleRestartClick={handleRestartClick}
// ];

  return (
    <>
      <div className='main-header'>
              <div className='heading part1'>
                <Typography id="title" className='headingTitle' variant="h4" gutterBottom>
                  Picture Puzzle 
                </Typography>
              </div>   
              <div className='heading part2'>
                {!isStarted ? <label>Level - 1</label>:<label>Moves: {moveCount}</label>}
                {console.log(isOpen , "outside")}
              </div>
        </div>
      
      <div className="main-body tile-image-l1">
          <div className="submain">
                <PuzzleTile handleClear={handleClear} handleShuffle={handleShuffle} moveCount={moveCount} setMoveCount={setMoveCount} isStarted={isStarted} setIsStarted={setIsStarted} 
                        data={data1} images={images} setImages={setImages} dragItem={dragItem} dragOverItem={dragOverItem} 
                        dragStart={dragStart} dragEnter={dragEnter} isPlayerWin={isPlayerWin} setIsPlayerWin={setIsPlayerWin}
                        handleRestartClick={handleRestartClick} isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
          <div className="submain">
                <PuzzleEmptyTile moveCount={moveCount} setMoveCount={setMoveCount} isStarted={isStarted} setIsStarted={setIsStarted} 
                          data={data1} images={images} setImages={setImages} dragItem={dragItem} dragOverItem={dragOverItem} 
                          dragStart={dragStart} dragEnter={dragEnter} isPlayerWin={isPlayerWin} setIsPlayerWin={setIsPlayerWin} 
                          handleRestartClick={handleRestartClick} isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
                {isOpen && <AlertDialog level={level} handleLevel={handleLevel} isOpen={isOpen} setIsOpen={setIsOpen} moveCount={moveCount} handleRestartClick={handleRestartClick}/>}
      </div>
      <div className='main-footer'>
          <div className='btn-div'>
               {!isStarted ?
                (<Button id="btn" className='btn-start' size='large' color="success" onClick={() => handleStartClick()}>Start</Button>) :
                (<Button id="btn" className='btn-start' size='large' color="error" onClick={() => handleRestartClick()}>Reset</Button>)}
                {!isStarted && <Button id="btn" className='btn-start' size='large' color="success" onClick={handleLevel}>Next</Button>}
          </div>
      </div>
    </>
  )
}

export default PuzzleOneBoard;