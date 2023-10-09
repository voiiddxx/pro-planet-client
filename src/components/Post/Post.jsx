import React from 'react'
import "./Post.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faHeart  , faComment} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'

const Post = (curr) => {
    const {title , postimage , likes , comment} = curr;
    const{username , userprofile} = curr.user;
  return (
    <div className="post-main">
        <div className="post-upper">
            <div className="post-upper-left">
            <img src={userprofile}  alt="userimage" />

            <div className="post-upper-left-text">
                <p>{username}</p>
            </div>
            </div>
            <div className="post-upper-right">
        <p>...</p>
            </div>
        </div>

        <div className="post-image">
            <img src={postimage}alt="postimage" />
        </div>

        <div className="post-detail">
            <p>{title}</p>
        </div>

        <div className="posticons">
        <FontAwesomeIcon icon={faHeart} size='lg' color='red' />
        <FontAwesomeIcon icon={faComment} size='lg' color='black' />
        </div>

        <div className="post-impression">
            <p>{likes.length} Likes</p>
            <p>{comment.length} Comments</p>
        </div>
        <div className="post-border">
            
        </div>
    </div>
  )
}

export default Post