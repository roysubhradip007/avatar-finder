import { useEffect, useState } from "react";
import AvatarList from "../AvatarList/AvatarList";
import Search from "../Search/Search";

function GitAvatar(){
    const [searchTerm, setSearchTerm] = useState("suman");

    return (
        <>
            <Search updateSearch={setSearchTerm}/>
            <AvatarList user_name={searchTerm}/>
        </>
    )


}

export default GitAvatar;