import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div className="" key={message._id} ref={lastMessageRef}>
            <Message message={message}></Message>
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, idx) => (
          <MessageSkeleton key={idx}></MessageSkeleton>
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
