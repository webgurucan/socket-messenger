const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";

export const setActiveChat = (convData) => {
  return {
    type: SET_ACTIVE_CHAT,
    convData
  };
};

const reducer = (state = "", action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT: {
      return action.convData;
    }
    default:
      return state;
  }
};

export default reducer;
