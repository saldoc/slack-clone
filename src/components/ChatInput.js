import React, { useState } from 'react'
import styled from 'styled-components'
import SendRoundedIcon from '@material-ui/icons/SendRounded';


function ChatInput({ sendMessage }) {

  const [inputValue, setInputValue] = useState("")

  const send = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    sendMessage(inputValue);
    setInputValue("")
  }

  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder="Message type here" />
          <SendButton type="submit" onClick={send}>
            <SendRoundedIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  )
}

export default ChatInput



const Container = styled.div`
  padding: 0 20px 24px;
  color:${props => props.theme.chatMessageMainColor};
`

const InputContainer = styled.div`
  border: 1px solid ${props => props.theme.chatInputBorderColor};
  border-radius:4px;

  form{
    display:flex;
    align-items: center;
    height:42px;
    padding:10px;

    input{
      flex: 1;
      border:none;
      font-size:13px;
      height:100%;
      color:${props => props.theme.chatMessageMainColor};
      background-color:transparent;
      &:focus{
        outline:none;
      }
    }
  }
`

const SendButton = styled.button`
  background: #007a5a;
  color: #fff;
  height: 32px;
  width: 32px;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  transition: filter .2s;
  border:none;
  cursor: pointer;
  svg{
    height: 16px;
    width: 16px;
  }
  &:hover{
    filter:brightness(1.1);
  }
  &:focus{
    outline: none;
  }
`