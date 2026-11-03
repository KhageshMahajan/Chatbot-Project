import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import "./ChatMessage.css"  


export function ChatMessage({ message, sender }) {
        // This is the different way to get the props values. Instead of using props.message and props.sender, we can destructure the props object in the function parameter itself.
        // const message = props.message;
        // const sender = props.sender;
        // const{ message, sender } = props;

        /* this is the main javascript way to do conditional rendering. We can use if else statement to check the sender and render the message accordingly.
        if (sender === 'robot'){
          return (
          <div>
            <img src="robot.png" width="50"  />
            {message}
          </div>
          );
        } 
          */

        return (
          <div className={
            sender === 'user' 
              ? 'chat-message-user' 
              : 'chat-message-robot'
          }>
            {sender === "robot" && <img src={RobotProfileImage} className="chat-message-profile" />}

            <div className="chat-message-text">
            {message}
            </div>

            {sender === "user" && <img src={UserProfileImage} className="chat-message-profile" />}
          </div>
        );
      }