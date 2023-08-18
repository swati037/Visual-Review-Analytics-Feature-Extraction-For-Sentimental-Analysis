import React from 'react'
import { Paper, Typography } from '@mui/material'
import Sidebar from '../components/sidebar'
// import { Button } from "@mui/material"
import { Container, Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import SearchBar from '../components/searchbar'
import { useState, useEffect } from "react";
import { useContext } from 'react';
import MyContext from '../MyContext';

export default function Landingpage({ input, handleInputChange, handleSearch }) {
  
  const [trend_info, settrend_info] = useState([]);
  const [app1, setapp1] = useState({
    "genre": "Social",
    "icon": "https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg",
    "score": 3.2,
    "title": "Facebook"
  });
  const [app2, setapp2] = useState({
    "genre": "Social",
    "icon": "https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM",
    "score": 3.9,
    "title": "Instagram"
  });
  const [app3, setapp3] = useState({
    "genre": "Communication",
    "icon": "https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo",
    "score": 4.1,
    "title": "Snapchat"
  });
  const [app4, setapp4] = useState({
    "genre": "Entertainment",
    "icon": "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",
    "score": 4.4,
    "title": "Netflix"
  });
  const [app5, setapp5] = useState({
    "genre": "Social",
    "icon": "https://play-lh.googleusercontent.com/OS-MhSWOPtlUZLt0_UP5TI4juSf0XhyHxGfJa6pA-UIYkZ1BB6QHTZwaMEzZDPqYsmk",
    "score": 4.4,
    "title": "TikTok"
  });

  useEffect(() => {
    fetch(`/get_trending_info`).then(
      res => res.json()
    ).then(
      trend_info => {
        settrend_info(trend_info);
        let obj1 = trend_info[0]
        let obj2 = trend_info[1]
        let obj3 = trend_info[2]
        let obj4 = trend_info[3]
        let obj5 = trend_info[4]
        setapp1(obj1)
        setapp2(obj2)
        setapp3(obj3)
        setapp4(obj4)
        setapp5(obj5)
      }
    )
  }, [])
  console.log(app1.icon)

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack direction="column" sx={{ textAlign: 'center' }}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Sidebar/>
          <Box>
            <SearchBar input={input} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
          </Box>
        </Box>
    
        <Stack direction="column" sx={{
          position: "relative",
          top: "2rem",
        }}>
            <Typography sx={{
              position: "relative",
              left: "4rem"
            }}><h1>Top Trending Apps</h1></Typography>
              <Stack direction="row" spacing={2} sx={{
                position: 'relative',
                left: "4rem",
                top: "2rem"
              }}>
                <Stack direction="column" sx={{
                  padding: "2px",
                }}>
                  <Paper elevation={2} variant="outlined"
                  square sx={{
                    width: '177px',
                    height: '177px',
                    backgroundColor: "#F3F4F5",
                    border:"1px solid #D3D8DD",
                    boxShadow: "0px 3px 4px #D9DDE0",
                    borderRadius: "20px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <img src={app1.icon} alt="Icon" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                  </Paper>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app1.title}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}>{app1.genre}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app1.score} Stars</Typography>
                </Stack>
                
                <Stack direction="column" sx={{
                  padding: "2px",
                }}>
                  <Paper elevation={2} variant="outlined"
                  square sx={{
                    width: '177px',
                    height: '177px',
                    backgroundColor: "#F3F4F5",
                    border:"1px solid #D3D8DD",
                    boxShadow: "0px 3px 4px #D9DDE0",
                    borderRadius: "20px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <img src={app2.icon} alt="Icon" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                  </Paper>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app2.title}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}>{app2.genre}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app2.score} Stars</Typography>
                </Stack>
                <Stack direction="column" sx={{
                  padding: "2px",
                }}>
                  <Paper elevation={2} variant="outlined"
                  square sx={{
                    width: '177px',
                    height: '177px',
                    backgroundColor: "#F3F4F5",
                    border:"1px solid #D3D8DD",
                    boxShadow: "0px 3px 4px #D9DDE0",
                    borderRadius: "20px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <img src={app3.icon} alt="Icon" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                  </Paper>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app3.title}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}>{app3.genre}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app3.score} Stars</Typography>
                </Stack>
                <Stack direction="column" sx={{
                  padding: "2px",
                }}>
                  <Paper elevation={2} variant="outlined"
                  square sx={{
                    width: '177px',
                    height: '177px',
                    backgroundColor: "#F3F4F5",
                    border:"1px solid #D3D8DD",
                    boxShadow: "0px 3px 4px #D9DDE0",
                    borderRadius: "20px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <img src={app4.icon} alt="Icon" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                  </Paper>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app4.title}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}>{app4.genre}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app4.score} Stars</Typography>
                </Stack>
                <Stack direction="column" sx={{
                  padding: "2px",
                }}>
                  <Paper elevation={2} variant="outlined"
                  square sx={{
                    width: '177px',
                    height: '177px',
                    backgroundColor: "#F3F4F5",
                    border:"1px solid #D3D8DD",
                    boxShadow: "0px 3px 4px #D9DDE0",
                    borderRadius: "20px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                    <img src={app5.icon} alt="Icon" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                  </Paper>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app5.title}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}>{app5.genre}</Typography>
                  <Typography sx={{
                    position: "relative",
                    top: "8px",
                    left: "8px"
                  }}> {app5.score} Stars</Typography>
                </Stack>
            </Stack>
        </Stack>
      </Stack>
    </Container>
    
  )
}
