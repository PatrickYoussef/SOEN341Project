import React, { Component } from "react";
import { Container } from "reactstrap";


export class Layout2 extends Component {
    static displayName = Layout2.name;

    render() {
        return (
            <div>
                <Container>{this.props.children}</Container>
            </div>
        );
    }
}
