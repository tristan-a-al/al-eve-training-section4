import React from 'react'


//Q6.2.4

interface PostsProps{
    userId:number|null,
    posts:any[]
}


function FilteredPosts(props:PostsProps) {

    //Q6.2.5

    let filteredPosts = props.posts.filter((post)=> post.userId == props.userId)

  return (
    <div>
        {filteredPosts.map((post:any)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default FilteredPosts
