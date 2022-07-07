import React from 'react';
import styled from 'styled-components';
import whats from './whats.png'
import labenu from './labenu.jpg'


//container principal 
const AppContainer = styled.div `
 /*  border: 1px solid black; */
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${whats});
  
`
const Titulo = styled.div`
  background-color: darkslategray;
  display: inline-flex;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
  color: white;
`
const Img = styled.img`
  height: 40px;
  width: 40px;
  padding-right: 10px ;
`

//container mensagens 
const MessagensContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  
`

const Msg1 = styled.p`
  background-color: palegreen;
  align-self: flex-end;
  padding: 10px;
  border-radius: 0.3em;
  line-height: 1.3;
  font-weight: 400;
  box-shadow: 0 0 0.2em;
`
const Msg2 = styled.p`
  background-color: lightyellow;
  align-self: flex-start;
  padding: 10px;
  border-radius: 0.3em;
  line-height: 1.3;
  font-weight: 400;
  box-shadow: 0 0 0.2em;

`

//container dos inputs
const InputsContainer = styled.div`
  display: flex;
  height: 40px;
  
`
const NameInput = styled.input`
  width: 100px;
 box-shadow: inset 0 0 0.2em;
`
const MessageInput = styled.input`
flex-grow: 1;
border-radius: 0.3em;
box-shadow: inset 0 0 0.2em;
`

class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    messageValue: '' 
  }

  onChangeUserValue = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeMessageValue = (event) => {
    this.setState({messageValue: event.target.value})
  }

  sendMessage = ()=> {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
  }

  const newMessageArray = [newMessage, ...this.state.messages]

  this.setState ({messages: newMessageArray, messageValue: ''})
  }

  render() {
    return (
      <AppContainer>
        <Titulo>
            <Img src={labenu} />
            <div>
                <p>Whatslab</p>
            </div>
        </Titulo>
        <MessagensContainer>
        
        {this.state.messages.map((message, index) => {
            if (message.user === "jhenny"){
              return (
                <Msg1><b>{message.user}: </b>{message.text}</Msg1>
              )

            } else {
              return (
                <Msg2><b>{message.user}: </b>{message.text}</Msg2>
              )

            }

            /* return <p key={index}>
              <strong>{message.user}</strong>: {message.text}
            </p> */
          })}
        </MessagensContainer>

        <InputsContainer>
          <NameInput 
          onChange={this.onChangeUserValue}
          value={this.state.userValue} 
          placeholder={'Nome'}
        />
          <MessageInput
          onChange={this.onChangeMessageValue}
          value={this.state.messageValue}
          placeholder={'Mensagem'}
          />
          <button onClick={this.sendMessage}>Enviar</button>
        </InputsContainer>
      </AppContainer>
    );
  }
}

export default App;
