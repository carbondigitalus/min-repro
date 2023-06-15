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
import { BusinessDTO } from '@/utils/interfaces';

export async function getStaticProps({ params }) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const businessList: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/business/${params.slug}`
  }).catch((error) => {
    console.log('Error Received: /business\n', error.response.status);
  });

  return {
    props: {
      business: businessList.data.data
    }
  };
}

export async function getStaticPaths() {
  // @ts-ignore-next-line eslint-ignore-next-line
  const business: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/business`
  }).catch((error) => {
    console.log('Error Received: /business\n', error.response);
  });

  // Get the paths we want to pre-render based on posts
  const paths = business.data.data.map((item: BusinessDTO) => ({
    params: { slug: item.slug }
  }));

  return { paths, fallback: false };
}

interface PageProps {
  business: BusinessDTO;
}

export default class BusinessSinglePage extends React.Component<PageProps> {
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
          <title>{`${this.props.business.name} | Veteran Database`}</title>
          <meta name='description' content={`${this.props.business.description}`} />
        </Head>
        <Box
          component={'main'}
          className='single-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <section className='hero'>
            <img
              src={this.getCoverImage(this.props.business.coverImage)}
              alt={`${this.props.business.name} Cover Image`}
              className='archive-single-hero-image'
            />
          </section>
          <section className='header-section'>
            <Grid container spacing={2} sx={{ p: 5 }}>
              <Grid item xs={12} className='header-row'>
                <Grid item xs={6} className='header-item'>
                  <img
                    src={this.getLogoImage(this.props.business.logo)}
                    alt={`${this.props.business.name} Logo`}
                    className='logo'
                  />
                </Grid>
                <Grid item xs={6} className='header-item text-center'>
                  <Typography variant='h1'>{this.props.business.name}</Typography>
                  {/* social icons */}
                  <Grid item className='social-list' xs={8} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                    {(() => {
                      if (this.props.business.socialProfiles !== null) {
                        return (
                          <MenuList dense sx={{ pt: 0, pb: 0, display: 'flex', justifyContent: 'flex-end' }}>
                            {/* dribbble */}
                            {(() => {
                              if (
                                this.props.business.socialProfiles.hasOwnProperty('dribbble') &&
                                this.props.business.socialProfiles.dribbble !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.dribbble}
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
                                this.props.business.socialProfiles.hasOwnProperty('facebook') &&
                                this.props.business.socialProfiles.facebook !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.facebook}
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
                                this.props.business.socialProfiles.hasOwnProperty('github') &&
                                this.props.business.socialProfiles.github !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.github}
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
                                this.props.business.socialProfiles.hasOwnProperty('instagram') &&
                                this.props.business.socialProfiles.instagram !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.instagram}
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
                                this.props.business.socialProfiles.hasOwnProperty('linkedin') &&
                                this.props.business.socialProfiles.linkedin !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.linkedin}
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
                                this.props.business.socialProfiles.hasOwnProperty('pinterest') &&
                                this.props.business.socialProfiles.pinterest !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.pinterest}
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
                                this.props.business.socialProfiles.hasOwnProperty('snapchat') &&
                                this.props.business.socialProfiles.snapchat !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.snapchat}
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
                                this.props.business.socialProfiles.hasOwnProperty('tiktok') &&
                                this.props.business.socialProfiles.tiktok !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.tiktok}
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
                                this.props.business.socialProfiles.hasOwnProperty('twitch') &&
                                this.props.business.socialProfiles.twitch !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.twitch}
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
                                this.props.business.socialProfiles.hasOwnProperty('twitter') &&
                                this.props.business.socialProfiles.twitter !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.twitter}
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
                                this.props.business.socialProfiles.hasOwnProperty('youtube') &&
                                this.props.business.socialProfiles.youtube !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.business.socialProfiles.youtube}
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
              <Grid item xs={12} className='header-row text-center'>
                {/* contact info */}
                <Grid item className='contact-list' xs={8} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                  <MenuList dense>
                    {/* address */}
                    {(() => {
                      if (this.props.business.address !== null && this.props.business.googleMapsURL !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a href={this.props.business.googleMapsURL} target='_blank' rel='noreferrer'>
                              <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </p>
                              <p>
                                {this.props.business.address.line1}
                                <br />
                                {this.props.business.address.line2}
                                <br />
                                {this.props.business.address.city}, {this.props.business.address.state}{' '}
                                {this.props.business.address.zip}
                                <br />
                                {this.props.business.address.country}
                              </p>
                            </a>
                          </MenuItem>
                        );
                      }
                      if (this.props.business.address !== null && this.props.business.googleMapsURL == null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <div className='contact-links'>
                              <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </p>
                              <p>
                                <span className='text-capitalize'>{this.props.business.address.line1}</span>
                                <span className='text-capitalize'>{this.props.business.address.line2}</span>
                                <br />
                                <span className='text-capitalize'>{this.props.business.address.city}</span>,{' '}
                                <span className='text-uppercase'>{this.props.business.address.state}</span>{' '}
                                {this.props.business.address.zip}
                                <br />
                                <span className='text-capitalize'>{this.props.business.address.country}</span>
                              </p>
                            </div>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* email */}
                    {(() => {
                      if (this.props.business.email !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a href={`mailto:${this.props.business.email}`} target='_blank' rel='noreferrer'>
                              <p>
                                <FontAwesomeIcon icon={faEnvelope} />
                              </p>
                              <p className='text-lowercase'>{this.props.business.email}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* phone */}
                    {(() => {
                      if (this.props.business.phone !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a href={`tel:${this.props.business.phone}`} target='_blank' rel='noreferrer'>
                              <p>
                                <FontAwesomeIcon icon={faMobileScreenButton} />
                              </p>
                              <p className='text-lowercase'>{this.props.business.phone}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* website */}
                    {(() => {
                      if (this.props.business.websiteURL !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              href={`https://${this.props.business.websiteURL}/?utm_source=veterandb.com&utm_medium=website&utm_campaign=veteran-database-website`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faGlobe} />
                              </p>
                              <p className='text-lowercase'>{this.props.business.websiteURL}</p>
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
                  if (this.props.business.description !== null) {
                    return (
                      <>
                        <p className='main-content'>{this.props.business.description}</p>
                      </>
                    );
                  }
                })()}
              </Grid>
              {/* services */}
              {/* <Grid item xs={12} className='main-item'>
                <h3 className='main-heading'>
                  <FontAwesomeIcon icon={faBellConcierge} /> Services
                </h3>
                {(() => {
                  if (this.props.business.websiteURL !== null) {
                    return this.props.business.services.map((item: OrganizationServices, key) => {
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
