import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Home from './view';

export default function HomePage() {

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [timer, setTimer] = useState(null);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    async function getItems () {
      setLoading(true);
      await axios.get(`http://localhost:3001/api/getItems`)
      .then((response) => {
        console.log("items from axios", response.data)
        setItems(response.data);
      });
      setLoading(false);
    }
    getItems();
  }, [])

  const onChange = (event) => {
    setSearch(event.target.value);
    clearTimeout(timer);
    setTimer(setTimeout(() => {
      console.log('waited three seconds')
      const element = document.getElementById("home-marketplace");
      element.scrollIntoView({behavior: "smooth", inline: "nearest", })
      const arr = items.filter((item) => item.title.includes(search))
      setFilteredItems(arr);
      console.log(arr);
    }, 1250))
    console.log(search)
  }

  return (
    <Home 
      items={items}
      search={search}
      onChange={onChange}
      loading={loading}
    />
  )
}