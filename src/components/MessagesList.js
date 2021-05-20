import React from "react";
import styled from "styled-components";

const MessagesContainer = styled.div`
  background-color: lavender;
  width: 45vw;
  height: 90vh;
  margin-top: 10px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 40px 0;
  border: 1px solid lightgray;
`;
const Message = styled.p`
  background-color: #fa7921;
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 0 30px;
  border: 1px solid lightgray;
`;
const MyMessage = styled.p`
  align-self: flex-end;
  background-color: #b9a44c;
  margin: 3px;
  padding: 12px 15px;
  text-align: right;
  width: 50%;
  border-radius: 30px 0;
  border: 1px solid lightgray;
`;

class MessagesList extends React.Component {
  render() {
    return (
      <MessagesContainer>
        {this.props.messages &&
          this.props.messages.map((message, index) => {
            if (message.userValue.toLowerCase() === "eu") {
              return (
                <MyMessage
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </MyMessage>
              );
            } else {
              return (
                <Message
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </Message>
              );
            }
          })}
      </MessagesContainer>
    );
  }
}
export default MessagesList;
