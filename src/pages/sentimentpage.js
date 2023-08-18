import React from 'react'
import { Box } from '@mui/material'
// import { Paper } from '@mui/material'
// import { Typography } from '@mui/material'
import Sidebar from '../components/sidebar'
import Filterbar from '../components/filterbar'
// import AddIcon from '@mui/icons-material/Add'
import { Container } from 'rsuite'
import Sentimentgraph from '../components/sentimentgraph'
import Sentimentgauge from '../components/sentimentgauge'

// import ReactDOM from 'react-dom'
// import * as V from 'victory'
// import { VictoryBar } from 'victory'

export default function Sentimentpage() {


  return (
    <Container>
            <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '90%', 
            margin: '1rem auto' }}>
            <Sidebar />
            <Box sx={{ 
                width: '100%', 
                maxWidth: '1000px',
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column' }}>
                <Filterbar />
                {/* SENTIMENT TIMELINE CHART */}
                <Box sx={{ marginTop: '1rem' }}>
                    {/* <Sentimentgraph /> */}
                </Box>
                <Box sx={{ marginTop: '2rem', width: '80%', height: '80%' }}>
                {/* <Sentimentgauge /> */}
                </Box>
            </Box>
            </Box>
        </Container>
  )
}


//  FOR DYNAMIC PURPOSE ACCORDING TO CHANGES MADE IN Sentimentgraph

// import { Box, Container } from '@mui/material';
// import Filterbar from '../components/filterbar'
// import Sidebar from '../components/sidebar'
// import Sentimentgraph from '../components/sentimentgraph'

// export default function Sentimentpage() {
//   return (
//     <Container>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           width: '90%',
//           margin: '1rem auto',
//         }}
//       >
//         <Sidebar />
//         <Box sx={{ width: '120%', maxWidth: '1000px' }}>
//           <Filterbar />
//         </Box>
//         <Box sx={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
//           <Sentimentgraph />
//         </Box>
//       </Box>
//     </Container>
//   );
// }