const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      user1Id: {
        [Op.or]: [user1Id, user2Id]
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id]
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

/**
 * Check if is an existing conversation
 * @returns conversation or null if it doesn't exist
 */
Conversation.isValid = async function (conversationId, user1Id) {
  
  const conversation = await Conversation.findByPk(conversationId);
  if (conversation?.user1Id !== user1Id && conversation?.user2Id !== user1Id)
    return;
  
  return conversation;
};



module.exports = Conversation;
