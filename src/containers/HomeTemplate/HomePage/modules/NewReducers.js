import * as ActionType from "./constants";
let initialState = {
  loading: false,
  bigNewData: null,
  err: null,
};
const NewReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_NEW_REQUEST:
      state.loading = true;
      state.NewData = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_NEW_SUCCESS:
      state.loading = false;
      state.NewData = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.LIST_NEW_FAILED:
      state.loading = false;
      state.NewData = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default NewReducers;
