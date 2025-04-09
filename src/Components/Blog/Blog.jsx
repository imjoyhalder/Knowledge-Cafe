import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark}) => {
    //console.log(blog);
    const {cover,title, author, author_img, reading_time, posted_date,hashtags} = blog
    return (
        <div className='mb-20 '>
            <div>
                <img className='w-full border rounded-3xl' src={cover} alt={`cover picture of the title ${title}`} />
            </div>
            <div className='flex justify-between pt-4 pb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full ' src={author_img} alt={`image of author ${author}`} />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-xl text-green-600' onClick={()=>handleAddToBookmark(blog)}  ><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl pb-4">{title}</h2>
            <p>
                {hashtags.map((hash,idx) => <span key={idx} className='mr-2'><a href="">{hash}</a></span>)}
            </p>
        </div>
    );
};

Blog.prototypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
}

export default Blog;