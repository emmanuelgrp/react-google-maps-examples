
import * as React from 'react';
import Box from '@mui/material/Box';

function Home () {
    return (
        <>
          <Box component="section" sx={{ p: 2 }}>
               <h3>Home</h3>
               <img
                    srcSet="https://pngimg.com/d/house_PNG63.png 2x"
                    src="https://pngimg.com/d/house_PNG63.png"
                    alt="Home Illustration"
                    loading="lazy"
               />

          </Box>
        </>  
     );
}

export default Home;