import {create} from 'zustand';
//to put simply we have created a store which is a global state consisting of two states and their setter functions which can be shared and used across components in our react app
const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),
}))

export default useConversation;