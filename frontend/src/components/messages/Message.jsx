import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "animate-shake" : "";

  return (
    <div className={`chat ${chatClassName} `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs gap-1 flex items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// starter code

// import React from "react";

// // const Message = () => {
// //   return (
// //     <div className="chat chat-end ">
// //       <div className="chat-image avatar">
// //         <div className="w-10 rounded-full">
// //           <img
// //             src="https://avatar.iran.liara.run/public/boy?username=John"
// //             alt=""
// //           />
// //         </div>
// //       </div>
// //       <div className="chat-bubble text-white bg-blue-500">Hey whats up?</div>
// //       <div className="chat-footer opacity-50 text-xs gap-1 flex items-center">12:42</div>
// //     </div>
// //   );
// // };

// // export default Message;
