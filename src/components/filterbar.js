import React, {useState} from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Sidebar from "./sidebar";
import { Stack } from 'rsuite';
import DateRangePicker from 'rsuite/DateRangePicker';
import { SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Typography } from "@mui/material";





// ---------------------------------------Date
const styles = { 
    position:"relative",
    width: 240, 
    display: "block", 
    marginBottom: 6,
    
 };

export default function Filterbar() {
    
    //select picker for SENTIMENT options
    const [sentiment, setSentiment] = useState('');

    const handleSentimentChange = (value) => {
        setSentiment(value);
    };
    
    // selectpicker for STAR RATING options

    const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const getStars = (num) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        stars.push(<StarIcon key={i}
            sx={{
                color:"#f1c40f",
                borderColor:"#e2e4e7"
            }} />);
      } else {
        stars.push(<StarBorderIcon sx={{
            color:"#f1c40f",
            borderColor:"#e2e4e7"}} key={i} />);
      }
    }
    return stars;
  };


    return (
        
        <Box sx={{ 
            display: 'flex',
            // flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            position:"relative",
            width:"100%",
            marginTop: "24px",
            marginBottom: "24px",
            // left: "0%",
            

        }}>
            <Sidebar/>
        <AppBar position="relative" sx={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:"2px",
            backgroundColor:"#5e96fe",
        }}>
          <Toolbar sx={{
            position:"relative",
            left:"0%"
          }} >
                <Stack spacing={24}>

                    {/* Filter title */}

                    <Typography sx={{
                        position:"relative",
                        fontFamily: 'IBM Plex Sans',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '28px',
                        left:"-64%"
                        }}>
                            Filters
                    </Typography>

                    {/* DATE RANGE */}
                    <DateRangePicker size="md" placeholder="Select Date Range" style={styles} />

                    {/* STAR RATING SELECTION */}
                    <SelectPicker data={[
                        { label: getStars(1), value: 1 },
                        { label: getStars(2), value: 2 },
                        { label: getStars(3), value: 3 },
                        { label: getStars(4), value: 4 },
                        { label: getStars(5), value: 5 },
                    ]}
                    searchable={false}
                    appearance="subtle"
                    placeholder="Select rating"
                    onChange={handleRatingChange}
                    value={rating}
                    style={{
                    width: 200,
                    color: '#ffffff',
                    backgroundColor:"#E6F3FC",
                    '&:hover':"#e2e4e7",
                    '&:after':"#E6F3FC",
                    '&:active':"#E6F3FC",

                    }} />

                    {/* SENTIMENT SELECTION */}
                    <SelectPicker
                        data={[
                            { label: 'Positive', value: 'positive' },              
                            { label: 'Negative', value: 'negative' }, 
                            { label: 'Mixed', value: 'mixed' },       
                        ]}
                        style={{
                            width: 150,
                            color: '#ffffff',
                            backgroundColor: '#E6F3FC',
                            '&:hover': '#e2e4e7',
                            '&:after': '#E6F3FC',
                            '&:active': '#E6F3FC',
                        }}
                        appearance="subtle"
                        placeholder="Sentiment"
                        cleanable={true}
                        searchable={false}
                        value={sentiment}
                        onChange={handleSentimentChange}
                    />
                </Stack>

          </Toolbar>
        </AppBar>
      </Box>
    );
}

