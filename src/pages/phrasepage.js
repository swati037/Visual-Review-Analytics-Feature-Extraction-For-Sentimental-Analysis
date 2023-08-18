import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Filterbar from '../components/filterbar';
import { Box } from '@mui/material';
import { Paper, Typography } from '@mui/material';

export default function Phrasepage() {
  const styles = {
    tableContainer: {
      margin: '1rem auto',
      textAlign: 'center',
      marginLeft: '5cm'
    },
    table: {
      borderCollapse: 'collapse',
      fontSize: '20px',
      tableLayout: 'fixed',
      width: '100%'
    },
    th: {
      alignItems: 'left',
      padding: '1.5rem',
      borderBottom: '1px solid black',
      borderBottomWidth: '1px',
      color: '#5F666F',
      fontFamily: 'IBM Plex Sans',
      fontSize: '32px'
    },
    td: {
      padding: '1.5rem 3rem',
      borderBottom: '1px solid black',
      borderBottomWidth: '0.1px'
    },
    greenLine: {
      flex: '1',
      width: '20%',
      height: '10px',
      backgroundColor: 'green',
      borderRadius: '10px',
      marginRight: '-5px'
    },
    redLine: {
      flex: '1',
      width: '80%',
      height: '10px',
      backgroundColor: 'red',
      borderRadius: '10px',
      marginRight: '-5px'
    },
    fadeLine: {
      position: 'relative'
    },
    fadeLineAfter: {
      content: "''",
      position: 'right',
      bottom: '-1px',
      left: '253',
      width: '100%',
      height: '10px',
      background: 'linear-gradient(to bottom, transparent, black)',
      borderRadius: '10px'
    }

  };

  const [phrases, setphrases] = useState([]);
  
  useEffect(() => {
    fetch(`/get_phrases`).then(
      res => res.json()
    ).then(
      phrases => {
        setphrases(phrases);
        console.log(phrases);
      
      }
    )
  }, [])


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Sidebar />
      <Box sx={{ width: '100%', maxWidth: '1000px' }}>
        <Filterbar />
      </Box>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Phrases</th>
              <th style={styles.th}>Sentiment</th>
              <th style={styles.th}>Score</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((phrase) => (
              <tr key={phrase.id} style={styles.fadeLine}>
                <td style={styles.td}>{phrase.text}</td>
                <td style={styles.td}>{phrase.sentiment}</td>
                <td style={styles.td}>{phrase.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}