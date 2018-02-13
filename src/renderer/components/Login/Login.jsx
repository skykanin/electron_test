import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import ActionAndroid from 'material-ui/svg-icons/action/android'

export default class Login extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton
                 label='Go to index page'
                 href='index.html'
                 icon={<ActionAndroid />}
                 />
            </MuiThemeProvider>
        )
    }
}