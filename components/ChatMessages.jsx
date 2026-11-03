import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import "./ChatMessages.css"

  function ChatMessages({ chatMessages }) {

        const chatMessagesContainerRef = useRef(null);

        useEffect(() => {
          const chatMessagesContainer = chatMessagesContainerRef.current;
          chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }, [chatMessages]);

        return (
          <div className="chat-messages-container" ref={chatMessagesContainerRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

      export default ChatMessages;