import React from 'react'
import Profile from '../img/Profile.png';
export default function Createpost() {
  const loadFile=(event)=>{
     
      var output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
      }
    };
  
  return (
    <div className="Createpost">
      <div className="post-header">
        <h4> Create New Post</h4>
        <button id="post-btn">Share</button>
      </div>
      <div className="maindiv">
        <img id='output'/>
        <input type="file" accept='image/*' onchange={(event)=>{loadFile(event)}} />
      </div>
      <div className="details">
        <div className="card-header">
        <div className="cardpic">
          <img src={Profile} alt="Profile" />
          </div>
          <h5> hii</h5>
          <textarea type="text" placeholder="write a caption"></textarea>
        </div>
      </div>
    </div>
  )
}
