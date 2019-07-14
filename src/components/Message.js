import React from 'react'

export default function Message(props) {
    return (
        <React.Fragment>
            <p> {props.username}: {props.message} </p>
        </React.Fragment>
    )
}