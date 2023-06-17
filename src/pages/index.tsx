// NPM Modules
import { Box, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

// Custom Modules
import customTheme from '@/config/mui.theme';
import GlobalPageWrapper from '@/components/templates/global.template';

export default class HomePage extends React.Component {
  getImage(image: string) {
    if (image === null) {
      return `${process.env.NEXT_PUBLIC_STORAGE_FILES}/logo-green.png`;
    }
    return `${process.env.NEXT_PUBLIC_STORAGE_UPLOADS}/${image}`;
  }

  render() {
    return (
      <GlobalPageWrapper>
        <Head>
          <title>The Last LZ | Veteran Database</title>
          <meta name='description' content='Veteran Database @VeteranDB' />
        </Head>
        <Box component={'main'} sx={{ backgroundImage: customTheme.palette.secondary.main, width: '100%' }}>
          <section className='home-hero'>
            <Grid container className='content-2col' spacing={2} sx={{ p: 5 }}>
              <Grid item xs={8} className='text-col-right' sx={{ mr: 'auto' }}>
                <Typography variant='h1'>Veteran Database</Typography>
                <Typography variant='body1'>
                  The last LZ you&apos;ll ever need.
                  <br />
                  The original idea for VeteranDB was to take the IMDB concept, and apply it to Veteran Business and
                  Entertainment. It became very clear, during our first round of feedback, that this would be so much
                  more.
                </Typography>
              </Grid>
            </Grid>
          </section>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
