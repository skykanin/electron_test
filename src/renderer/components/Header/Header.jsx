import React from 'react'
import ReactDOM from 'react-dom'

export class Header extends React.Component {
    render() {
        const navBarElements = ['Home', 'News', 'Contact', 'About'];
        return (
            <ul className='header'>
                <li><a>{navBarElements[0]}</a></li>
                <li><a>{navBarElements[1]}</a></li>
                <li><a>{navBarElements[2]}</a></li>
                <li><a>{navBarElements[3]}</a></li>
            </ul>
        );
    }
}