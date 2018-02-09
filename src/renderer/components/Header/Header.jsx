import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

export class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    menuClick() {
        console.log("Has been clicked");
    }

    render() {
        const navBarElements = ['Home', 'News', 'Contact', 'About'];
        return (
            <MuiThemeProvider>
                <AppBar title="App Bar" onLeftIconButtonClick={this.menuClick} />
            </MuiThemeProvider>
        );
    }
}