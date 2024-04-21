import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';

const Chatroom = ({messages , sendMessage}) => {
  return (
    <div>
      <Row className='px-5 py-5'>
        <Col sm={10}>
            <h2>Chat</h2>
        </Col>
      </Row>
      <Row className='px-5 py-5'>
        <Col sm={10}>
            <MessageContainer messages={messages}/>
        </Col>
        <Col sm={10}>
            <SendMessageForm sendMessage={sendMessage}/>
        </Col>
      </Row>
    </div>
  )
}

export default Chatroom
