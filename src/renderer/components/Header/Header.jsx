import React from 'react'
import { MuiThemeProvider } from 'material-ui'
import { FlatButton, Toolbar } from 'material-ui'

export class Header extends React.Component {
    render() {
        const ToolbarButtons = () => (
            <span>
                <FlatButton label='Home'/>
                <FlatButton label='News'/>
                <FlatButton label='Contact'/>
                <FlatButton label='About'/>
            </span>
        );

        return (
            <MuiThemeProvider>
                <Toolbar children={<ToolbarButtons />} noGutter={false}/>
            </MuiThemeProvider>
        );
    }
}