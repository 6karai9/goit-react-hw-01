import React from 'react';
import s from './Profile.module.css'

const Profile = ({ user }) => (
    <div className={s.wrapper}>
        <div className={s.card}>
        <img className={s.avatar}
          src={user.avatar}
          alt="User avatar" 
        />
        <p className={s.username}>{user.username}</p>
        <p className={s.tag}>@{user.tag}</p>
        <p className={s.location}>{user.location}</p>
    
        <ul className={s.stats}>
        <li className={s.statsItem}>
          <span>Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
    </div>
)

export default Profile;