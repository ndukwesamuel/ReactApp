    import React from 'react';
import { Link } from 'react-router-dom';


function PostList({blogs}) {

    // console.log(blogs.id);
  return(
    <div className="blog-list">
        {blogs.map( (blog) => {
            return(
                <div key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}>   <h1>{blog.F_name}</h1>  {blog.id} </Link>
                 </div> 
            )
        } )}
           
  </div>
  );
}

export default PostList;
