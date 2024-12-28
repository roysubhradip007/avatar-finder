import "./avatar.css"

function Avatar({image, username}) {
    console.log(image, username);

    return (
        <div>
            <img src={image} alt="" />
            <h3>{username}</h3>
        </div>
    )
}

export default Avatar;