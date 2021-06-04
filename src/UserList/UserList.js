import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "../UserItem/UserItem";
import './UserList.css'

function UserList() {
    const [listOfUSer, setlistOfUSer] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setlistOfUSer(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="userList-box">
            {listOfUSer.map((obj, index) => (
                <UserItem key={index} obj={obj} index={index} />
            ))}
        </div>
    );
}

export default UserList;
