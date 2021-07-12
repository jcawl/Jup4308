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

export default function Restaurants() {
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
      Food
      </ul>
      <Dialog onClose={handleClose}  open={open}>
        <DialogTitle onClose={handleClose}>
        Local Eats
        </DialogTitle>
        <DialogContent>
          <div>Zeke's Golf Cart Taxi Rideable (561-846-0411)</div>
          <br></br>
          <br></br>
          <div>Walkable Restaurants</div>
          <ul><a href="https://www.thebeaconjupiter.com/" target="_blank" rel="noopener noreferrer">Beacon</a></ul>
          <ul><a href="https://www.luckyshuckjupiter.com/" target="_blank" rel="noopener noreferrer">Lucky Shuck Oyster Bar & Taphouse</a></ul>
          <ul><a href="https://www.jettysjupiter.com/" target="_blank" rel="noopener noreferrer">Jetty's Waterfront Restaurant</a></ul>
          <ul><a href="https://www.utikibeach.com/" target="_blank" rel="noopener noreferrer">U-Tiki Beach Restaurant</a></ul>
          <ul><a href="https://www.guanabanas.com/" target="_blank" rel="noopener noreferrer">Guanabanas</a></ul>
          <ul><a href="https://schoonersjupiter.com/" target="_blank" rel="noopener noreferrer">Schooners</a></ul>
          <ul><a href="https://squaregrouper.net/menu/" target="_blank" rel="noopener noreferrer">Square Grouper</a></ul>
          <div>Drive</div>
          <ul><a href="https://thewoods.tigerwoods.com/" target="_blank" rel="noopener noreferrer">The Woods Jupiter</a></ul>
          <ul><a href="https://divebarrestaurant.com/" target="_blank" rel="noopener noreferrer">Dive Bar Restaurant</a></ul>
          <div>Breakfast</div>
          <ul><a href="https://lazyloggerheadcafe.com/" target="_blank" rel="noopener noreferrer">Lazy Loggerhead Cafe</a></ul>
          <ul><a href="https://www.lighthousedinerfl.com/" target="_blank" rel="noopener noreferrer">Lighthouse Diner</a></ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}