import PropTypes from 'prop-types';
import css from "./FriendList.module.css"
export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                return (<FriendListItem friend={friend} key={friend.id} />)
            })}
</ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.array
}

const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
    return (
        <li className={css.item} key={id}>
            <span className={css.status} style={{backgroundColor:isOnline ? "green" : "red"}} >{isOnline} </span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name} </p>
</li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string,
    isOnline: PropTypes.bool
}
