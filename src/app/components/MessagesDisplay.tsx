import React from 'react';
import MessageDisplay from './MessageDisplay';

interface UserMessage{
    role: string,
    content:string
}

interface MessagesDisplayProps{
    userMessages: UserMessage[]
    onIndex: (value: string) => void;
    loadUp: any
}



const MessagesDisplay = ({userMessages, loadUp, onIndex} : MessagesDisplayProps) => {
    const handleClick = (key:any) => {
        onIndex(key)
        console.log('key index: ', key);
      };
  return (
    <div className="messagess-display mx-6">
        {userMessages.map((userMessage,key) => <div onClick={event => handleClick(key)} key={key}> <MessageDisplay message={userMessage} loadUp={loadUp} /> </div>)}
    </div>
  );
}

export default MessagesDisplay;
