import React, { useState, useEffect } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

const ws = new WebSocket('ws://localhost:3000')

export default function MessageContainer() {
    const [log, setLog] = useState([])

    const handleMessageSubmit = (message) => {
        ws.send(JSON.stringify(message))
        setLog([...log, message])
    }

    useEffect(() => {
        ws.onmessage = (e) => {
            const message = JSON.parse(e.data)
            setLog([...log, message])
        }
    }, [log])

    useEffect(() => {
        ws.onopen = () => {
            console.log('Connected!')
        }
    }, [])

    return (
        <div>
            <MessageForm handleMessageSubmit={handleMessageSubmit} />
            {log.map((m, i) => <Message key={i} {...m} />)}
        </div>
    )
}