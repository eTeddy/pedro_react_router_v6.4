import { useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";

export const Cat = () => {
  const [catUrl, setCatUrl] = useState(
    useLoaderData() 
    ? useLoaderData()
    : "/cat/cute"
  );

  const navigation = useNavigation();

  const handleNewCatClick = async () => {
    const res = await fetch("https://cataas.com/cat?json=true");
    const cat = await res.json();
    setCatUrl(cat.url);
  };

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={handleNewCatClick}>New 😺 Cat</button>      
      <img src={`https://cataas.com${catUrl}`} alt="Cat" />      
    </div>
  );
};

export const dataLoader = async () => {
  const res = await fetch("https://cataas.com/cat?json=true");
  const cat = await res.json();

  return cat.url;
};


/*
import { useEffect, useState } from 'react';

export const Cat = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  }, []);

  const getNewFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <button onClick={getNewFact}>New 😺 Fact</button>
      <h1>Did you know?</h1>
      <div className="cat_fact">{fact}</div>      
    </div>
  )
}



import "./Cat.css"

import { useEffect, useState } from 'react';

export const Cat = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  },[]);

  return (
    <div className="fact">
      <h1>Did you know?</h1>      
      <button onClick={() => {setFact(data.fact)}}>More Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
}
*/
