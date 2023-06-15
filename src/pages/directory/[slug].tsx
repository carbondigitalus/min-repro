// NPM Modules
import {
  faDribbble,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSnapchat,
  faTiktok,
  faTwitch,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faCircleInfo,
  faBellConcierge,
  // faCity,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, MenuItem, MenuList, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import Head from 'next/head';
import React from 'react';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';
import { DirectoryDTO } from '@/utils/interfaces';

export async function getStaticProps({ params }) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const directoryList: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/directory/${params.slug}`
  }).catch((error) => {
    console.log('Error Received: /directory\n', error.response.status);
  });

  return {
    props: {
      directory: directoryList.data.data
    }
  };
}

export async function getStaticPaths() {
  // @ts-ignore-next-line eslint-ignore-next-line
  const directory: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/directory`
  }).catch((error) => {
    console.log('Error Received: /directory\n', error.response);
  });

  // Get the paths we want to pre-render based on posts
  const paths = directory.data.data.map((item: DirectoryDTO) => ({
    params: { slug: item.slug }
  }));

  return { paths, fallback: false };
}

interface PageProps {
  directory: DirectoryDTO;
}

export default class DirectorySinglePage extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  getCoverImage(image: string) {
    if (image === null) {
      return `${process.env.NEXT_PUBLIC_STORAGE_FILES}/default-cover.jpg`;
    }
    return `${process.env.NEXT_PUBLIC_STORAGE_UPLOADS}/${image}`;
  }

  getLogoImage(image: string) {
    if (image === null) {
      return `${process.env.NEXT_PUBLIC_STORAGE_FILES}/logo-green.png`;
    }
    return `${process.env.NEXT_PUBLIC_STORAGE_UPLOADS}/${image}`;
  }

  render() {
    return (
      <GlobalPageWrapper>
        <Head>
          <title>{`${this.props.directory.name} | Veteran Database`}</title>
          <meta name='description' content={`${this.props.directory.description}`} />
        </Head>
        <Box
          component={'main'}
          className='single-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <section className='hero'>
            <img
              src={this.getCoverImage(this.props.directory.coverImage)}
              alt={`${this.props.directory.name} Cover Image`}
              className='archive-single-hero-image'
            />
          </section>
          <section className='header-section'>
            <Grid container spacing={2} sx={{ p: 5 }}>
              <Grid item xs={12} className='header-row'>
                <Grid item xs={6} className='header-item'>
                  <img
                    src={this.getLogoImage(this.props.directory.logo)}
                    alt={`${this.props.directory.name} Logo`}
                    className='logo'
                  />
                </Grid>
                <Grid item xs={6} className='header-item text-center'>
                  <Typography variant='h1'>{this.props.directory.name}</Typography>
                  {/* social icons */}
                  <Grid item className='social-list' xs={8} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                    {(() => {
                      if (this.props.directory.socialProfiles !== null) {
                        return (
                          <MenuList dense sx={{ pt: 0, pb: 0, display: 'flex', justifyContent: 'flex-end' }}>
                            {/* dribbble */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('dribbble') &&
                                this.props.directory.socialProfiles.dribbble !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.dribbble}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faDribbble} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* facebook icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('facebook') &&
                                this.props.directory.socialProfiles.facebook !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.facebook}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* github icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('github') &&
                                this.props.directory.socialProfiles.github !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.github}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* instagram icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('instagram') &&
                                this.props.directory.socialProfiles.instagram !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.instagram}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* linkedin icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('linkedin') &&
                                this.props.directory.socialProfiles.linkedin !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.linkedin}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* pinterest icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('pinterest') &&
                                this.props.directory.socialProfiles.pinterest !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.pinterest}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faPinterest} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* snapchat icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('snapchat') &&
                                this.props.directory.socialProfiles.snapchat !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.snapchat}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faSnapchat} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* tiktok icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('tiktok') &&
                                this.props.directory.socialProfiles.tiktok !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.tiktok}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faTiktok} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* twitch icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('twitch') &&
                                this.props.directory.socialProfiles.twitch !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.twitch}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faTwitch} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* twitter icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('twitter') &&
                                this.props.directory.socialProfiles.twitter !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.twitter}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                            {/* youtube icon */}
                            {(() => {
                              if (
                                this.props.directory.socialProfiles.hasOwnProperty('youtube') &&
                                this.props.directory.socialProfiles.youtube !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.directory.socialProfiles.youtube}
                                      className='social-links'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                  </MenuItem>
                                );
                              }
                            })()}
                          </MenuList>
                        );
                      }
                    })()}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className='header-item text-center'>
                {/* contact info */}
                <Grid item className='contact-list' xs={8} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                  <MenuList dense>
                    {/* address */}
                    {(() => {
                      if (this.props.directory.address !== null && this.props.directory.googleMapsURL !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={this.props.directory.googleMapsURL}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </p>
                              <p>
                                {this.props.directory.address.line1}
                                <br />
                                {this.props.directory.address.line2}
                                <br />
                                {this.props.directory.address.city}, {this.props.directory.address.state}{' '}
                                {this.props.directory.address.zip}
                                <br />
                                {this.props.directory.address.country}
                              </p>
                            </a>
                          </MenuItem>
                        );
                      }
                      if (this.props.directory.address !== null && this.props.directory.googleMapsURL == null) {
                        return (
                          <MenuItem className='contact-links' sx={{ fontWeight: '700', p: 1 }}>
                            <div className='content-single-contact-links'>
                              <p className='contact-links'>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </p>
                              <p className='contact-links'>
                                <span className='text-capitalize'>{this.props.directory.address.line1}</span>
                                <span className='text-capitalize'>{this.props.directory.address.line2}</span>
                                <br />
                                <span className='text-capitalize'>{this.props.directory.address.city}</span>,{' '}
                                <span className='text-uppercase'>{this.props.directory.address.state}</span>{' '}
                                {this.props.directory.address.zip}
                                <br />
                                <span className='text-capitalize'>{this.props.directory.address.country}</span>
                              </p>
                            </div>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* email */}
                    {(() => {
                      if (this.props.directory.email !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`mailto:${this.props.directory.email}`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faEnvelope} />
                              </p>
                              <p className='text-lowercase'>{this.props.directory.email}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* phone */}
                    {(() => {
                      if (this.props.directory.phone !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`tel:${this.props.directory.phone}`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faMobileScreenButton} />
                              </p>
                              <p className='text-lowercase'>{this.props.directory.phone}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* website */}
                    {(() => {
                      if (this.props.directory.websiteURL !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`https://${this.props.directory.websiteURL}/?utm_source=veterandb.com&utm_medium=website&utm_campaign=veteran-database-website`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faGlobe} />
                              </p>
                              <p className='text-lowercase'>{this.props.directory.websiteURL}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                  </MenuList>
                </Grid>
              </Grid>
            </Grid>
          </section>
          <section className='main-section'>
            <Grid container spacing={2} sx={{ p: 5 }}>
              {/* description */}
              <Grid item xs={12} className='main-item'>
                <h3 className='main-heading'>
                  <FontAwesomeIcon icon={faCircleInfo} /> Description
                </h3>
                {(() => {
                  if (this.props.directory.description !== null) {
                    return (
                      <>
                        <p className='main-content'>{this.props.directory.description}</p>
                      </>
                    );
                  }
                })()}
              </Grid>
              {/* services */}
              {/* <Grid item xs={12} className='content-single-main-item'>
                <h3 className='main-heading'>
                  <FontAwesomeIcon icon={faBellConcierge} /> Services
                </h3>
                {(() => {
                  if (this.props.directory.websiteURL !== null) {
                    return this.props.directory.services.map((item: OrganizationServices, key) => {
                      return (
                        <div key={key} className='main-content'>
                          <h4>{item.name}</h4>
                          <p>Price: {item.price}</p>
                          <br />
                          <p>Description: {item.description}</p>
                          <br />
                          <p>
                            Visit Service Page:{' '}
                            <a
                              href={`${item.pageURL}?utm_source=veterandb.com&utm_medium=website&utm_campaign=veteran-database-website`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {item.pageURL}
                            </a>
                          </p>
                        </div>
                      );
                    });
                  }
                })()}
              </Grid> */}
            </Grid>
          </section>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
