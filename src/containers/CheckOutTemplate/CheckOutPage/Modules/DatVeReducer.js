import * as ActionType from "./constants";
const initialState = {
    data:[
       
    ]
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

    default:
        return {...state}
    }
}
export default datVeReducer;
