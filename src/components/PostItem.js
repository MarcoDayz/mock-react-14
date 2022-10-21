const PostItem = ({post, setPostBody, handleClick}) => {

    const getBody = async (e) => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
            const json = await data.json();
            setPostBody(json)
            handleClick()
        } catch (error) {
            console.log(error.message);
        }
    };


    return(
        <div className="listItem" onClick={getBody}>
            <h1>{post.title}</h1>
            <p>{post.id}</p>
        </div>
    )
}

export default PostItem

