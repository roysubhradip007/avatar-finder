import axios from "axios";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";
import { useEffect } from "react";
import "./avatarList.css"
import useAvatarList from "../../hooks/useAvatarList";

function AvatarList({user_name}) {

    const avatarData = useAvatarList(user_name);

    return (
        <div className="avatarList-wrapper">
            {(avatarData == null) ? "data is loading" : avatarData.map((e) => <Avatar key={e.id} image={e.avatar_url} username={e.login} 
            />)}
        </div>
    )

}

export default AvatarList;