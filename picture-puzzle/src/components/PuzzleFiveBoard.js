import React from 'react';
import '../App.scss';
import PuzzleTile from './PuzzleTile';
import PuzzleEmptyTile from './PuzzleEmptyTile';
import { useState, useRef } from 'react';
import {Button, Typography} from '@mui/material';
import AlertDialog from './Dialog';
import './PuzzleBoard.scss';

function PuzzleFiveBoard({level,setLevel,handleLevel}) {
    const data5 = [[{cls:"tile", id:"tile0"},{cls:"tile", id:"tile1"},{cls:"tile", id:"tile2"},{cls:"tile", id:"tile3"},{cls:"tile", id:"tile4"},
                    {cls:"tile", id:"tile5"},{cls:"tile", id:"tile6"},{cls:"tile", id:"tile7"},{cls:"tile", id:"tile8"},{cls:"tile", id:"tile9"},
                    {cls:"tile", id:"tile10"},{cls:"tile", id:"tile11"},{cls:"tile", id:"tile12"},{cls:"tile", id:"tile13"},{cls:"tile", id:"tile14"},
                    {cls:"tile", id:"tile15"},{cls:"tile", id:"tile16"},{cls:"tile", id:"tile17"},{cls:"tile", id:"tile18"},{cls:"tile", id:"tile19"},
                    {cls:"tile", id:"tile20"},{cls:"tile", id:"tile21"},{cls:"tile", id:"tile22"},{cls:"tile", id:"tile23"},{cls:"tile", id:"tile24"}],
                   [{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},
                    {cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},
                    {cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},
                    {cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},
                    {cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"},{cls:"blank", id:"blank"}]];

  const [images, setImages] = useState(data5);
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
    setImages(data5);
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
                {!isStarted ? <label>Level - 5</label>:<label>Moves: {moveCount}</label>}
              </div>
        </div>
      
      <div className="main-body tile-image-l5">
          <div className="submain">
                <PuzzleTile moveCount={moveCount} setMoveCount={setMoveCount} isStarted={isStarted} setIsStarted={setIsStarted} 
                        data={data5} images={images} setImages={setImages} dragItem={dragItem} dragOverItem={dragOverItem} 
                        dragStart={dragStart} dragEnter={dragEnter} isPlayerWin={isPlayerWin} setIsPlayerWin={setIsPlayerWin}
                        handleRestartClick={handleRestartClick} isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
          <div className="submain">
                <PuzzleEmptyTile moveCount={moveCount} setMoveCount={setMoveCount} isStarted={isStarted} setIsStarted={setIsStarted} 
                          data={data5} images={images} setImages={setImages} dragItem={dragItem} dragOverItem={dragOverItem} 
                          dragStart={dragStart} dragEnter={dragEnter} isPlayerWin={isPlayerWin} setIsPlayerWin={setIsPlayerWin} 
                          handleRestartClick={handleRestartClick} isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
          {isOpen && <AlertDialog level={level} setLevel={setLevel} handleRestartClick={handleRestartClick} handleLevel={handleLevel} isOpen={isOpen} setIsOpen={setIsOpen} moveCount={moveCount} />}
      </div>
      <div className='main-footer'>
          <div className='btn-div'>
               {!isStarted ?
                (<Button id="btn" className='btn-start' size='large' color="success" onClick={() => handleStartClick()}>Start</Button>) :
                (<Button id="btn" className='btn-start' size='large' color="error" onClick={() => handleRestartClick()}>Reset</Button>)}
                {!isStarted && <Button id="btn" className='btn-start' size='large' color="success" onClick={()=>setLevel(1)}>Home</Button>}
          </div>
      </div>
    </>
  )
}

export default PuzzleFiveBoard;