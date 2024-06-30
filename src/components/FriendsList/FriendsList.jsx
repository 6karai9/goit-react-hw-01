import React from 'react';
import FriendListItem from './FriendListItem'
import s from './FriendsList.module.css'

const FriendsList = ({friends}) => (
    <ul className={s.friendsList}>
	{friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
</ul>
)


export default FriendsList;
