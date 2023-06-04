import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, Segment, TextArea } from 'semantic-ui-react'

export default function MessageForm() {
  const params = useParams();
  return (
    <div>MessageForm :  {params.channelName}
        <Segment>
            <Form>
                <Form.Field>
                    <TextArea />
                </Form.Field>
                <Button primary type='submit' >SEND</Button>
            </Form>
        </Segment>
    </div>
  )
}
