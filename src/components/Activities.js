import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './style/about.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function Activities() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ul className='link' onClick={handleClickOpen}>
        Activities
      </ul>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Sites
        </DialogTitle>
        <DialogContent>
          <ul><a href="https://www.jupiterlighthouse.org/" target="_blank" rel="noopener noreferrer">Jupiter Inlet</a></ul>
          <ul><a href="https://marinelife.org/" target="_blank" rel="noopener noreferrer">Loggerhead Marinelife Sea Turtle Hospital</a></ul>
          <ul><a href="http://www.evsjupiter.com/" target="_blank" rel="noopener noreferrer">Jupiter Beach</a></ul>
          <ul><a href="https://www.thepalmbeaches.com/north-region/dubois-park" target="_blank" rel="noopener noreferrer">Dubois Park</a></ul>
          <ul><a href="https://www.thepalmbeaches.com/north-region/carlin-park" target="_blank" rel="noopener noreferrer">Carlin Park</a></ul>
            <ul><a href="https://www.buschwildlife.org/" target="_blank" rel="noopener noreferrer">Wildlife Sanctuary</a></ul>
          <ul><a href="https://harboursideplace.com/" target="_blank" rel="noopener noreferrer">Riverside Mall</a></ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}