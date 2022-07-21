import React, { useContext, useEffect,useState } from 'react';
import './feed.css'
import Share  from '../share/Share';
import Post from '../post/Post';
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';


function Feed({username}) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(()=>{
        const fetchPosts = async() =>{
            const res = username 
            ? await axios.get('/post/profile/' + username)
            :await axios.get(`post/timeline/${user._id}` )
            setPosts(res.data)
        }
        fetchPosts()
    }, [username, user._id])
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