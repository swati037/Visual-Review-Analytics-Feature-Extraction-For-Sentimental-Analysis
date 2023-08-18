// import React from 'react';
// import { VictoryPie, VictoryLabel } from 'victory';
// import { Box } from '@mui/material';

// const Sentimentgauge = () => {
//   const data = [
//     { x: 'Positive', y: 60 },
//     { x: 'Mixed', y: 25 },
//     { x: 'Negative', y: 15 },
//   ];

//   const colorScale = ['#57FF57', '#5757FF', '#FF5757'];

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#fff',
//         boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         p: '2%',
//         width: '40%',
//         height: '40%',
//         position: 'relative',
//       }}
//     >
//       <VictoryPie
//         data={data}
//         innerRadius={85}
//         labelRadius={25}
//         colorScale={colorScale}
//         style={{
//           data: {
//             fillOpacity: 0.9,
//             stroke: '#fff',
//             strokeWidth: 2,
//           },
//         }}
//         labelComponent={
//           <VictoryLabel
//             textAnchor="middle"
//             style={{
//               fontSize: 14,
//               fontWeight: 'bold',
//             }}
//             dy={5}
//           />
//         }
//       />
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           textAlign: 'center',
//         }}
//       >
//         <VictoryLabel
//           textAnchor="middle"
//           style={{
//             fontSize: '3vw',
//             fontWeight: 'bold',
//           }}
//           text={['60%']}
//         />
//         <VictoryLabel
//           textAnchor="middle"
//           style={{
//             fontSize: '2vw',
//           }}
//           dy={20}
//           text={['Overall Sentiment']}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Sentimentgauge;


// import React, { useState } from 'react';
// import { VictoryPie, VictoryTooltip } from 'victory';
// import { Box } from '@mui/material';

// const Sentimentgauge = () => {
//   const [activeSlice, setActiveSlice] = useState(null);

//   const data = [
//     { x: 'Positive', y: 60 },
//     { x: 'Mixed', y: 25 },
//     { x: 'Negative', y: 15 },
//   ];

//   const colorScale = ['#57FF57', '#5757FF', '#FF5757'];

//   const handleMouseOver = (event, data) => {
//     setActiveSlice(data);
//   };

//   const handleMouseOut = () => {
//     setActiveSlice(null);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#fff',
//         boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         p: '2%',
//         width: '40%',
//         height: '40%',
//         position: 'relative',
//       }}
//     >
//       <VictoryPie
//         data={data}
//         innerRadius={85}
//         labelRadius={25}
//         colorScale={colorScale}
//         style={{
//           data: {
//             fillOpacity: 0.9,
//             stroke: '#fff',
//             strokeWidth: 2,
//             cursor: 'pointer',
//           },
//         }}
//         labelComponent={
//           <VictoryTooltip
//             pointerLength={0}
//             cornerRadius={3}
//             flyoutStyle={{
//               fill: 'white',
//               stroke: '#ccc',
//               strokeWidth: 1,
//               filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))',
//             }}
//             style={{
//               fontSize: 14,
//               fontWeight: 'bold',
//             }}
//           />
//         }
//         events={[
//           {
//             target: 'data',
//             eventHandlers: {
//               onMouseOver: handleMouseOver,
//               onMouseOut: handleMouseOut,
//             },
//           },
//         ]}
//       />
//       {activeSlice && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             textAlign: 'center',
//           }}
//         >
//           <VictoryTooltip
//             pointerLength={0}
//             cornerRadius={3}
//             flyoutStyle={{
//               fill: 'white',
//               stroke: '#ccc',
//               strokeWidth: 1,
//               filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))',
//             }}
//             style={{
//               fontSize: '2vw',
//             }}
//             text={`${activeSlice.datum.x}: ${activeSlice.datum.y}%`}
//             dx={-10}
//             dy={20}
//           />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Sentimentgauge;


// import React, { useState } from 'react';
// import { VictoryPie, VictoryTooltip } from 'victory';
// import { Box } from '@mui/material';

// const Sentimentgauge = () => {
//   const [activeSlice, setActiveSlice] = useState(null);

//   const data = [
//     { x: 'Positive', y: 60 },
//     { x: 'Mixed', y: 25 },
//     { x: 'Negative', y: 15 },
//   ];

//   const colorScale = ['#57FF57', '#5757FF', '#FF5757'];

//   const handleMouseOver = (event, data) => {
//     setActiveSlice({
//       x: data.datum.x,
//       y: data.datum.y,
//       clientX: event.clientX,
//       clientY: event.clientY,
//     });
//   };

//   const handleMouseOut = () => {
//     setActiveSlice(null);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#fff',
//         boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         p: '2%',
//         width: '40%',
//         height: '40%',
//         position: 'relative',
//       }}
//     >
//       <VictoryPie
//         data={data}
//         innerRadius={85}
//         labelRadius={25}
//         colorScale={colorScale}
//         style={{
//           data: {
//             fillOpacity: 0.9,
//             stroke: '#fff',
//             strokeWidth: 2,
//             cursor: 'pointer',
//           },
//         }}
//         labelComponent={
//           <VictoryTooltip
//             active={false}
//             pointerLength={0}
//             cornerRadius={3}
//             flyoutStyle={{
//               fill: 'white',
//               stroke: '#ccc',
//               strokeWidth: 1,
//               filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))',
//             }}
//             style={{
//               fontSize: 14,
//               fontWeight: 'bold',
//             }}
//           />
//         }
//         events={[
//           {
//             target: 'data',
//             eventHandlers: {
//               onMouseOver: handleMouseOver,
//               onMouseOut: handleMouseOut,
//             },
//           },
//         ]}
//       />
//       {activeSlice && (
//         <VictoryTooltip
//           active={true}
//           pointerLength={0}
//           cornerRadius={3}
//           flyoutStyle={{
//             fill: 'white',
//             stroke: '#ccc',
//             strokeWidth: 1,
//             filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))',
//           }}
//           style={{
//             fontSize: '2vw',
//           }}
//           text={`${activeSlice.x}: ${activeSlice.y}%`}
//           dx={-10}
//           dy={-activeSlice.clientY + 20}
//           x={activeSlice.clientX}
//           y={activeSlice.clientY}
//         />
//       )}
//     </Box>
//   );
// };

// export default Sentimentgauge;



import React, { useState } from 'react';
// import { VictoryPie, VictoryTooltip, VictoryLabel } from "victory";
import { Box, Typography } from '@mui/material';



const Sentimentgauge = () => {
  const [activeSlice, setActiveSlice] = useState(null);

  const data = [
    { x: 'Positive', y: 60 },
    { x: 'Mixed', y: 25 },
    { x: 'Negative', y: 15 },
  ];

  const colorScale = ['#57FF57', '#5757FF', '#FF5757'];

  const handleMouseOver = (event, data) => {
    setActiveSlice({
      x: data.datum.x,
      y: data.datum.y,
      clientX: event.clientX,
      clientY: event.clientY,
    });
  };

  const handleMouseOut = () => {
    setActiveSlice(null);
  };

  const chartWidth = 400;
  const chartHeight = 400;
  const chartRadius = Math.min(chartWidth, chartHeight) / 2;
  const centerX = chartWidth / 2;
  const centerY = chartHeight / 2;

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '2%',
        width: '40%',
        height: '40%',
        position: 'relative',
      }}
    >
      <Typography variant="h6" align="center" sx={{ mb: '1rem' }}>
        Sentiment Breakdown
      </Typography>
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        {/* <VictoryPie
          standalone={false}
          data={data}
          innerRadius={95}
          labelRadius={25}
          colorScale={colorScale}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
              cursor: 'pointer',

            },
          }}
          labelComponent={
            <VictoryTooltip
              active={false}
              pointerLength={0}
              cornerRadius={4}
              flyoutStyle={{
                fill: 'white',
                stroke: '#ccc',
                strokeWidth: 1,
                filter: 'drop-shadow(0px 2px 6px #b5bac0)',
              }}
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'IBM Plex Sans',
                lineHeight: 1.5, // Add space between lines
                padding: 10, // Add padding around text
                textAlign: 'center', // Center text horizontally
              }}
            />
          }
          events={[
            {
              target: 'data',
              eventHandlers: {
                onMouseOver: handleMouseOver,
                onMouseOut: handleMouseOut,
              },
            },
          ]}
          padAngle={4}
        />
        
        {activeSlice && (
          <g>
            <VictoryLabel
              text={`${activeSlice.x}\n${activeSlice.y}%`}
              x={centerX}
              y={centerY }
              textAnchor="middle"
              style={{ 
                  fontSize: 24,
                  fontFamily: 'IBM Plex Sans',
                  lineHeight: 1.5, // Add space between lines
               }}
            />
          </g>
        )} */}
      </svg>
    </Box>
  );
};

export default Sentimentgauge;


