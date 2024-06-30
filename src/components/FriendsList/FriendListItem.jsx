import React from 'react';
import s from './FriendsList.module.css'

const FriendListItem = ({name,avatar,isOnline}) => (
<li className={s.friendCard}>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    {isOnline ? <p className={s.online}>Online</p> : <p className={s.offline}>Offline</p>}
</li> 
)


export default FriendListItem;