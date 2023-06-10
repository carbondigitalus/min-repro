// NPM Modules
import { Box, Grid, Link, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { NextSeo } from 'next-seo';
import React from 'react';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';
import { BusinessDTO } from '@/utils/interfaces';

export async function getServerSideProps(context) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const business: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/business/`
  }).catch((error) => {
    console.log('Error Received: /business\n', error.response);
  });

  return {
    props: {
      businessList: business.data.data
    }
  };
}

interface PageProps {
  businessList: BusinessDTO[];
}

export default class BusinessArchivePage extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  getImage(image: string) {
    if (image === null) {
      return `${process.env.NEXT_PUBLIC_STORAGE_FILES}/logo-green.png`;
    }
    return `${process.env.NEXT_PUBLIC_STORAGE_UPLOADS}/${image}`;
  }

  render() {
    return (
      <GlobalPageWrapper>
        <NextSeo
          title='Business Listings | Veteran Database'
          canonical='https://veterandb.com/business/'
          openGraph={{ url: 'https://veterandb.com/business/' }}
        />
        <Box
          component={'main'}
          className='archive-page'
          sx={{ backgroundImage: customTheme.palette.secondary.main, width: '100%' }}
        >
          <section className='archive-hero business-hero'>
            <Grid container className='content-2col' spacing={2} sx={{ p: 5 }}>
              <Grid item xs={6} className='archive-hero-text'>
                <Typography variant='h1'>Veteran Businesses</Typography>
              </Grid>
            </Grid>
          </section>
          <section className='archive-card-group'>
            <Grid item xs={12} className='archive-card-col text-center'>
              <div className='archive-card-row'>
                {this.props.businessList.map((item: BusinessDTO, index) => {
                  return (
                    <Grid id={item.id} item xs={4} className='archive-card text-center' key={index}>
                      <Link href={`/business/${item.slug}`}>
                        <img src={this.getImage(item.logo)} alt={`${item.name} Logo`} />
                        <Typography variant='h4'>{item.name}</Typography>
                      </Link>
                    </Grid>
                  );
                })}
              </div>
            </Grid>
          </section>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
