import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  lastMsgRead: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  lastMsgUnread: {
    fontSize: 13,
    fontWeight: "bolder",
    letterSpacing: -0.17,
  },
  notification: {
    height: 20,
    width: 20,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 10,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  badge: {
    right: theme.spacing(3),
    top: theme.spacing(3),
    border: `2px solid ${theme.palette.background.paper}`,
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unreadCount } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={unreadCount? classes.lastMsgUnread : classes.lastMsgRead}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
        <Badge badgeContent={unreadCount && unreadCount} color="primary" classes={{badge: classes.badge}} />
      </Box>
    </Box>
  );
};

export default ChatContent;
