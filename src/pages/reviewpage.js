import React from 'react'
import { Paper, Typography } from '@mui/material'
import { Box} from '@mui/material'
import Sidebar from '../components/sidebar'
import Filterbar from '../components/filterbar'
// import { Button } from "@mui/material"
import { Container } from '@mui/system'
import Stack from '@mui/material/Stack'
import Rating from '@mui/material/Rating'
import LinearProgress from '@mui/material/LinearProgress'
import {  List, ListItem, ListItemAvatar, ListItemText, Card, CardContent, Avatar } from '@mui/material'
import { useContext } from 'react';
import MyContext from '../MyContext';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom';


function ReviewList({ reviews }) {
  return (
    <List sx={{ 
      width: '100%', 
      maxWidth: 1200 }}>
      {reviews.map((review) => (
        // <ListItem key={review.id}>
        <ListItem>
  <ListItemAvatar>
    <Avatar src={review.userImage} alt={review.userName} />
  </ListItemAvatar>
  <ListItemText
    primary={review.userName}
    secondary={
      <>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          {review.at.substring(5, 16)}
        </Typography>
        <br />
        <Typography
          component="span"
          variant="body2"
          color="text.secondary"
        >
          <Card sx={{ width: '100%' }}>
            <CardContent>
              {review.content}
            </CardContent>
          </Card>
        </Typography>
      </>
    }
  />
</ListItem>
      ))}
    </List>
  );
}

export default function Reviewpage(props) {
  
  const [input, setInput] = useState();
  const [app_info, setapp_info] = useState([{}]);
  const [no_of_review, setno_of_review] = useState(0);
  const [rating, setrating] = useState(0.0);
  const [star_breakdown, setstar_breakdown] = useState([0,0,0,0,0]);
  const [star_breakdown_perc, setstar_breakdown_perc] = useState([0,0,0,0,0]);
  const [sentiment_breakdown, setsentiment_breakdown] = useState([0,0,0]);
  const [sentiment_breakdown_perc, setsentiment_breakdown_perc] = useState([0,0,0,0,0]);
  const [reviews, setreviews] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        handleSearch();
    }
  };


  const handleSearch = () => {
      fetch(`/get_app_info?query=${input}`).then(
        res => res.json()
      ).then(
        app_info => {
          
          setapp_info(app_info);
          setno_of_review(app_info.reviews);
          setrating(app_info.score);

          let perc5 = app_info.histogram_percentage[0];
          let perc4 = app_info.histogram_percentage[1];
          let perc3 = app_info.histogram_percentage[2];
          let perc2 = app_info.histogram_percentage[3];
          let perc1 = app_info.histogram_percentage[4];

          let progress5 = perc5 >= 100 ? 100 : perc5;
          let progress4 = perc4 >= 100 ? 100 : perc4;
          let progress3 = perc3 >= 100 ? 100 : perc3;
          let progress2 = perc2 >= 100 ? 100 : perc2;
          let progress1 = perc1 >= 100 ? 100 : perc1;
          
          setstar_breakdown([perc5, perc4, perc3, perc2, perc1])
          setstar_breakdown(app_info.histogram)
          setstar_breakdown_perc([progress5, progress4, progress3, progress2, progress1]);
        
        }
      )

      fetch(`/get_app_reviews?query=${input}`).then(
        res => res.json()
      ).then(
        reviews => {
          setreviews(reviews);

          let percentage = reviews[0];
          console.log(percentage)
          let progressPos = percentage[0] >= 100 ? 100 : percentage[0];
          let progressMix = percentage[1] >= 100 ? 100 : percentage[1];
          let progressNeg = percentage[2] >= 100 ? 100 : percentage[2];

          setsentiment_breakdown_perc([progressPos, progressMix, progressNeg]);
          setsentiment_breakdown(reviews[1]);
          setreviews(reviews.slice(2));
        }
      )
  }

  // console.log(props)

  return (
    <Container>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* --------------Sidebar---------- */}
            <Sidebar />
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
        marginLeft: '20rem',
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

      <Stack direction="column" sx={{
        position: "relative",
        top: "40px",
      }}>
        {/* --------------Summary Cards---------- */}
        <Typography sx={{
          position:"relative",
          left:"5rem",
          top:"1.5rem",
          fontSize:"28px"
        }}>Summary</Typography>
          <Stack direction="row" spacing={8} sx={{
            position: 'relative',
            left: "12rem",
            top: "2rem"
          }}>
            <Stack direction="column" sx={{
              padding: "2px",
            }}>
              <Paper elevation={2} variant="outlined" square sx={{
                width: '177px',
                height: '177px',
                backgroundColor: "#F3F4F5",
                border:"1px solid #D3D8DD",
                boxShadow: "0px 3px 4px #D9DDE0",
                borderRadius: "20px"
              }}>
              <Typography variant='h6' sx={{
                position: "relative",
                textAlign: 'center',
                top: "12px",
                
              }}>Reviews</Typography>
              <Typography variant='h3' sx={{
                position: "relative",
                textAlign: 'center',
                top: "24px",
                
              }}>{no_of_review}</Typography> 
              </Paper>
              
            </Stack>
            
            <Stack direction="column" sx={{
              padding: "2px",
            }}>
              <Paper elevation={2} variant="outlined" square sx={{
                width: '177px',
                height: '177px',
                backgroundColor: "#F3F4F5",
                border:"1px solid #D3D8DD",
                boxShadow: "0px 3px 4px #D9DDE0",
                borderRadius: "20px"
              }}>
                <Typography variant='h6' sx={{
                position: "relative",
                textAlign: 'center',
                top: "18px",
              }}>Average stars</Typography>
              <Rating
              sx={{
                position: "relative",
                top: "32px",
                left:"16px",
              }}
              name="read-only"
              value={rating}
              precision={0.1}
              readOnly
              />
              <Typography variant='h4' sx={{
                position: "relative",
                textAlign: 'center',
                top: "44px",
                
              }}>{rating} Stars</Typography>
              </Paper>

            </Stack>
            <Stack direction="column" sx={{
              padding: "2px",
            }}>
              <Paper elevation={2} variant="outlined" square sx={{
                width: '200px',
                height: '250px',
                backgroundColor: "#F3F4F5",
                border:"1px solid #D3D8DD",
                boxShadow: "0px 3px 4px #D9DDE0",
                borderRadius: "20px"
              }}>
                <Typography variant='h6' sx={{
                position: "relative",
                textAlign: 'center',
                top: "18px",
              }}> Star Breakdown </Typography>
              <Stack direction="column" spacing={1}
              sx={{
                position:"relative",
                left:"8px"
              }}>
                <Stack>
                  <Paper sx={{
                      backgroundColor:"#D3D8DD",
                      position:"relative",
                      width:"90%",
                      top:"36px",
                    }} >
                    <LinearProgress variant="determinate"
                      value = {star_breakdown_perc[0]}
                    />
                  </Paper>
                  <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>5 star</span>
                    <span>{star_breakdown[0]}</span>
                </Typography>
                </Stack>
                <Stack>
                  <Paper sx={{
                      backgroundColor:"#D3D8DD",
                      position:"relative",
                      width:"90%",
                      top:"36px",
                    }} >
                    <LinearProgress variant="determinate"
                    value = {star_breakdown_perc[1]}
                    />
                  </Paper>
                  <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>4 star</span>
                    <span>{star_breakdown[1]}</span>
                </Typography>
                </Stack>
                <Stack>
                  <Paper sx={{
                      backgroundColor:"#D3D8DD",
                      position:"relative",
                      width:"90%",
                      top:"36px",
                    }} >
                    <LinearProgress variant="determinate"
                      value = {star_breakdown_perc[2]}
                    />
                  </Paper>
                  <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>3 star</span>
                    <span>{star_breakdown[2]}</span>
                </Typography>
                </Stack>
                <Stack>
                  <Paper sx={{
                      backgroundColor:"#D3D8DD",
                      position:"relative",
                      width:"90%",
                      top:"36px",
                    }} >
                    <LinearProgress variant="determinate"
                      value = {star_breakdown_perc[3]}
                    />
                  </Paper>
                  <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>2 star</span>
                    <span>{star_breakdown[3]}</span>
                </Typography>
                </Stack>
                <Stack>
                  <Paper sx={{
                      backgroundColor:"#D3D8DD",
                      position:"relative",
                      width:"90%",
                      top:"36px",
                    }} >
                    <LinearProgress variant="determinate"
                      value = {star_breakdown_perc[4]}
                    />
                  </Paper>
                  <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>1 star</span>
                    <span>{star_breakdown[4]}</span>
                </Typography>
                </Stack>
              </Stack>
              </Paper>
            </Stack>
            <Stack direction="column" sx={{
              padding: "2px",
            }}>
              <Paper elevation={2} variant="outlined" square sx={{
                width: '200px',
                height: '250px',
                backgroundColor: "#F3F4F5",
                border:"1px solid #D3D8DD",
                boxShadow: "0px 3px 4px #D9DDE0",
                borderRadius: "20px"
              }}>
                  <Typography variant='h6' sx={{
                position: "relative",
                textAlign: 'center',
                top: "18px",
              }}> Sentiment Breakdown </Typography>
                <Stack direction="column" spacing={1.5} 
                sx={{
                  position:"relative",
                  left:"8px"
                }}>
                  <Stack>
                    <Paper sx={{
                        backgroundColor:"#D3D8DD",
                        position:"relative",
                        width:"90%",
                        top:"36px",
                      }} >
                      <LinearProgress variant="determinate"
                      value = {sentiment_breakdown_perc[0]}
                      />
                    </Paper>
                    <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>Positive</span>
                    <span>{sentiment_breakdown[0]}</span>
                </Typography>
                  </Stack>
                  <Stack>
                    <Paper sx={{
                        backgroundColor:"#D3D8DD",
                        position:"relative",
                        width:"90%",
                        top:"36px",
                      }} >
                      <LinearProgress variant="determinate"
                      value = {sentiment_breakdown_perc[1]}
                      />
                    </Paper>
                    <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>Mixed</span>
                    <span>{sentiment_breakdown[1]}</span>
                </Typography>
                  </Stack>
                  <Stack>
                    <Paper sx={{
                        backgroundColor:"#D3D8DD",
                        position:"relative",
                        width:"90%",
                        top:"36px",
                      }} >
                      <LinearProgress variant="determinate"
                      value = {sentiment_breakdown_perc[2]}
                      />
                    </Paper>
                    <Typography sx={{
                    position:"relative",
                    top:"36px",
                    width : "90%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                    <span>Negative</span>
                    <span>{sentiment_breakdown[2]}</span>
                </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
            
        </Stack>
        <Typography sx={{
          position:"relative",
          left:"5rem",
          top:"1.5rem",
          fontSize:"28px"
        }}>Reviews</Typography>
        {/* --------------Real Reviews---------- */}
        <Stack sx={{
          position:"relative",
          left:"6rem",
          top:"1rem",
          maxHeight: "300px",
          overflow: "auto"
        }}>
          <ReviewList reviews={reviews} />
        </Stack>
    </Stack>
    </Container>
  )
}

//for dynamic list for reviews
// import { useState } from 'react';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Card, CardContent } from '@mui/material';

// function ReviewList() {
//   const [reviews, setReviews] = useState([]);

//   function to add a new review to the list
//   const handleAddReview = () => {
//     setReviews([
//       ...reviews,
//       {
//         id: reviews.length + 1,
//         reviewerName: `Reviewer ${reviews.length + 1}`,
//         reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//       }
//     ]);
//   };

//   return (
//     <div>
//       <button onClick={handleAddReview}>Add Review</button>
//       <List sx={{ width: '100%', maxWidth: 360 }}>
//         {reviews.map((review) => (
//           <ListItem key={review.id}>
//             <ListItemAvatar>
//               <Avatar>{review.reviewerName.charAt(0)}</Avatar>
//             </ListItemAvatar>
//             <ListItemText
//               primary={review.reviewerName}
//               secondary={
//                 <Typography component="span" variant="body2" color="text.secondary">
//                   <Card sx={{ width: '100%' }}>
//                     <CardContent>
//                       {review.reviewText}
//                     </CardContent>
//                   </Card>
//                 </Typography>
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <ReviewList />
//     </div>
//   );
// }
