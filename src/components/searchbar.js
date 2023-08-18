import React from 'react'
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';


export default function SearchBar(props) {

  // const [searchInput, setSearchInput] = useState('');
  // const history = useHistory();

  // const handleSearchInput = (event) => {
  //   setSearchInput(event.target.value);
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     history.push(`/reviewpage/?query=${searchInput}`);
  //   }
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.handleSearch();
    }
  };

  return (
    <Box sx={{
      position:"relative",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '24px',
      textAlign: 'center',
      left:"10%"
    }}>
      <Box sx={{
        width: '800px',
        height: '64px',
        backgroundColor: '#E6F3FC',
        mixBlendMode: 'darken',
        boxShadow: '0px 4px 4px #D9DDE0',
        borderRadius: '43px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '24px',
      }}>
        <a href="/reviewpage">
        <SearchIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', marginRight: '16px' }} />
        </a>
        <InputBase
          sx={{ fontFamily: 'IBM Plex Sans', fontSize: '24px' }}
          placeholder="Search..."
          value={props.input}
          onChange={props.handleInputChange}
          onKeyPress={handleKeyDown}
        />
      </Box>
    </Box>
  );
}