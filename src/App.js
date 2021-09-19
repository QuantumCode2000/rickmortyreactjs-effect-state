import './App.css';
import React, { useEffect, useState } from 'react';
import CardCharacter from './components/CardCharacter'


function App() {
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);


  const handleFetchAPI = async () => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const response = await fetch(url);
    const { results } = await response.json();
    setCharacter([...character, ...results]);

    // console.log(result.results);
  }

  useEffect(() => {
    // other code
    handleFetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])


  const handleNewPage = () => {
    setPage(page + 1);
  }

  console.log(character);


  return (
    <React.Fragment>
      <button onClick={handleNewPage}>
        Click!
      </button>
      {
        character.map(i => (
          <CardCharacter name={i.name} img={i.image} key={i.id} />
        ))
      }


    </React.Fragment>
  );
}

export default App;
