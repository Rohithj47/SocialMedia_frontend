import React from 'react';
import './feed.css'
import Share  from '../share/Share';
import Post from '../post/Post';
function Feed(props) {
    return (
        <div className='feed'>
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}
export default Feed;