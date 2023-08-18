import React, { useState, useEffect } from "react";
// import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis, VictoryTooltip } from "victory";
import { Typography, Paper } from "@mui/material";
import Box from '@mui/material/Box';



// const Sentimentgraph = ({ startDate, endDate, data }) => {
//     const [chartData, setChartData] = useState([]);
  
//     useEffect(() => {
//       // Filter data based on the given date range
//       const filteredData = data.filter((d) => {
//         const date = new Date(d.date);
//         return date >= startDate && date <= endDate;
//       });
  
//       // Group data by date and sentiment
//       const groupedData = filteredData.reduce((acc, curr) => {
//         const date = curr.date.split("T")[0];
//         const sentiment = curr.sentiment;
//         const count = acc[date]?.[sentiment] || 0;
//         return { ...acc, [date]: { ...acc[date], [sentiment]: count + 1 } };
//       }, {});
  
//       // Convert grouped data to array format for Victory charts
//       const chartData = Object.keys(groupedData).map((date) => {
//         const data = groupedData[date];
//         return {
//           date: date,
//           positive: data.positive || 0,
//           negative: data.negative || 0,
//           mixed: data.mixed || 0,
//         };
//       });
  
//       // Remove insignificant dates with less than 5 total reviews
//       const totalReviews = chartData.reduce(
//         (acc, curr) => acc + curr.positive + curr.negative + curr.mixed,
//         0
//       );
//       const significantChartData = chartData.filter(
//         (d) => (d.positive + d.negative + d.mixed) / totalReviews >= 0.05
//       );
  
//       setChartData(significantChartData);
//     }, [startDate, endDate, data]);
  
//     return (
//       <>
//         <Typography variant="h6" align="center">
//           Sentiment Timeline
//         </Typography>
//         <VictoryChart height={400} width={800}>
//           <VictoryAxis
//             tickFormat={(x) => new Date(x).getDate()}
//             style={{
//               tickLabels: {
//                 fontSize: 10,
//                 angle: 45,
//                 textAnchor: "start",
//                 padding: 10,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             tickFormat={(y) => (y > 0 ? y : "")}
//             style={{
//               tickLabels: {
//                 fontSize: 10,
//               },
//             }}
//           />
//           <VictoryStack colorScale={["green", "red", "gray"]}>
//             <VictoryBar
//               data={chartData}
//               x="date"
//               y="positive"
//               labels={({ datum }) => datum.positive}
//             />
//             <VictoryBar
//               data={chartData}
//               x="date"
//               y="negative"
//               labels={({ datum }) => datum.negative}
//             />
//             <VictoryBar
//               data={chartData}
//               x="date"
//               y="mixed"
//               labels={({ datum }) => datum.mixed}
//             />
//           </VictoryStack>
//         </VictoryChart>
//       </>
//     );
//   };
  
//   export default Sentimentgraph;

const Sentimentgraph = ({ data }) => {
  return (
    <Paper sx={{ p: '1rem', boxShadow: '0px 2px 4px #e2e4e7', borderRadius: '0.5rem' }}>
      <Typography variant="h6" align="center" sx={{ mb: '1rem' }}>
        Sentiment Timeline
      </Typography>
      <Box sx={{ maxWidth: '100%', width: 'auto', margin: '0 auto' }}>
        {/* <VictoryChart height={260} domainPadding={40}>
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 12 },
              axis: { stroke: 'black', strokeWidth: 1 },
            }}
            tickValues={['a', 'b', 'c']}
            label="Date"
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fontSize: 10 },
              axis: { stroke: 'black', strokeWidth: 1 },
            }}
            label="Number of Reviews"
          />
          <VictoryStack colorScale={['#57FF57', '#5757FF', '#FF5757']}>
            <VictoryBar
              data={[
                { x: '2022-01-01', y: 2, label: 'Positive: 2 reviews' },
                { x: '2022-02-01', y: 3, label: 'Positive: 3 reviews' },
                { x: '2022-03-01', y: 5, label: 'Positive: 5 reviews' }
              ]}
              labelComponent={<VictoryTooltip 
                style={{ fontSize: 16, padding: 15 }}
                flyoutStyle={{ width: 200, height: 60 }} />}
            />
            <VictoryBar
              data={[
                { x: '2022-01-01', y: 1, label: 'Mixed: 1 review' },
                { x: '2022-02-01', y: 4, label: 'Mixed: 4 reviews' },
                { x: '2022-03-01', y: 5, label: 'Mixed: 5 reviews' }
              ]}
              labelComponent={<VictoryTooltip  style={{ fontSize: 16, padding: 15 }}
              flyoutStyle={{ width: 200, height: 60 }} />}
            />
            <VictoryBar
              data={[
                { x: '2022-01-01', y: 3, label: 'Negative: 3 reviews' },
                { x: '2022-02-01', y: 2, label: 'Negative: 2 reviews' },
                { x: '2022-03-01', y: 6, label: 'Negative: 6 reviews' }
              ]}
              labelComponent={<VictoryTooltip  style={{ fontSize: 16, padding: 15 }}
              flyoutStyle={{ width: 200, height: 80 }} />}
            />
          </VictoryStack>
        </VictoryChart> */}
      </Box>
    </Paper>
  );
};

export default Sentimentgraph;


// const Sentimentgraph = () => {

//   const data = [
//     { date: "2023-05-01", positive: 10, negative: 3, mixed: 2 },
//     { date: "2023-05-02", positive: 15, negative: 1, mixed: 4 },
//     { date: "2023-05-03", positive: 7, negative: 4, mixed: 3 },
//     { date: "2023-05-04", positive: 18, negative: 0, mixed: 1 },
//     { date: "2023-05-05", positive: 12, negative: 2, mixed: 2 },
//     { date: "2023-05-06", positive: 5, negative: 6, mixed: 1 },
//     { date: "2023-05-07", positive: 9, negative: 3, mixed: 3 }
//   ];

//   return (
//     <div style={{textAlign: 'center', marginTop: '1rem'}}>
//       <VictoryChart width={700} height={400} domainPadding={20}>
//         <VictoryAxis
//           tickCount={7}
//           tickFormat={(x) => `${x.getDate()}/${x.getMonth() + 1}`}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryStack colorScale={['green', 'red', 'orange']}>
//           <VictoryBar
//             data={data}
//             x="date"
//             y="positive"
//           />
//           <VictoryBar
//             data={data}
//             x="date"
//             y="negative"
//           />
//           <VictoryBar
//             data={data}
//             x="date"
//             y="mixed"
//           />
//         </VictoryStack>
//       </VictoryChart>
//     </div>
//   );
// };

// export default Sentimentgraph;

// import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns"
// import { Box } from '@mui/material'

// const SentimentGraph = () => {

//   const [data, setData] = useState([
//     { date: "2023-05-01", positive: 10, negative: 3, mixed: 2 },
//     { date: "2023-05-02", positive: 15, negative: 1, mixed: 4 },
//     { date: "2023-05-03", positive: 7, negative: 4, mixed: 3 },
//     { date: "2023-05-04", positive: 18, negative: 0, mixed: 1 },
//     { date: "2023-05-05", positive: 12, negative: 2, mixed: 2 },
//     { date: "2023-05-06", positive: 5, negative: 6, mixed: 1 },
//     { date: "2023-05-07", positive: 9, negative: 3, mixed: 3 }
//   ]);
//   const [dateRange, setDateRange] = useState({ start: new Date(), end: new Date() });

//   const handleDateRangeChange = (start, end) => {
//     setDateRange({ start, end });
//     // Here you can fetch the data for the given date range and set it to the data state variable
//     // Example code to fetch data:
//     // fetchData(start, end).then((result) => setData(result));
//   };

//   const formatDate = (date) => format(date, "yyyy-MM-dd");

//   const monthStart = startOfMonth(dateRange.start);
//   const monthEnd = endOfMonth(dateRange.end);
//   const dateRangeArray = eachDayOfInterval({ start: monthStart, end: monthEnd }).map(formatDate);

//   const filteredData = data.filter((d) => dateRangeArray.includes(d.date));
//   const significantDates = filteredData.filter((d) => d.positive + d.negative + d.mixed > 1);

//   const xTickValues = significantDates.map((d) => d.date);
//   const xTickFormat = (date) => new Date(date).getDate();

//   return (
//     <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
//       <VictoryChart width={700} height={400} domainPadding={20}>
//         <VictoryAxis tickValues={xTickValues} tickFormat={xTickFormat} />
//         <VictoryAxis dependentAxis />
//         <VictoryStack colorScale={["green", "red", "orange"]}>
//           <VictoryBar data={filteredData} x="date" y="positive" />
//           <VictoryBar data={filteredData} x="date" y="negative" />
//           <VictoryBar data={filteredData} x="date" y="mixed" />
//         </VictoryStack>
//       </VictoryChart>
//     </Box>
//   );
// };

// export default SentimentGraph;


// import { VictoryChart, VictoryAxis, VictoryBar, VictoryStack } from 'victory';

// const Sentimentgraph = () => {
//   return (
//     <VictoryChart
//       height={250}
//       padding={{ top: 10, bottom: 50, left: 50, right: 50 }}
//       domainPadding={40}
//     >
//       <VictoryAxis
//         style={{
//           tickLabels: { fontSize: 10 },
//           axis: { stroke: "black", strokeWidth: 1 },
//         }}
//         tickValues={["a", "b", "c"]}
//       />
//       <VictoryAxis
//         dependentAxis
//         style={{
//           tickLabels: { fontSize: 10 },
//           axis: { stroke: "black", strokeWidth: 1 },
//         }}
//       />
//       <VictoryStack colorScale={["tomato", "orange", "gold"]}>
//         <VictoryBar data={[{ x: "a", y: 2 }, { x: "b", y: 3 }, { x: "c", y: 5 }]} />
//         <VictoryBar data={[{ x: "a", y: 1 }, { x: "b", y: 4 }, { x: "c", y: 5 }]} />
//         <VictoryBar data={[{ x: "a", y: 3 }, { x: "b", y: 2 }, { x: "c", y: 6 }]} />
//       </VictoryStack>
//     </VictoryChart>
//   );
// };

// export default Sentimentgraph;


// const Sentimentgraph = () => {
//   return (
//         <Box
//         sx={{
//           width: '120%',
//           margin: '1rem auto',
//           boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
//           borderRadius: '0.5rem',
//           padding: '1rem',
//         }}
//       >
//         <Typography variant="h6" align="center" sx={{ mb: '1rem' }}>
//           Sentiment Timeline
//         </Typography>
//         <VictoryChart height={260} domainPadding={40}>
//           <VictoryAxis
//             style={{
//               tickLabels: { fontSize: 12 },
//               axis: { stroke: 'black', strokeWidth: 1 },
//             }}
//             tickValues={['a', 'b', 'c']}
//             label="Dates"
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 10 },
//               axis: { stroke: 'black', strokeWidth: 1 },
//             }}
//             label="Sentiment"
//           />
//           <VictoryStack colorScale={['tomato', 'orange', 'gold']}>
//             <VictoryBar data={[{ x: 'a', y: 2 }, { x: 'b', y: 3 }, { x: 'c', y: 5 }]} />
//             <VictoryBar data={[{ x: 'a', y: 1 }, { x: 'b', y: 4 }, { x: 'c', y: 5 }]} />
//             <VictoryBar data={[{ x: 'a', y: 3 }, { x: 'b', y: 2 }, { x: 'c', y: 6 }]} />
//           </VictoryStack>
//         </VictoryChart>
//       </Box>
//   );
// };

// export default Sentimentgraph;


// const Sentimentgraph = ({ data }) => {
//   return (
//     <Paper sx={{ p: '1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', borderRadius: '0.5rem' }}>
//       <Typography variant="h6" align="center" sx={{ mb: '1rem' }}>
//         Sentiment Timeline
//       </Typography>
//       <Box sx={{ maxWidth: '100%', width: 'auto', margin: '0 auto' }}>
//         <VictoryChart height={260} domainPadding={40}>
//           <VictoryAxis
//             style={{
//               tickLabels: { fontSize: 12 },
//               axis: { stroke: 'black', strokeWidth: 1 },
//             }}
//             tickValues={['a', 'b', 'c']}
//             label="Dates"
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 10 },
//               axis: { stroke: 'black', strokeWidth: 1 },
//             }}
//             label="Number of Reviews"
//           />
//           <VictoryStack colorScale={['#57FF57   ', '#5757FF    ', '#FF5757    ']}>
//             <VictoryBar data={[{ x: 'a', y: 2 }, { x: 'b', y: 3 }, { x: 'c', y: 5 }]} />
//             <VictoryBar data={[{ x: 'a', y: 1 }, { x: 'b', y: 4 }, { x: 'c', y: 5 }]} />
//             <VictoryBar data={[{ x: 'a', y: 3 }, { x: 'b', y: 2 }, { x: 'c', y: 6 }]} />
//           </VictoryStack>
//         </VictoryChart>
//       </Box>
//     </Paper>
//   );
// };

// export default Sentimentgraph;


// FOR DYNAMIC PURPOSE

// const Sentimentgraph = ({ data }) => {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         margin: '1rem auto',
//         boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
//         borderRadius: '0.5rem',
//         padding: '1rem',
//       }}
//     >
//       <Typography variant="h6" align="center" sx={{ mb: '1rem' }}>
//         Sentiment Timeline
//       </Typography>
//       <VictoryChart height={260} domainPadding={40}>
//         <VictoryAxis
//           style={{
//             tickLabels: { fontSize: 12 },
//             axis: { stroke: 'black', strokeWidth: 1 },
//           }}
//           tickValues={data.map(d => d.x)}
//           label="Dates"
//         />
//         <VictoryAxis
//           dependentAxis
//           style={{
//             tickLabels: { fontSize: 10 },
//             axis: { stroke: 'black', strokeWidth: 1 },
//           }}
//           label="Sentiment"
//         />
//         <VictoryStack colorScale={['#57FF57', '#5757FF', '#FF5757']}>
//           <VictoryBar
//             data={data.map(d => ({ x: d.x, y: d.positive, label: `${d.positive} Positive` }))}
//             labelComponent={<VictoryTooltip />}
//           />
//           <VictoryBar
//             data={data.map(d => ({ x: d.x, y: d.mixed, label: `${d.mixed} Mixed` }))}
//             labelComponent={<VictoryTooltip />}
//           />
//           <VictoryBar
//             data={data.map(d => ({ x: d.x, y: d.negative, label: `${d.negative} Negative` }))}
//             labelComponent={<VictoryTooltip />}
//           />
//         </VictoryStack>
//       </VictoryChart>
//     </Box>
//   );
// };

// export default Sentimentgraph;