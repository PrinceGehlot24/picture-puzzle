import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({ isOpen, handleRestartClick, setIsOpen, moveCount ,level,setLevel, handleLevel}) {

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {level !== 5 ? <Dialog
        open={isOpen}
        onClose={handleRestartClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='dialog-main'>
          <DialogTitle className='content' id="alert-dialog-title">
            {"You Win !!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText className='content' id="alert-dialog-description">
              You end this puzzle with {moveCount} Moves .
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className="btn" onClick={handleRestartClick} >
              Try Again 
            </Button>
            <Button className="btn" onClick={handleLevel} autoFocus>
              Next Level
            </Button>
          </DialogActions>
        </div>
      </Dialog>:
      <Dialog
        open={isOpen}
        onClose={handleRestartClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='dialog-main'>
          <DialogTitle className='content' id="alert-dialog-title">
            {"You Cleared all levels . Congratulations !!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText className='content' id="alert-dialog-description">
              You end this puzzle with {moveCount} Moves . 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className="btn" onClick={handleRestartClick} >
              Try Again 
            </Button>
            <Button className="btn" onClick={()=>setLevel(1)} autoFocus>
              Home Page
            </Button>  
          </DialogActions>
        </div>
      </Dialog>
      } 
    </div>
  );
}

export default AlertDialog;