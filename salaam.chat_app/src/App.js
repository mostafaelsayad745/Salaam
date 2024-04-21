
import { Container, Row ,Col} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Waitngroom from './components/waitngroom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { useState } from 'react';
import Chatroom from './components/chatroom';

function App() {
  const [conn , setConn] = useState();
  const [messages, setMessages] = useState([]);
  const joinChatRoom =async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl('https://localhost:7276/Chat')
        .withAutomaticReconnect()
        .build();
      
      conn.on('JoinSpecificChatRoom', (username, message) => {
        console.log(username, message);
      });

      conn.on('ReceiveMessage', (username, message) => {
        setMessages(messages => [...messages, {username, message}])
      });

      await conn.start();
      await conn.invoke('JoinSpecificChatRoom', {username, chatroom});
      setConn(conn);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div >
      <main>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>welcome to the chat app</h1>
            </Col>
          </Row>
          {
            !conn ? <Waitngroom joinChatRoom={joinChatRoom}/> 
            : <Chatroom messages={messages}></Chatroom>
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
