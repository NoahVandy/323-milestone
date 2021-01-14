import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import ItemPage from './View.js'

export default function Item() {
  const [item, setItem] = useState();

  const { itemId } = useParams();

  useEffect(() => {
    if(itemId) {
      axios.get(`http://localhost:3001/api/getItem/${itemId}`).then((response) => {
        setItem(response.data[0]);
      }); 
    }
  },[itemId])

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
        setItem(response.data[0]);
      }); 
      }
    })
  }

  return (
    <div>
      <ItemPage
        item={item}
        onEdit={onEdit}
      />
    </div>
  )
 
}