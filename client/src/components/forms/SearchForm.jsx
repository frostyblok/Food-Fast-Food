import React, { Component } from 'react';

const SearchForm = () => {
  return ( 
    <form className="search-meal">
      <input type="text" name="search_meal" placeholder="Search Meal" />
      <input type="submit" name="search" value="SEARCH" />
    </form>
   );
}

export default SearchForm;
