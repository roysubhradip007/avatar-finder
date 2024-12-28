import "./avatar.css"

function Avatar({image, username}) {
    console.log(image, username);

    return (
        <div className="avatar-wrapper">
            <img src={image} alt="" className="image"/>
            <h3>{username}</h3>
        </div>
    )
}

export default Avatar;