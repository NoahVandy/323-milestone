import React, { useState } from 'react';

import Home from './view';

export default function HomePage() {

  const [search, setSearch] = useState('');
  const [timer, setTimer] = useState(null);
  const [items, setItems] = useState([
    {
      title: 'shoe',
      desc: 'desc',
      price: 'price',
      id: '1'
    },
    {
      title: 'shirt',
      desc: 'desc',
      price: 'price',
      id: '1'
    },
    {
      title: 'pants',
      desc: 'desc',
      price: 'price',
      id: '1'
    },
    {
      title: 'hat',
      desc: 'desc',
      price: 'price',
      id: '1'
    },
    {
      title: 'computer',
      desc: 'desc',
      price: 'price',
      id: '1'
    }
  ]);

  const onChange = (event) => {
    setSearch(event.target.value);
    clearTimeout(timer);
    setTimer(setTimeout(() => {
      console.log('waited three seconds')
      const element = document.getElementById("home-marketplace");
      element.scrollIntoView({behavior: "smooth", inline: "nearest", })
      const arr = items.filter((item) => item.title.includes(search))
      setItems(arr);
      console.log(arr);
    }, 3000))
    console.log(search)
  }

  return (
    <Home 
      items={items}
      search={search}
      onChange={onChange}
    />
  )
}