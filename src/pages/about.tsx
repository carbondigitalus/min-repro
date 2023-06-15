// NPM Modules
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Head from 'next/head';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';

export default class AboutPage extends React.Component {
  render() {
    return (
      <GlobalPageWrapper>
        <Head>
          <title>About | Veteran Database</title>
          <meta name='description' content='Veteran Database @VeteranDB' />
        </Head>
        <Box
          component={'main'}
          className='basic-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <Grid className='content-2col' container spacing={2}>
            <Grid item xs={6} className='image-col-left'>
              <img
                src={`${process.env.NEXT_PUBLIC_STORAGE_FILES}/combat-operations.jpg`}
                alt='About Us and our Military Operations'
              />
            </Grid>
            <Grid item xs={6} className='text-col-right text-center'>
              <Typography variant='h1'>Our Story @VeteranDB</Typography>
              <Typography variant='body1'>
                Jared Ledbetter is the founder of Veteran Database, and is a USMC Veteran. He sought to build a place
                where all things for Veteran Business & Entertainment can have a single home. Thus, VeteranDB was born.
                <br />
                <br />
                Initially, the plan was to start off with an IMDB type of website and grow from there. We had no idea it
                would take off like it did.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
