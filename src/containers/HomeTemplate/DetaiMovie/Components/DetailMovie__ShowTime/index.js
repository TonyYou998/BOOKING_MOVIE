import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ShowTime from "../ShowTime";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { actGetListDateTimeApi} from "../../Modules/action"




export default function ShowTimeModal(props){
   let {id}=useParams();

  const dispatch=useDispatch();
 
  const data=useSelector(state=>state.getListDateTimeReducer.data);
 
  
   const fetchData=()=>{
     dispatch(actGetListDateTimeApi(id));
   }
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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
    
      <button className="btn btn-success ticket__button" onClick={()=>{
        handleClickOpen();
        fetchData();
      }}> Mua Vé</button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle  id="customized-dialog-title" onClose={handleClose}>
         
          <h3 style={{color:" rgb(250, 82, 56)"}}> Lịch Chiếu</h3>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <ShowTime data={data}/>
          </Typography>
         
        </DialogContent>
      
      </Dialog>
    </div>
  );

}

