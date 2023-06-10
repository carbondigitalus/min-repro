// NPM Modules
import { Box, Grid, Link, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { NextSeo } from 'next-seo';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

// Custom Modules
import customTheme from '@/config/mui.theme';
import { AccountDTO, BusinessDTO, DirectoryDTO, HomePageStatsDTO, NonProfitDTO, PodcastDTO } from '@/utils/interfaces';
import GlobalPageWrapper from '@/components/templates/global.template';

export async function getServerSideProps(context) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const business: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/business/`
  }).catch((error) => {
    console.log('Error Received: /business\n', error.response);
  });

  // @ts-ignore-next-line eslint-ignore-next-line
  const directory: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/directory/`
  }).catch((error) => {
    console.log('Error Received: /directory\n', error.response);
  });

  // @ts-ignore-next-line eslint-ignore-next-line
  const nonprofit: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/nonprofit/`
  }).catch((error) => {
    console.log('Error Received: /nonprofit\n', error.response);
  });

  // @ts-ignore-next-line eslint-ignore-next-line
  const podcast: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/podcast/`
  }).catch((error) => {
    console.log('Error Received: /podcast\n', error.response);
  });

  // @ts-ignore-next-line eslint-ignore-next-line
  const account: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/account/`
  }).catch((error) => {
    console.log('Error Received: /account\n', error.response);
  });

  const dataCounts: HomePageStatsDTO = {
    businessCount: business.data.data.length,
    directoryCount: directory.data.data.length,
    nonprofitCount: nonprofit.data.data.length,
    podcastCount: podcast.data.data.length,
    userCount: account.data.data.length
  };

  // @ts-ignore-next-line eslint-ignore-next-line
  const warriorCouncil: AxiosResponse = await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_API_URL}/account/warrior-council/`
  }).catch((error) => {
    console.log('Error Received:\n', error);
  });

  const businessList = [];
  const directoryList = [];
  const nonprofitList = [];
  const podcastList = [];

  const wcTribeAccount = warriorCouncil.data.data;
  wcTribeAccount.forEach((item: AccountDTO) => {
    if (item.businessList.length > 0) {
      item.businessList.forEach((arrayItem: BusinessDTO) => {
        businessList.push(arrayItem);
        // console.log('business array\n', businessList);
      });
    }
    if (item.directoryList.length > 0) {
      item.directoryList.forEach((arrayItem: DirectoryDTO) => {
        directoryList.push(arrayItem);
      });
    }
    if (item.nonprofitList.length > 0) {
      item.nonprofitList.forEach((arrayItem: NonProfitDTO) => {
        nonprofitList.push(arrayItem);
      });
    }
    if (item.podcastList.length > 0) {
      item.podcastList.forEach((arrayItem: PodcastDTO) => {
        podcastList.push(arrayItem);
      });
    }
  });
  return {
    props: {
      counts: dataCounts,
      warriorCouncilBusiness: businessList,
      warriorCouncilDirectory: directoryList,
      warriorCouncilNonProfit: nonprofitList,
      warriorCouncilPodcast: podcastList
    }
  };
}

interface PageProps {
  counts: HomePageStatsDTO;
  warriorCouncilBusiness: BusinessDTO[];
  warriorCouncilDirectory: DirectoryDTO[];
  warriorCouncilNonProfit: NonProfitDTO[];
  warriorCouncilPodcast: PodcastDTO[];
}

export default class HomePage extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  shuffleArrayResults(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  arrayResultsLimit(array: any[]) {
    // const localArray = this.shuffleArrayResults(array);
    return array.slice(0, 3);
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
        <NextSeo title='The Last LZ | Veteran Database' canonical='https://veterandb.com/' />
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
          <section className='home-stats'>
            <Grid container className='content-2col' spacing={2}>
              <Grid item xs={12} className='home-stats-heading text-col-right text-center' sx={{ mr: 'auto' }}>
                <Typography variant='h2'>By The Numbers</Typography>
              </Grid>
              <Grid container className='home-stats-card-contaner text-center' sx={{ mr: 'auto' }}>
                {/* <Grid item xs={4} className='home-stats-card text-center'>
                  <Typography variant='body1'>0</Typography>
                  <Typography variant='h3'>Articles</Typography>
                </Grid> */}
                <Grid item xs={4} className='home-stats-card text-center'>
                  <Typography variant='body1'>{this.props.counts.businessCount}</Typography>
                  <Typography variant='h3'>Businesses</Typography>
                </Grid>
                <Grid item xs={4} className='home-stats-card text-center'>
                  <Typography variant='body1'>{this.props.counts.directoryCount}</Typography>
                  <Typography variant='h3'>Directories</Typography>
                </Grid>
                <Grid item xs={4} className='home-stats-card text-center'>
                  <Typography variant='body1'>{this.props.counts.nonprofitCount}</Typography>
                  <Typography variant='h3'>NonProfits</Typography>
                </Grid>
                <Grid item xs={4} className='home-stats-card text-center'>
                  <Typography variant='body1'>{this.props.counts.podcastCount}</Typography>
                  <Typography variant='h3'>Podcasts</Typography>
                </Grid>
                <Grid item xs={4} className='home-stats-card text-center'>
                  <Typography variant='body1'>{this.props.counts.userCount}</Typography>
                  <Typography variant='h3'>Users</Typography>
                </Grid>
              </Grid>
            </Grid>
          </section>
          {/* <section className='home-vet-tribe'>
            <Grid container className='content-2col' spacing={2}>
              <Grid item xs={12} className='home-tribe-heading text-center' sx={{ mr: 'auto' }}>
                <Typography variant='h2'>Featured Warrior Council Members</Typography>
                <Typography variant='body1'>
                  The Warrior Council is the Vetpreneur Tribe&apos;s mastermind group.
                  <br />
                  <br />
                  The Vetpreneur Tribe started in 2017 as a Facebook group only as a small group of veteran
                  entrepreneurs that found value in a community of entrepreneurs who shared the military experience in
                  common. Since then our community continues to grow and touch the lives of others across the county,
                  and the world.
                  <br />
                  <br />
                  Below you will find featured content from Warrior Council members.
                </Typography>
              </Grid>
              <Grid container className='home-tribe-card-contaner text-center' sx={{ mr: 'auto' }}>
                <Grid item xs={12} className='home-tribe-card-col text-center'>
                  <Typography variant='h3'>Businesses</Typography>
                  <div className='home-tribe-card-row'>
                    {this.arrayResultsLimit(this.props.warriorCouncilBusiness).map((item: BusinessDTO, index) => {
                      return (
                        <Grid item xs={4} className='home-tribe-card text-center' key={index}>
                          <Link href={item.websiteURL} target='_blank' rel='noreferrer'>
                            <img src={this.getImage(item.logo)} alt={`${item.name} Logo`} />
                            <Typography variant='h4'>{item.name}</Typography>
                          </Link>
                        </Grid>
                      );
                    })}
                  </div>
                </Grid>
                <Grid item xs={12} className='home-tribe-card-col text-center'>
                  <Typography variant='h3'>Directories</Typography>
                  <div className='home-tribe-card-row'>
                    {this.arrayResultsLimit(this.props.warriorCouncilDirectory).map((item: DirectoryDTO, index) => {
                      return (
                        <Grid item xs={4} className='home-tribe-card text-center' key={index}>
                          <Link href={item.websiteURL} target='_blank' rel='noreferrer'>
                            <img src={this.getImage(item.logo)} alt={`${item.name} Logo`} />
                            <Typography variant='h4'>{item.name}</Typography>
                          </Link>
                        </Grid>
                      );
                    })}
                  </div>
                </Grid>
                <Grid item xs={12} className='home-tribe-card-col text-center'>
                  <Typography variant='h3'>NonProfits</Typography>
                  <div className='home-tribe-card-row'>
                    {this.arrayResultsLimit(this.props.warriorCouncilNonProfit).map((item: NonProfitDTO, index) => {
                      return (
                        <Grid item xs={4} className='home-tribe-card text-center' key={index}>
                          <Link href={item.websiteURL} target='_blank' rel='noreferrer'>
                            <img src={this.getImage(item.logo)} alt={`${item.name} Logo`} />
                            <Typography variant='h4'>{item.name}</Typography>
                          </Link>
                        </Grid>
                      );
                    })}
                  </div>
                </Grid>
                <Grid item xs={12} className='home-tribe-card-col text-center'>
                  <Typography variant='h3'>Podcasts</Typography>
                  <div className='home-tribe-card-row'>
                    {this.arrayResultsLimit(this.props.warriorCouncilPodcast).map((item: PodcastDTO, index) => {
                      return (
                        <Grid item xs={4} className='home-tribe-card text-center' key={index}>
                          <Link href={item.websiteURL} target='_blank' rel='noreferrer'>
                            <img src={this.getImage(item.logo)} alt={`${item.name} Logo`} />
                            <Typography variant='h4'>{item.name}</Typography>
                          </Link>
                        </Grid>
                      );
                    })}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </section> */}
        </Box>
      </GlobalPageWrapper>
    );
  }
}
