import React, { useState, useEffect } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000')

export default function MessageContainer() {
    const [log, setLog] = useState([])

    const handleMessageSubmit = (message) => {
        socket.emit('message', { message })
        setLog([...log, message])
    }

    useEffect(() => {
        socket.on('received', (obj) => {
            console.log(obj)
            setLog([...log, obj.data.message])
        })
    }, [log])

    return (
        <div>
            <MessageForm handleMessageSubmit={handleMessageSubmit} />
            {log.map((m, i) => <Message key={i} {...m} />)}
        </div>
    )
}