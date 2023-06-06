import React from 'react';

interface CodeDisplayProps{
    text: any
}
const CodeDisplay = ({text}: CodeDisplayProps) => {
  return (
    <div className="code-display mx-6 bg-[#323232] h-64 my-3 rounded-xl">
        <div className='buttons rounded-t-xl'>
            <div className='button first'></div>
            <div className='button second'></div>
            <div className='button third'></div>
        </div>
        <div className='code-output font-mono flex justify-center text-left'>
            <p>{text}</p>
        </div>
    </div>
  );
}

export default CodeDisplay;
