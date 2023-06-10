// NPM Modules
import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { NextSeo } from 'next-seo';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';

export default class PressPage extends React.Component {
  render() {
    return (
      <GlobalPageWrapper>
        <NextSeo
          title='Press | Veteran Database'
          canonical='https://veterandb.com/press/'
          openGraph={{ url: 'https://veterandb.com/press/' }}
        />
        <Box
          component={'main'}
          className='basic-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <Grid className='content-2col' container spacing={2} sx={{ p: 5 }}>
            <Grid item xs={6} className='image-col-left'>
              <img
                src={`${process.env.NEXT_PUBLIC_STORAGE_FILES}/special-forces-soldier.jpg`}
                alt='Special Forces Soldier'
              />
            </Grid>
            <Grid item xs={6} className='text-col-right text-center'>
              <Typography variant='h1'>Press @VeteranDB</Typography>
              <Typography variant='body1'>
                All press & media responses, or appearances, are routed through our Press department. You can reach us
                via email by clicking on the link below.
                <br />
                <br />
                <Link
                  href='mailto:press@veterandb.com?subject=VeteranDB - Press'
                  sx={{
                    color: customTheme.palette.primary.dark,
                    textDecorationColor: customTheme.palette.primary.dark
                  }}
                >
                  press@veterandb.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
