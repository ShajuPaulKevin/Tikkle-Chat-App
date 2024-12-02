import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatsSelected></NoChatsSelected>
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
        </>
      )}
      <Messages></Messages>
      <MessageInput></MessageInput>
    </div>
  );
};

export default MessageContainer;

const NoChatsSelected = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className=" text-3xl md:text-6xl text-center"></TiMessages>
      </div>
    </div>
  );
};

// starter code

// import { TiMessages } from "react-icons/ti";
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";

// const MessageContainer = () => {
//   const NochatsSelected = true;

//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       {NochatsSelected ? (
//         <NoChatsSelected></NoChatsSelected>
//       ) : (
//         <>
//           <div className="bg-slate-500 px-4 py-2 mb-2">
//             <span className="label-text">To:</span>
//             <span className="text-gray-900 font-bold">John Doe</span>
//           </div>
//         </>
//       )}
//       <Messages></Messages>
//       <MessageInput></MessageInput>
//     </div>
//   );
// };

// export default MessageContainer;

// const NoChatsSelected = () => {
//   return (
//     <div className="flex justify-center items-center h-full w-full">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Welcome 👋 John Doe</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className=" text-3xl md:text-6xl text-center"></TiMessages>
//       </div>
//     </div>
//   );
// };
