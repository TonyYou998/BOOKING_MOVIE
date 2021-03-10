import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import {actChangeInfoApi} from "../../containers/AdminTemplate/DashBoardPage/modules/action"
export default function EditInfo() {
  const [open, setOpen] = React.useState(false);
  let dispatch=useDispatch();
  let info=JSON.parse(localStorage.getItem("user"));
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let [matKhau,setMatKhau]=useState({
    matKhau:"",
  })
  let [email,setEmail]=useState({
            email:info.email,
        });
  let [hoTen,sethoTen]=useState({
            hoTen:info.hoTen,
        });
   let [soDT  ,setSoDt]=useState({
            soDT:info.soDT,
        });
          let [taiKhoan,setTaiKhoan]=useState({
            taiKhoan:info.taiKhoan,
        });
      const handleOnChangeEmail=(e)=>{
            const {value}=e.target;
            setEmail(value);


        }
      
    const handleOnChangeHoTen=(e)=>{
            const {value}=e.target;
            sethoTen(value);
        }
    const handleOnChangeSDT=(e)=>{
            const {value}=e.target;
            setSoDt(value);
        }
     const handleOnChangeMatKhau=(e)=>{
            const {value}=e.target;
            setMatKhau(value);
        }
        const handleOnChangeTaiKhoan=(e)=>{
            const {value}=e.target;
            setTaiKhoan(value);
        }
      const handleChange=(e)=>{
        e.preventDefault();
      
        dispatch(actChangeInfoApi(hoTen,matKhau,soDT,email,taiKhoan))
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
                onChange={handleOnChangeTaiKhoan}
                defaultValue={info.taiKhoan}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Họ Tên"
                type="text"
                onChange={handleOnChangeHoTen}
                defaultValue={info.hoTen}
                fullWidth
              />
                {/* <TextField
                autoFocus
                margin="dense"
                id="pass"
                label="Mật khẩu"
                type="password"
                onChange={handleOnChangeMatKhau}
                
                fullWidth
              /> */}
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                onChange={handleOnChangeEmail}
                defaultValue={info.email}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="tel"
                label="Số điện thoại"
                type="tel"
                onChange={handleOnChangeSDT}
                defaultValue={info.soDT}
                fullWidth
              />

          <Button type="submit" onClick={handleClose} color="primary">
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
