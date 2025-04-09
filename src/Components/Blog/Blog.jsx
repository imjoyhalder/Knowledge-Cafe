import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    const {id,cover,title,author,author_img,reading_time} = blog
    return (
        <div>
            {/* <img src={cover} alt="" />
            <div>
                <img src={author_img} alt="" />
            </div> */}
        </div>
    );
};

Blog.prototypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;