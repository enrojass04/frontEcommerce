import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className="my-account">
      <div className="profile-picture">
        {/* <img src={user.profilePicture} alt="Profile" /> */}
      </div>
      <div className="profile-details">
        <h2>{user.name_user}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default Profile