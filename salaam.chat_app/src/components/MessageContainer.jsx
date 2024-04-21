import React from 'react'

const MessageContainer = ({messages}) => {
  return (
    <div>
        {
            messages && messages.map((message, index) => (
                <div key={index}>
                <h5>{message.username}</h5>
                <p>{message.message}</p>
                </div>
            )) 
        }
      
    </div>
  )
}

export default MessageContainer
