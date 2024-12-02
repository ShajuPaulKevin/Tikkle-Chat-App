import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emogis";
import ConversationComponent from "./ConversationComponent";

const Conversation = () => {
  const { conversations, loading } = useGetConversations();
  console.log("Conversations", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <ConversationComponent
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
        ></ConversationComponent>
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversation;

// starter code

// import ConversationComponent from "./ConversationComponent";

// const Conversation = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <ConversationComponent></ConversationComponent>
//       <ConversationComponent></ConversationComponent>
//       <ConversationComponent></ConversationComponent>
//       <ConversationComponent></ConversationComponent>
//     </div>
//   );
// };

// export default Conversation;
