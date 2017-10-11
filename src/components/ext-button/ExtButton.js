import React, { Component } from 'react';
import './ext-button.css';

class ExtButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'button',
            styles: {
                visibility: 'hidden',
                top: 0,
                left: 20
            }
        };

        this._hideTimeout = null;
    }
    componentDidMount() {
        let classList = 'button';
        switch(this.props.btnRole) {
            case 'delCol':
            case 'delRow':
                classList += ` button--del`;
                break;
            case 'addCol':
            case 'addRow':
                classList += ` button--add`;
                break;
            default:
                break;
        }
        this.setState({
            classes: classList,
            styles: {
                visibility: this.delButton ? 'hidden' : 'visible'
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        this.visible = true;
    }

    set visible(flag) {
        if (flag) {
            this.setState({
                styles: {
                    visibility: 'visible'
                }
            });
        } else {
            this._hideTimeout = setTimeout(() => {
                this.setState({
                    styles: {
                        visibility: 'hidden'
                    }
                });
            }, 150);
        }
    }

    get delButton() {
        return this.props.btnRole === 'delCol' || this.props.btnRole === 'delRow';
    }

    handleMouseOver() {
        clearTimeout(this._hideTimeout);
        this.visible = true;
    }

    handleClick() {
        this.props.clickAction();
        if (this.delButton) {
            this.visible = false;
        }
    }

    render() {
        return (
            <button
                onMouseOver = {() => this.handleMouseOver()}
                onClick = {() => this.handleClick()}
                className = {this.state.classes}
                style = {this.state.styles}>
                {this.delButton ? '-' : '+'}
            </button>
        );
    }
}

export default ExtButton;
