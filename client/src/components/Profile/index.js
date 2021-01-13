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

  return (
    <div>
      <ProfilePage 
        user={user}
      />
    </div>
  )
 
}