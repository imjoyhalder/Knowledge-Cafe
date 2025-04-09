import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3'>
            {   
                
                blogs.map(blog => <Blog key={blog.id} blog={blog} ></Blog>)
            }
            <h1 className='text-xl'>Blogs</h1>
        </div>
    );
};

export default Blogs;