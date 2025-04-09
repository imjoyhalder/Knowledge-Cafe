
import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    //console.log(bookmarks);
    
    return (
        <div className='md:w-1/3 text-center border-2 bg-gray-400 ml-4 rounded-3xl'>
            <h2 className='text-3xl p-4 border-b'>Bookmarked Blogs: {bookmarks.length}</h2>
            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;