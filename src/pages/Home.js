import React from 'react'
import Review from '../components/Review'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
const Home = () => {
  return (
    <main>
      Home
      <SearchForm/>
      <CocktailList/>
      <Review />
      <Review />
    </main>
  );
}

export default Home