import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions, Cancel} from "@material-ui/icons"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios"

export default function Share() {
  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef()
  const [file, setFile] = useState(null)

  const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost = {
      userId : user._id,
      desc: desc.current.value
    }
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.img = filename
      await axios.post('/upload', data)
                .catch((err) => { console.log(err)}) 
    }
    await axios.post('/post', newPost)
              .then(res => window.location.reload())
              .catch((err) => { console.log(err) }) 
    
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
          <textarea
            placeholder="What's on your mind?"
            className="shareInput"
            ref= {desc}
          />
        </div>
        <hr className="shareHr"/>
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Cancel className="shareCancelImg" onClick={() => {
              setFile(null)
              document.querySelector('form').reset();
            }}/> 
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
                </label >
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}