import Post from "./Post";

const posts = [
    {
    id:"125",
    username:"Kaush",
    userImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
    img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
    caption:"This is dope",
    },
    {
        id:"123",
        username:"Kaush",
        userImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        caption:"This is dope",
    },
    {
        id:"124",
        username:"Kaush",
        userImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        caption:"This is dope",
    }
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
               <Post 
               key={post.id}
               username={post.username}
               img={post.img}
               caption={post.caption}
               userImg={post.userImg}
               /> 
            ))}
        </div>
    )
}

export default Posts
