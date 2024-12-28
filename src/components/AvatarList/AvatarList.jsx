import axios from "axios";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";
import { useEffect } from "react";

function AvatarList() {
    const url = `https://api.github.com/search/users?q=suman&per_page=12`
    const [avatarData, setAvatarData] = useState([]);

    async function downloadAvatar() {
        const response = await axios.get(url);
        console.log(response.data.items);
        const responseData = response.data.items.map(({login, avatar_url, id}) => ({login, avatar_url, id}));
        console.log(responseData);
        setAvatarData(responseData);
    }

    useEffect(() => {
        downloadAvatar();
    }, []);
    return (
        <div className="avatarList-wrapper">
            {(avatarData == null) ? "data is loading" : avatarData.map((e) => <Avatar key={e.id} image={e.avatar_url} username={e.login} 
            />)}
        </div>
    )

}

export default AvatarList;