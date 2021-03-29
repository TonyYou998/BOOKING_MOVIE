import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';

import {actEditMovieApi} from "../../modules/action";
export default function EditMovie(props) {
  const [open, setOpen] = React.useState(false);
  let dispatch=useDispatch();
  let info=JSON.parse(localStorage.getItem("user"));
  const {data}=props;
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
     let [state,setState]=useState({
            tenPhim:data.tenPhim,
            hinhAnh:{},
            biDanh:data.biDanh,
            trailer:data.trailer,
            moTa:data.moTa,
            ngayKhoiChieu:data.ngayKhoiChieu,
            danhGia:data.danhGia,
            maNhom:"GP01",
            maPhim:data.maPhim,
        })  

      const handleSubmit=(e)=>{
          e.preventDefault();
           
          var form_data=new FormData();
          for (var Key in state){
              form_data.append(Key,state[Key]);
          }
          dispatch(actEditMovieApi(form_data,info.accessToken));

      }
     
      
    
  
  return (
    <div>
      <button className="btn btn-success mt-1" onClick={handleClickOpen} style={{width:"80px"}}>
        Edit
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thay đổi thông tin</DialogTitle>
        <DialogContent>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
                autoFocus
                margin="dense"
                id="tenPhim"
                label="tên phim"
                type="text"
                defaultValue={state.tenPhim}
                onChange={(e)=>{
                    setState({...state,tenPhim:e.target.value})
                }}
                fullWidth
              />
              
              <TextField
                autoFocus
                margin="dense"
                id="biDanh"
                label="bí danh"
                type="text"
              
                defaultValue={state.biDanh}
                 onChange={(e)=>{
                    setState({...state,biDanh:e.target.value})
                }}
                fullWidth
              />
             
              <TextField
                autoFocus
                margin="dense"
                id="trailer"
                label="trailer"
                type="text"
             
                defaultValue={state.trailer}
                 onChange={(e)=>{
                    setState({...state,trailer:e.target.value})
                }}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="moTa"
                label="mô tả"
                type="tel"
                 onChange={(e)=>{
                    setState({...state,moTa:e.target.value})
                }}
                defaultValue={state.moTa}
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                id="ngayKhoiChieu"
                label="ngày khởi chiếu"
                type="text"
                 onChange={(e)=>{
                    setState({...state,ngayKhoiChieu:e.target.value})
                }}
                defaultValue={
                  state.ngayKhoiChieu.slice(0,10)

                }
                fullWidth
              />
                <TextField
                autoFocus
                margin="dense"
                id="danhGia"
                label="đánh giá"
                type="text"
                 onChange={(e)=>{
                    setState({...state,danhGia:e.target.value})
                }}
                defaultValue={state.danhGia}
                fullWidth
              />
              <input style={{width:"100%"}} className="my-2" type="file" onChange={(e)=>{
                  setState({...state,hinhAnh:e.target.files[0]})

              }}></input>



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
