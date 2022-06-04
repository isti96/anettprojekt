import React, { Component } from 'react';
import './Chat.css';
import { FriendsList } from '../components/FriendsList';
import { SupplierList } from '../components/SupplierList';


export class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonId: null
        }
        this.messageList = [];
        this.setButton = this.setButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            text: ''
        };
    }

    setButton(id) {
        this.setState({ buttonId: id });
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
        console.log(this.state.text);
    };

    handleClick() {
    
    };

    render() {


        return (
            <div className='chat-big-container'>
                <div className="chat-container">
                    <div className='supplier-friends'>
                        <div className='buttons'>
                            <button className='chat-button' onClick={() => this.setButton(1)}>Friends</button>
                            <button className='chat-button' onClick={() => this.setButton(2)}>Suppliers</button>
                        </div>
                        <div className='chat-list'>
                            {this.state.buttonId === 1 ? <FriendsList /> : <SupplierList />}
                        </div>
                    </div>
                </div>
                <div className='chat-text'>
                    <p className='chat-message'>
                        {this.state.text}
                    </p>
                    <div className='textarea-send'>
                        <textarea type="text" className='textarea-container'  ></textarea>
                        <button className='send-button' onClick={this.handleChange}>SEND</button>
                    </div>

                </div>
            </div>
        );
    }
}
