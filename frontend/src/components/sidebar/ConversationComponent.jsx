import useConversation from "../../zustand/useConversation";

const ConversationComponent = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSeleceted = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSeleceted ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="online avatar">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 justify-between ">
            <p className="font-bold text-gray-200 "> {conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 h-1 py-0"></div>}
    </>
  );
};

export default ConversationComponent;

// starter code

// const ConversationComponent = () => {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="online avatar">
//             <div className="w-12 rounded-full">
//               <img
//                 src="https://avatar.iran.liara.run/public/boy?username=John"
//                 alt="user avatar"
//               />
//             </div>
//           </div>
//           <div className="flex flex-1 flex-col">
//             <div className="flex gap-3 justify-between ">
//               <p className="font-bold text-gray-200 "> John Doe</p>
//               <span className="text-xl">😼</span>
//             </div>
//           </div>
//         </div>
//         <div className="divider my-0 h-1 py-0"></div>
//       </>
//     );
//   };

//   export default ConversationComponent;
