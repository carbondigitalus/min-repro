// NPM Modules
import { Box, Grid, Link, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import React from 'react';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';
import { PodcastDTO } from '@/utils/interfaces';

export async function getServerSideProps(context) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const podcast: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/podcast/`
  }).catch((error) => {
    console.log('Error Received: /podcast\n', error.response);
  });

  return {
    props: {
      podcastList: podcast.data.data
    }
  };
}

interface PageProps {
  podcastList: PodcastDTO[];
}

export default class PodcastArchivePage extends React.Component<PageProps> {
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
          title='Podcast Listings | Veteran Database'
          canonical='https://veterandb.com/podcast/'
          openGraph={{ url: 'https://veterandb.com/podcast/' }}
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
              name: 'Podcast',
              item: 'https://veterandb.com/podcast/'
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
                <Typography variant='h1'>Veteran Podcasts</Typography>
              </Grid>
            </Grid>
          </section>
          <section className='archive-card-group'>
            <Grid item xs={12} className='archive-card-col text-center'>
              <div className='archive-card-row'>
                {this.props.podcastList.map((item: PodcastDTO, index) => {
                  return (
                    <Grid id={item.id} item xs={4} className='archive-card text-center' key={index}>
                      <Link href={`/podcast/${item.slug}`}>
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
