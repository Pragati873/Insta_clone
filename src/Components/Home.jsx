import React from 'react';
import Profile from '../img/Profile.png';
import mountain from '../img/mountain.png';
import "../Components/home.css"

export default function Home() {
  return (
    <div className="Home">
      <div className="card">
        <div className="card-header">
        <img src={mountain} alt="" />
          </div>
          <div className="cardpic">
          <img src={Profile} alt="Profile" />
          </div>
          <div className="card-content">
          <span className="material-symbols-outlined">
favorite
</span>
<p>1 like</p>
<p>This is amazing</p>
</div>
          <div className="comment">
          <span className="material-symbols-outlined">
mood
</span>
<input type="text" placeholder="Add a comment" />
<button>post</button>
          </div>
          
        </div>
        
      </div>
    
  );
}
