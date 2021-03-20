import * as ActionType from "./constants";
import {mainAPi} from "../../../../api";
export const actAddMovieApi=(formData)=>{
    
    return (dispatch)=>{
        mainAPi
        .post("/QuanLyPhim/ThemPhimUploadHinh",formData)
        .then((result)=>{
            alert("thêm thành công")

        }) 
        .catch((err)=>{
          
            alert(err.response.data)

        })
        

    }
}
//edit phim
export const actEditMovieApi=(formData,token)=>{
    
    console.log(formData.get("hinhAnh"));
  return (dispatch)=>{
      mainAPi
      .post("/QuanLyPhim/CapNhatPhimUpload",formData,{headers: { Authorization: `Bearer ${token}` }})
      .then((result)=>{
         alert("thay đổi thành công");

      })
      .catch((err)=>{
           alert("lỗi");

      })

  }
}
//  xóa phim
export const actDeleteMovieApi=(maPhim,token)=>{
  
  return (dispatch)=>{
       mainAPi
  .delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,{headers: { Authorization: `Bearer ${token}` }})
  .then((result)=>{
        alert(result.data);
       
    
    })
    .catch((err)=>{
        alert(err.response.data);
       
    })
  }
 
}
