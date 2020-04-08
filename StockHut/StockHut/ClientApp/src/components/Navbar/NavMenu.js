import React, { Component } from "react";
import "./NavMenu.css";
import ButtonAppBar from "./Navbar";
let timer = 0;
let username = "";
export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    
    render() {
        if (timer == 0) {
            username = this.props.username;
            timer++;
        }
        return (
            <header>
                <ButtonAppBar username={username} />
            </header>
        );
    }
}
