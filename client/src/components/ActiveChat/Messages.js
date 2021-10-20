import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  
  let readerInfoShownCount = 0;
  
  //Get my last message
  let lastReadMessageIndex = 0;
  messages.forEach((message, index) => {
    if (message.senderId === userId && message.isRead === true) {
      lastReadMessageIndex = index;
    }
  });
  
  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format("h:mm");
        
        if ((message.senderId === userId && message.isRead === false) || index === lastReadMessageIndex) {
          readerInfoShownCount ++;
        }

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={readerInfoShownCount === 1 && otherUser}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
