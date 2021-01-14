import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import ProfilePage from './view'

export default function Profile() {
  const [user, setUser] = useState();

  const { userId } = useParams();

  useEffect(() => {
    if(userId) {
      axios.get(`http://localhost:3001/api/getUser/${userId}`).then((response) => {
        setUser(response.data[0]);
      }); 
    }
  },[userId])

  const onEdit = (user) => {
    console.log(user)
    axios.post(`http://localhost:3001/api/editUser`, {
      userId: user?.id,
      username: user?.username,
      email: user?.email,
      birtday: user?.birthday,
      gradeLevel: user?.gradeLevel
    }).then((response) => {
      if(response.data.affectedRows === 1) {
        axios.get(`http://localhost:3001/api/getUser/${user?.id}`).then((response) => {
        setUser(response.data[0]);
      }); 
      }
    })
  }

  return (
    <div>
      <ProfilePage 
        user={user}
        onEdit={onEdit}
      />
    </div>
  )
 
}