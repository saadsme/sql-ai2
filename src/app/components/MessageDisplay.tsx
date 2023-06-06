import React from 'react';

interface UserMessage{
    role: string,
    content:string
}

interface MessageDisplayProps{
    message: UserMessage,
    loadUp: any
}

const MessageDisplay = ({message, loadUp}: MessageDisplayProps) => {
  return (
    <div className="message-display flex hover:cursor-pointer bg-slate-300 my-2 py-2 rounded-xl" >
        <p id='icon'>X</p><p>{message.content}</p>
    </div>
  );
}

export default MessageDisplay;
