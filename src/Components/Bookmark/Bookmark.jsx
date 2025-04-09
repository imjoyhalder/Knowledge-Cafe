import React from 'react';
import PropTypes from 'prop-types';

function Bookmark({bookmark}) {
    //console.log(bookmark);
    const {title} = bookmark
    return (
        <div className='border bg-slate-100 my-3 rounded-lg mx-2 p-2'>
            <h1 className='text-xl'>{title}</h1>
        </div>
        
    );
}

Bookmark.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmark;