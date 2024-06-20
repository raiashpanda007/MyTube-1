import React from 'react'
import './Comments.css'
function Comments() {
  return (
    <div className="Comment">
        <div className="Comment_User_Logo">
            <img
                src="https://yt3.googleusercontent.com/aXRZf5V9i0SFHyNhdB91pLJlR8DZUZL1FEsUH3JCKeH_jYtR71c3Z_N1uJRLV1FBDuYMQ1roEg=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
            />
        </div>
        <div className="Comment_Data">
          <div className="Comment_User_Name_Date">
              <div className="Comment_User_Name">
                  <h4>Channel Name </h4>
              </div>
              •
              <div className="Comment_User_Date">
                  <p>2 days ago</p>
              </div>
          </div>
          <div className="CommentContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non error vero laudantium iusto pariatur! Inventore quo totam nisi necessitatibus minus rem pariatur, ad et, maiores vero vitae vel placeat corrupti laudantium eius harum mollitia iste assumenda nesciunt laborum officia autem. Ea illo recusandae veniam illum, voluptatibus non fugit repellendus!
          </div>
        </div>
    </div>
  )
}

export default Comments