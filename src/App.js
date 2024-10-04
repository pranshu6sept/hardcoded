import React from 'react';
import { Box, Typography, Chip, Button, Paper } from '@mui/material';

const App = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '24px',
        maxWidth: '800px',
        margin: '20px auto',
        borderRadius: '12px',
      }}
    >
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
        {[
          { label: 'Order date', value: '22nd, June, 2024' },
          { label: 'Order name', value: 'Packaging' },
          { label: 'Deal Owner', value: 'Jan van den Ber' },
          { label: 'Designer', value: 'Jan van den Ber' },
        ].map((item, index) => (
          <Box key={index} width="23%" mb={2}>
            <Typography variant="body2" color="textSecondary">{item.label}</Typography>
            <Typography variant="body1">{item.value}</Typography>
          </Box>
        ))}
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="space-between" mb={2}>
        <Box width="23%">
          <Typography variant="body2" color="textSecondary">Order Revenue</Typography>
          <Typography variant="body1">Existing Customer</Typography>
        </Box>
        <Box width="23%">
          <Typography variant="body2" color="textSecondary">Payment Status</Typography>
          <Chip label="Awaiting Payment" size="small" sx={{ backgroundColor: '#6b6b6b', color: 'white', fontWeight: 'normal', fontSize: '0.75rem' }} />
        </Box>
        <Box width="23%">
          <Typography variant="body2" color="textSecondary">Order Tag</Typography>
          <Typography variant="body1">-</Typography>
        </Box>
        <Box width="23%">
          <Typography variant="body2" color="textSecondary">Payment</Typography>
          <Typography variant="body1">Upfront</Typography>
        </Box>
      </Box>

      <Box mb={3}>
        <Typography variant="body2" color="textSecondary">Order Description</Typography>
        <Typography variant="body1" sx={{ mt: 0.5 }}>
          401, Auto commerce premises, opp. kennedy Bridge, jyoti studio compound, gamdevi, mumbai,
          maharashtra 400007
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ flexWrap: 'nowrap', gap: 2 }}>
  {/* Total Value Card */}
  <Paper 
    elevation={0} 
    sx={{ p: 2, bgcolor: '#f5f5f5', width: '23%', textAlign: 'center' }}
  >
    <Typography variant="body2" color="textSecondary">Total Value</Typography>
    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>€ 2000</Typography>
  </Paper>

  {/* Margin Card */}
  <Paper 
    elevation={0} 
    sx={{ p: 2, bgcolor: '#f5f5f5', width: '23%', textAlign: 'center' }}
  >
    <Typography variant="body2" color="textSecondary">
      Margin <Typography component="span" sx={{ color: 'green' }}>20%</Typography>
    </Typography>
    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>€ 400</Typography>
  </Paper>

  {/* View Source Files Button */}
  <Button
    variant="outlined"
    sx={{
      width: '23%',
      height: '100%',
      justifyContent: 'center',
      textTransform: 'none',
      flexDirection: 'column',
      p: 2,
    }}
  >
    <Typography variant="button">View source files</Typography>
  </Button>

  {/* Add Instructions Button */}
  <Button
    variant="outlined"
    sx={{
      width: '23%',
      height: '100%',
      justifyContent: 'center',
      textTransform: 'none',
      flexDirection: 'column',
      p: 2,
    }}
  >
    <Typography variant="button">Add instructions</Typography>
  </Button>
</Box>

    </Paper>
  );
};

export default App;