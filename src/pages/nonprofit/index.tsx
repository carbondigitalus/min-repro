// NPM Modules
import { Box, Grid, Link, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import React from 'react';

// Custom Modules
import customTheme from '@/config/mui.theme';
import { NonProfitDTO } from '@/utils/interfaces';
import GlobalPageWrapper from '@/components/templates/global.template';

export async function getServerSideProps(context) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const nonprofit: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/nonprofit/`
  }).catch((error) => {
    console.log('Error Received: /nonprofit\n', error.response);
  });

  return {
    props: {
      nonprofitList: nonprofit.data.data
    }
  };
}

interface PageProps {
  nonprofitList: NonProfitDTO[];
}

export default class NonProfitArchivePage extends React.Component<PageProps> {
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
          title='NonProfit Listings | Veteran Database'
          canonical='https://veterandb.com/nonprofit/'
          openGraph={{ url: 'https://veterandb.com/nonprofit/' }}
        />
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: 'Home',
              item: 'https://veterandb.com/'
            },
            {
              position: 2,
              name: 'NonProfit',
              item: 'https://veterandb.com/nonprofit/'
            }
          ]}
        />
        <Box
          component={'main'}
          className='archive-page'
          sx={{ backgroundImage: customTheme.palette.secondary.main, width: '100%' }}
        >
          <section className='archive-hero business-hero'>
            <Grid container className='content-2col' spacing={2} sx={{ p: 5 }}>
              <Grid item xs={8} className='archive-hero-text'>
                <Typography variant='h1'>NonProfit Organizations</Typography>
              </Grid>
            </Grid>
          </section>
          <section className='archive-card-group'>
            <Grid item xs={12} className='archive-card-col text-center'>
              <div className='archive-card-row'>
                {this.props.nonprofitList.map((item: NonProfitDTO, index) => {
                  return (
                    <Grid id={item.id} item xs={4} className='archive-card text-center' key={index}>
                      <Link href={`/nonprofit/${item.slug}`}>
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
