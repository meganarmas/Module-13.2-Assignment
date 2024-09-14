import React from "react";
import { UserInfoProps } from "../Interface/UserInfoProps";

const UserInfo:  React.FC<UserInfoProps>= ({ name, age, email }) => {
    return (
        <div>
            <h1>User Information</h1>
            <p>{`Name: ${name}`}</p>
            <p>{`Age: ${age}`}</p>
            <p>{`Email: ${email}`}</p>
        </div>
    );
};

export default UserInfo;