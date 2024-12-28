import axios from "axios";
import { useEffect, useState } from "react";


function useAvatarList(user_name) {
    const url = `https://api.github.com/search/users?q=${user_name}&per_page=12`
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
    }, [url]);

    return avatarData;
}

export default useAvatarList;