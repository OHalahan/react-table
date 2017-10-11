import React, { Component } from 'react';
import './ext-button.css';

class ExtButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: 'button',
            styles: {
                visibility: 'hidden'
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
                classList += ` button--add button--add-${this.props.btnRole === 'addRow' ? 'row' : 'col'}`;
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

    set positionX(pos) {
        this.refs.button.style.left = `${pos}px`;
    }

    set positionY(pos) {
        this.refs.button.style.top = `${pos}px`;
    }

    set visible(flag) {
        if (flag) {
            clearTimeout(this._hideTimeout);
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
            }, 100);
        }
    }

    get delButton() {
        return this.props.btnRole === 'delCol' || this.props.btnRole === 'delRow';
    }

    handleClick() {
        this.props.clickAction();
        if (this.delButton) {
            this.visible = false;
        }
    }

    handleMouseLeave() {
        if (this.delButton) {
            this.visible = false;
        }
    }

    render() {
        return (
            <button
                ref="button"
                onMouseOver = {() => this.visible = true}
                onMouseLeave = {() => this.handleMouseLeave()}
                onClick = {() => this.handleClick()}
                className = {this.state.classes}
                style = {this.state.styles}>
                {this.delButton ? '-' : '+'}
            </button>
        );
    }
}

export default ExtButton;
