import React from 'react'
import './UserItem.css'

function UserItem({obj, index}) {
    return (
        <div>
            <ul>
                <li key={index}>
                    User {index + 1} : {obj.username}
                </li>
            </ul>
        </div>
    );
}

export default UserItem
