import React from 'react'
import Sidebar from '../components/sidebar'
import Filterbar from '../components/filterbar'
import { Box, Typography, Paper } from '@mui/material'
import Rating from '@mui/material/Rating';
import { Container } from 'rsuite'
import { useState, useEffect, TextField} from "react";

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function Comparepage() {

  const [input, setInput] = useState("");
  const [app_info, setapp_info] = useState([{}]);
  const [app_info2, setapp_info2] = useState([{}]);
  // const [app_info2, setapp_info2] = useState([{
  //   "appId": "", "description": "", "genre": "", "histogram": [], "histogram_percentage": [], "icon": "", "installs": "", "ratings": 0, "released": "","reviews": 0, "score": 0, "summary": "", "title": "", "version": ""
  // }])

  useEffect(() => {
    fetch(`/get_app_info`).then(
      res => res.json()
    ).then(
      app_info => {
        setapp_info(app_info);
        console.log(app_info.score);
      
      }
    )
  }, [])

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        handleSearch();
    }
  };

  const handleSearch = () => {

    // Call API to preprocess input  //python api to send
    fetch(`/compare_app?query=${input}`)    //python api to send
      .then((response) => response.json())
      .then((app_info2) => {
        setapp_info2(app_info2);
        console.log(app_info2.score);
    });
  }


  console.log(app_info2);


  return (
    <Container>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Sidebar />
      {/* <Box sx={{ width: '100%', maxWidth: '1000px' }}>
        <Filterbar />
      </Box> */}
      </Box>
      <Box sx={{
        width: '600px',
        height: '54px',
        backgroundColor: '#E6F3FC',
        mixBlendMode: 'darken',
        boxShadow: '0px 4px 4px #D9DDE0',
        borderRadius: '43px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '24px',
        marginLeft: '35rem',
        marginTop: '2rem'
      }}>
        <SearchIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', marginRight: '16px' }} />
        <InputBase
          sx={{ fontFamily: 'IBM Plex Sans', fontSize: '24px' }}
          placeholder="Search app name to compare with"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyDown}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', marginLeft: '15rem'}}>
        <Paper elevation={2} variant="outlined" square sx={{
          width: '550px',
          height: '525px',
          backgroundColor: "#F3F4F5",
          border: "1px solid #D3D8DD",
          boxShadow: "0px 3px 4px #D9DDE0",
          borderRadius: "20px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src= {app_info.icon} alt="Icon" style={{ maxWidth: '30%', maxHeight: '30%' }} />
          <Typography variant="h5" component="h2" gutterBottom>
            {app_info.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="p" sx={{ mr: '1rem' }}>
              Rating: {app_info.score} / 5
            </Typography>
            {/* <Rating name="rating1" value={app_info.score} readOnly precision={0.1}/> */}
          </Box>
          <Typography variant="h6" component="p">
            Genre: {app_info.genre}
          </Typography>
          <Typography variant="h6" component="p">
            Installs: {app_info.installs}
          </Typography>
          <Typography variant="h6" component="p">
            No of Ratings: {app_info.ratings}
          </Typography>
          <Typography variant="h6" component="p">
            No of Reviews: {app_info.reviews}
          </Typography>
          <Typography variant="h6" component="p">
            Released on: {app_info.released}
          </Typography>
          <Typography variant="h6" component="p">
            Version: {app_info.version}
          </Typography>
        </Paper>
        <Box sx={{ mx: '2rem' }} />
        <Paper elevation={2} variant="outlined" square sx={{
          width: '550px',
          height: '525px',
          backgroundColor: "#F3F4F5",
          border: "1px solid #D3D8DD",
          boxShadow: "0px 3px 4px #D9DDE0",
          borderRadius: "20px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src= {app_info2.icon} alt="Icon" style={{ maxWidth: '30%', maxHeight: '30%' }} />
          <Typography variant="h5" component="h2" gutterBottom>
            {app_info2.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="p" sx={{ mr: '1rem' }}>
              Rating: {app_info2.score} / 5
            </Typography>
            {/* <Rating name="rating2" value={app_info2.score} readOnly precision={0.1}/> */}
          </Box>
          <Typography variant="h6" component="p">
            Genre: {app_info2.genre}
          </Typography>
          <Typography variant="h6" component="p">
            Installs: {app_info2.installs}
          </Typography>
          <Typography variant="h6" component="p">
            No of Ratings: {app_info2.ratings}
          </Typography>
          <Typography variant="h6" component="p">
            No of Reviews: {app_info2.reviews}
          </Typography>
          <Typography variant="h6" component="p">
            Released on: {app_info2.released}
          </Typography>
          <Typography variant="h6" component="p">
            Version: {app_info2.version}
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}








// import React from 'react'
// import Sidebar from '../components/sidebar'
// import Filterbar from '../components/filterbar'
// import { Box, Typography } from '@mui/material'


// export default function Comparepage() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <Sidebar />
//       <Box sx={{ width: '100%', maxWidth: '1000px' }}>
//           <Filterbar />
//       </Box>
//     </Box>
    
//   )
// }
