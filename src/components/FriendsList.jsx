import React, { Component } from 'react';
import './FriendsList.css';

export class FriendsList extends Component {

    friendsList = [
        {
            name: 'Anett',
            lastMessage: 'szia Isti'
        },
        {
            name: 'Isti',
            lastMessage: 'szia Anett'
        }
    ]

    constructor() {
        super();
    }

    render() {
        return (
            <ul className="friendslist-container">
                {this.friendsList.map((friend, index) => {
                    console.log(friend);
                    console.log(index);
                    <li key={index}>
                        <div>{friend.name}</div>
                        <div>gfdhf</div>
                    </li>
                })}
            </ul>
        );
    }
}