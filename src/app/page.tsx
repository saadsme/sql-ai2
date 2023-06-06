"use client"
import './index.css'
import React from 'react';
import { useState } from 'react';
import MessagesDisplay from './components/MessagesDisplay';
import CodeDisplay from './components/CodeDisplay';
import { Bars } from 'react-loader-spinner';


interface ChatData {
  role: string,
  content: string,
}

const App = () => {
  const [value, setValue] = useState<string>("")
  const [code, setCode] = useState<string>("")
  const [chat, setChat] = useState<ChatData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [index, setIndex] = useState('')

  const handleIndex = (val: string) => {
    setIndex(val)
    setValue(filteredUserMessages[parseInt(val,10)].content)
    setCode(filteredGPTMessages[parseInt(val,10)].content)
  }
    const loadText = () =>{
      console.log('item clicked!!')
    }


    const getQuery = async () => {
      setLoading(true);
      try {
        const options: RequestInit = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: value,
          }),
        };
    
        const response = await fetch(`/api/completions`, options);
    
        if (response.ok) {
          const responseData = await response.json();
          console.log('response from frontend',responseData)
          const message = responseData;
          console.log('output from gpt',message)
    
          if (message) {
            const userMessage = {
              role: "user",
              content: value,
            };
    
            setChat((oldChat) => [...oldChat, message, userMessage]);
            setCode(message.content);
          } else {
            // Handle the case when 'message' is undefined
          }
        } else {
          // Handle the case when the API request returns an error
        }
      } catch (error) {
        console.error(error);
        // Handle the error case
      } finally {
        setLoading(false);
      }
    };
    
    

const filteredUserMessages = chat.filter(message => message.role==="user")
const filteredGPTMessages = chat.filter(message => message.role==="assistant")
const latest = filteredGPTMessages[filteredGPTMessages.length-1]

//console.log('latest', latest?.content)
//console.log(chat)
  return (
    <div className='max-w-2xl flex flex-col justify-center mx-auto my-12'>
        
      <div className='my-2'>
      <h1 className='w-100 flex items-center justify-center text-6xl font-bold '>Text to SQL</h1>
      <p className='w-100 flex items-center justify-center text-lg font-bold my-4'>Convert your Text to SQL in seconds with AI!</p>
      </div>
    <div className="app max-w-2xl flex flex-col justify-center bg-gray-100 rounded-xl drop-shadow-md ">
      <input className="text-center text-md" placeholder='Create a Table for Cars' value={value} onChange={e => setValue(e.target.value)}/>
      <div className='button-container flex justify-center space-x-3 text-lg'>
        <button className="bg-sky-300 rounded-2xl font-bold px-3 py-1" id='get-query' onClick={getQuery}>Generate!</button>
        <button className="bg-gray-800 rounded-2xl text-white px-3 py-1" id='clear-query' onClick={() =>{
          setValue("")
          setChat([])
          setCode("")
        }}>Clear</button>
      </div>
      <CodeDisplay text={loading? <Bars
          height="25"
          width="25"
          color="#ffbd2d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
/> : code || "_"}/>
      <MessagesDisplay userMessages={filteredUserMessages} loadUp={loadText} onIndex={handleIndex}/>
      
      
      
    </div>
    </div>
  );
}

export default App;
