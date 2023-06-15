// NPM Modules
import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import Head from 'next/head';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';

export default class AdvertisePage extends React.Component {
  render() {
    return (
      <GlobalPageWrapper>
        <Head>
          <title>Advertise | Veteran Database</title>
          <meta name='description' content='Veteran Database @VeteranDB' />
        </Head>
        <Box
          component={'main'}
          className='basic-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <Grid className='content-2col' container spacing={2} sx={{ p: 5 }}>
            <Grid item xs={6} className='image-col-left'>
              <img src={`${process.env.NEXT_PUBLIC_STORAGE_FILES}/guy-on-cliff.png`} alt='Military Guy On Cliff' />
            </Grid>
            <Grid item xs={6} className='text-col-right text-center'>
              <Typography variant='h1'>Advertise @VeteranDB</Typography>
              <Typography variant='body1'>
                For the time being, all advertising requests are routed through our Press department. Please email us
                using the link below to initiate the request.
                <br />
                <br />
                <Link
                  href='mailto:advertising@veterandb.com?subject=VeteranDB - Advertise With Us'
                  sx={{
                    color: customTheme.palette.primary.dark,
                    textDecorationColor: customTheme.palette.primary.dark
                  }}
                >
                  advertising@veterandb.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
