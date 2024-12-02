import { create } from "zustand";

const useConversation = create((set) => ({
  selctedConversation: null,
  setSelectedConversation: (selctedConversation) =>
    set({ selctedConversation }),
  messagess: [],
  setMessages: (messagess) => set({ messagess }),
}));

export default useConversation;
