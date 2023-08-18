import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
// import AppBar from '@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
// import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MoodIcon from '@mui/icons-material/Mood';
import ChatIcon from '@mui/icons-material/Chat';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


const drawerWidth = 240;



export default function Sidebar() {


  return (
   
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#08368C',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            color: '#FFFFFF'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
        <ListItem 
            sx={{
              position: 'relative',
              top:"-20px",
            }}
            >
              <ListItemText
              sx={{
                fontFamily: 'IBM Plex Sans',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '2rem',
                // lineHeight: '44px',
              }}>ReviewIt
              </ListItemText>
            </ListItem>
          <ListItem>
            <ListItemButton href="/landingpage">
              <ListItemIcon>
                <HomeIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  fontFamily: 'IBM Plex Sans',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '20px',
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton  href="/reviewpage">
              <ListItemIcon>
                <RateReviewIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
              </ListItemIcon>
              <ListItemText
                primary="Reviews"
                sx={{
                  fontFamily: 'IBM Plex Sans',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '20px',
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton  href="/sentimentpage">
              <ListItemIcon>
                  <MoodIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Sentiment"
                  sx={{
                    fontFamily: 'IBM Plex Sans',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '20px',
                  }}
                />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/phrasepage">
              <ListItemIcon>
                <ChatIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
              </ListItemIcon>
              <ListItemText
                primary="Phrases"
                sx={{
                  fontFamily: 'IBM Plex Sans',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '20px',
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/comparepage">
              <ListItemIcon>
                  <CompareArrowsIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Compare"
                  sx={{
                    fontFamily: 'IBM Plex Sans',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '20px',
                  }}
                />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}

