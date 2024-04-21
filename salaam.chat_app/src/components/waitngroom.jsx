import React from 'react'
import { Form } from 'react-bootstrap';
import { useState} from 'react';
import { Button } from 'react-bootstrap';
import './Waitngroom.css'; 
import logo from '../logo.svg'; 

const Waitngroom = ({joinChatRoom}) => {
    const[username, setUsername] = useState();
    const[chatroom, setChatroom] = useState();
  return (
   <>
        <div className="waitngroom-container">
            <img src={logo} alt="Logo" className="logo" />
            <Form className="waitngroom-form" onSubmit={(e) => {
                e.preventDefault();
                joinChatRoom(username, chatroom);
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Chatroom</Form.Label>
                    <Form.Control type="text" placeholder="Enter chatroom" onChange={(e) => setChatroom(e.target.value)} />
                </Form.Group>
                <br/>

                <Button variant="success" type="submit">
                    Join
                </Button>
            </Form>
        </div>
   </>
  )
}

export default Waitngroom
