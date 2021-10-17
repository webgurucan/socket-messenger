import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
} from "./store/conversations";

import { updateMessagesAsRead } from "./store/utils/thunkCreators";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => {

    let state = store.getState();
    //You received new message and update the messages.
    store.dispatch(setNewMessage(data.message, data.sender, state.activeConversation.conversationId));

    //If you open the same conversation panel, you should make the message read.
    if (state.activeConversation.conversationId === data.message.conversationId) {
      store.dispatch(updateMessagesAsRead({ conversationId: data.message.conversationId }));
    }
  });
});

export default socket;
