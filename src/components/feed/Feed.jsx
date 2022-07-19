import React, { useEffect,useState } from 'react';
import './feed.css'
import Share  from '../share/Share';
import Post from '../post/Post';
import axios from 'axios'
function Feed({username}) {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async() =>{
            console.log('post/profile/' + username)
            const res = username 
            ? await axios.get('/post/profile/' + username)
            :await axios.get('post/timeline/62d5562b2a1623e850083958')
            setPosts(res.data)
        }
        fetchPosts()
    }, [username])
    return (
        <div className='feed'>
            <Share />
            {posts.map((p) => (
                <Post key= {p._id} post = {p} />
            ))}
        </div>
    );
}
export default Feed;