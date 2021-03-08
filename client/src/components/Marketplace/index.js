import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router'

import MarketplaceView from './view';
import CreateDrawer from './components/CreateDrawer';

export default function Marketplace({ userId }) {

  const history = useHistory();

  const [items, setItems] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/getItems`)
    .then((response) => {
      console.log("listings", response.data)
      setItems(response.data);
    })
  },[])

  const showItem = (id) => {
    console.log("id", id);
    history.push(`/marketplace/${id}`);
  }

  const onSubmit = () => {
    console.log(userId);
    if(!userId) {
      history.push('/login');
      return;
    }
    console.log("posting");
    axios.post(`http://localhost:3001/api/createItem`, {
      title: title,
      desc: desc,
      price: price,
      userId: userId,
    }).then((response) => {
      if(response.data.affectedRows === 1) {
        axios.get(`http://localhost:3001/api/getItems`)
        .then((response) => {
          console.log(response.data)
          setItems(response.data);
          toggleCreate();
        })
      }
    })
  }

  const toggleCreate = () => {
    console.log(isCreating);
    setIsCreating(!isCreating);
  }

  return (
    <div>
      <MarketplaceView 
        items={items}
        toggleCreate={toggleCreate}
        showItem={showItem}
      />
      {isCreating && (
        <CreateDrawer 
          setTitle={setTitle}
          setDesc={setDesc}
          setPrice={setPrice}
          isCreating={isCreating}
          toggleCreate={toggleCreate}
          onSubmit={onSubmit}
        />
      )}
      
    </div>
  )
}