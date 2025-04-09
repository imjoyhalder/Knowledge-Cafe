
import React from 'react';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    //console.log(bookmarks);

    return (
        <div className='md:w-1/3 text-center border-2 bg-white-50 ml-4 rounded-3xl'>
            <div className='p-4 border bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mx-2 my-2'>
                <h3 className="text-xl text-white">Reading Time: {readingTime}</h3>
            </div>
            <div className='p-4 border bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mx-2 my-2'>
                <h2 className='text-2xl text-white'>Bookmarked Blogs {bookmarks.length}</h2>
            </div>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

// Bookmarks.propTypes = {
//     bookmarks: PropTypes.array,
//     readingTime: PropTypes.number,
// }

export default Bookmarks;