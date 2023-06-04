import React from "react";
import MessageFeed from "../components/MessageFeed";
import MessageForm from "../components/MessageForm";

interface ChannelProps {
}

function Channel() { 
    return (
        <>
        <MessageFeed />
        <MessageForm />
        </>
    );
};
 
export default Channel;