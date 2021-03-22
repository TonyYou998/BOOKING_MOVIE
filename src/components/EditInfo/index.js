import React,{useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import {actChangeInfoApi, actDetailInfoApi} from "../../containers/AdminTemplate/DashBoardPage/modules/action"
export default function EditInfo() {
  const [open, setOpen] = React.useState(false);
  let dispatch=useDispatch();
  let info=JSON.parse(localStorage.getItem("user"));
   
  useEffect(()=>{
      dispatch(actDetailInfoApi(info.taiKhoan))  ;
  },[])
  const infoData=useSelector(state=>state.detailInfoReducer.data)
  let [flag,setFlag]=useState({
    count:0,
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const infoMatKhau=infoData && infoData.matKhau;

  let [state,setState]=useState(
    {
      taiKhoan:info.taiKhoan,
      matKhau:"",
      email:info.email,
      soDT:info.soDT,
      maNhom:"GP01",
      maLoaiNguoiDung:info.maLoaiNguoiDung,
      hoTen:info.hoTen,
      
     

    }
  );


     
      const handleChange=(e)=>{
        e.preventDefault();
      
         dispatch(actChangeInfoApi(state,info.accessToken))
      }
     
      
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClickOpen}>
        Edit Info
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thay đổi thông tin</DialogTitle>
        <DialogContent>
          <form className="form" onSubmit={handleChange}>
            <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                type="text"
                onChange={(e)=>{
                  setState({...state,taiKhoan:e.target.value})

                }}
                defaultValue={state.taiKhoan}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="matKhau"
                label="Mật khẩu"
                type="text"
                onChange={(e)=>{
                  setState({...state,matKhau:e.target.value})

                }}
             
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Họ Tên"
                type="text"
               onChange={(e)=>{
                  setState({...state,hoTen:e.target.value})

                }}
                defaultValue={state.hoTen}
                fullWidth
              />
               
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                onChange={(e)=>{
                  setState({...state,email:e.target.value})

                }}
                defaultValue={state.email}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="tel"
                label="Số điện thoại"
                type="tel"
                onChange={(e)=>{
                  setState({...state,soDT:e.target.value})

                }}
                defaultValue={state.soDT}
                fullWidth
              />

          <Button type="submit" onClick={()=>{
            handleClose();
            setFlag({count:state.count+1});
          }} color="primary">
                    Thay đổi
                    </Button>
          <Button onClick={handleClose} color="primary">
                      Hủy
                    </Button>
              
          </form>
         
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
