import React from 'react';
import '../App.scss';
import './PuzzleBoard.scss';
import PuzzleTile from './PuzzleTile';
import PuzzleEmptyTile from './PuzzleEmptyTile';
import { useState, useRef } from 'react';
import {Button, Typography} from '@mui/material';
import AlertDialog from './Dialog';

function PuzzleTwoBoard({level, setLevel, handleLevel}) {
    const data2 = [[{cls:"tile", id:"tile0"},{cls:"tile", id:"tile1"},{cls:"tile", id:"tile2"},{cls:"tile", id:"tile3"},{cls:"tile", id:"tile4"},{cls:"tile", id:"tile5"},{cls:"tile", id:"tile6"},{cls:"tile", id:"tile7"}],
  [{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"}]];

  const [images, setImages] = useState(data2);
  const [isStarted, setIsStarted] = useState(false);
  
  const [moveCount, setMoveCount] = useState(0);
  const [isPlayerWin, setIsPlayerWin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
      dragItem.current = position;
  }

  const dragEnter = (e, position) => {
      dragOverItem.current = position;
  }

  const handleShuffle = () => {
    const changes = shuffle([...images[0]]);
    setImages(Object.values({"0":changes, "1": images["1"]}));
  }

  const handleClear = () => {
    setImages(data2);
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
  return (
    <>
      <div className='main-header'>
              <div className='heading part1'>
                <Typography id="title" className='headingTitle' variant="h4" gutterBottom>
                  Picture Puzzle 
                </Typography>
              </div>   
              <div className='heading part2'>
                {!isStarted ? <label>Level - 2</label>:<label>Moves: {moveCount}</label>}
                {console.log(isOpen , "outside")}
              </div>
        </div>
      
      <div className="main-body tile-image-l2">
          <div className="submain">
                <PuzzleTile moveCount={moveCount} setMoveCount={setMoveCount} isStarted={isStarted} setIsStarted={setIsStarted} 
                        data={data2} images={images} setImages={setImages} dragItem={dragItem} dragOverItem={dragOverItem} 
                        dragStart={dragStart} dragEnter={dragEnter} isPlayerWin={isPlayerWin} setIsPlayerWin={setIsPlayerWin}
                        handleRestartClick={handleRestartClick} isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
          <div className="submain">
                <PuzzleEmptyTile moveCount={moveCount} setMoveCount={setMoveCount} isStarted={isStarted} setIsStarted={setIsStarted} 
                          data={data2} images={images} setImages={setImages} dragItem={dragItem} dragOverItem={dragOverItem} 
                          dragStart={dragStart} dragEnter={dragEnter} isPlayerWin={isPlayerWin} setIsPlayerWin={setIsPlayerWin} 
                          handleRestartClick={handleRestartClick} isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
          {isOpen && <AlertDialog level={level} handleLevel={handleLevel} isOpen={isOpen} setIsOpen={setIsOpen} moveCount={moveCount} handleRestartClick={handleRestartClick} />}
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

export default PuzzleTwoBoard;