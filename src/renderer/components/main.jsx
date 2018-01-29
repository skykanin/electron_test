import React from 'react'

export class Main extends React.Component {
    render() {
        return(
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        )
    }
}