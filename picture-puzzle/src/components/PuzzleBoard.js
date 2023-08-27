import React from 'react';
import {Button, Typography} from '@mui/material';
import { useState, useRef } from 'react';
import PuzzleOneBoard from './PuzzleOneBoard';
import PuzzleTwoBoard from './PuzzleTwoBoard';
import PuzzleThreeBoard from './PuzzleThreeBoard';
import PuzzleFourBoard from './PuzzleFourBoard';
import PuzzleFiveBoard from './PuzzleFiveBoard';



function PuzzleBoard() {

    const [level , setLevel] = useState(1);

    const handleLevel =() => {
      setLevel(level + 1);
    }
    
  
  // const props = {
  //   moveCount:{moveCount},
  //   setMoveCount:{setMoveCount},
  //   dragItem:{dragItem},
  //   dragOverItem:{dragOverItem},
  //   shuffle:{shuffle},
  //   dragStart:{dragStart},
  //   dragEnter:{dragEnter},
  //   isPlayerWin:{isPlayerWin},
  //   setIsPlayerWin:{setIsPlayerWin},
  //   setIsOpen:{setIsOpen},
  //   isOpen:{isOpen} 
  // };

  return (
      <div className='board-body'>
        {(() => {
        switch (level) {
          case 1:
            return <PuzzleOneBoard level={level} setLevel={setLevel} handleLevel={handleLevel}/> ;
          case 2:
            return <PuzzleTwoBoard level={level} setLevel={setLevel} handleLevel={handleLevel}/> ;
          case 3:
            return <PuzzleThreeBoard level={level} setLevel={setLevel} handleLevel={handleLevel}/> ;
          case 4:
            return <PuzzleFourBoard level={level} setLevel={setLevel} handleLevel={handleLevel}/> ;
          case 5:
            return <PuzzleFiveBoard level={level} setLevel={setLevel} handleLevel={handleLevel}/> ;
          default:
            return 1;
        }
      })()}
      </div>
  )
}

export default PuzzleBoard;