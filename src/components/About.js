import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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


export default function About() {
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
        About
      </ul>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        The Estuary at Jupiter Dunes
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
          The Estuary at Jupiter Dunes is a gated community of  townhomes with a 1 car garage sitting on a par 3 golf course. Only a short walk to the beach, Jupiter Inlet,
          a beachfront running path, multiple bars, restaurants, and surfshops. The par 3 golf course is a great spot to take new golfers or work on your short game, and the
          community pool is a great to relax in after a long day. The community is well maintained and some of the townhomes have great views of the golf course or the estuaries
          that run through the community.
          </Typography>
        </DialogContent>
        <Divider />
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        4308 Fairway Drive North
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
          <li>Full Kitchen (Remodeled in 2021)</li>
          <li>Screened in Porch</li>
          <li>3 Bedrooms</li>
          <li>2 Full Bathrooms</li>
          <li>One Car Driveway</li>
          <li>Washer/Dryer</li>
          <li>Central Air</li>
          <li>View of 12th Hole</li>
          </Typography>
        </DialogContent>
        <Divider />
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Contact
        </DialogTitle>
        <DialogContent>
          <h4>Phone: 908-698-2410</h4>
          <h4>Email: cawlcorp@gmail.com</h4>
          <h4>Contact for available dates</h4>
        </DialogContent>
      </Dialog>
    </div>
  );
}