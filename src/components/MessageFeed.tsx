import React from "react";
import { Comment, Header } from "semantic-ui-react";

interface Message {
    id?: string;
    body?: string;
    user?: {
        id?: string;
        name?: string;
        avatarUrl?: string;
    } 
    date?: string;
}

interface MessageFeedProps {
   channelName: string; 
}
interface MessageFeedState {
   messages: Message[];
}
 
class MessageFeed extends React.Component<MessageFeedProps, MessageFeedState> {
    constructor(props: MessageFeedProps) {
        super(props);
        this.state = { messages: [] };
    }
    render() { 
        return ( 
            <Comment.Group>
                <Header>{this.props.channelName}</Header>
                {this.state.messages.slice().reverse().map(message=>
                <Comment key={message.id}>
                    <Comment.Avatar src={message.user?.avatarUrl || '/img/avatar.png'} />
                    <Comment.Content>
                        <Comment.Author as='a'>{message.user?.name}</Comment.Author>
                        <Comment.Metadata>{message.date}</Comment.Metadata>
                        <Comment.Text>{message.body}</Comment.Text>
                    </Comment.Content>
                </Comment>
                )}
            </Comment.Group>
         );
    }
}
 
export default MessageFeed;