import * as ActionType from "./constants";
const initialState = {
    data:[
       
    ],
   
}

const datVeReducer= (state = initialState,action) => {
    switch (action.type) {

    case ActionType.DAT_GHE:
        let danhSachGheDangDatUpdate=[...state.data];
        
        let index=danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.stt===action.ghe.stt);
        if(index!==-1){
            danhSachGheDangDatUpdate.splice(index,1);
        }
        else{
            danhSachGheDangDatUpdate.push(action.ghe);
        }
        
        
        state.data=danhSachGheDangDatUpdate;
        return { ...state}
        case ActionType.CLEAR__REDUCER:
            state.data=[];
    // case ActionType.DAT_VE_REQUEST:
    //     state.data=null;
    //     state.err=null;
    // case ActionType.DAT_VE_SUCCESS:
    //     state.data=action.payload;
    //     state.err=false;
    // case ActionType.DAT_VE_FAILED:
    //     state.data=null;
    //     state.err=true;
    default:
        return {...state}
    }
}
export default datVeReducer;
