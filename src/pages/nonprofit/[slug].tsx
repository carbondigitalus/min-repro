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
import { NextSeo } from 'next-seo';
import React from 'react';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';
import { NonProfitDTO, OrganizationServices } from '@/utils/interfaces';

export async function getStaticProps({ params }) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const nonprofitList: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/nonprofit/${params.slug}`
  }).catch((error) => {
    console.log('Error Received: /nonprofit\n', error.response);
  });

  return {
    props: {
      nonprofit: nonprofitList.data.data
    }
  };
}

export async function getStaticPaths() {
  // @ts-ignore-next-line eslint-ignore-next-line
  const nonprofit: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/nonprofit`
  }).catch((error) => {
    console.log('Error Received: /nonprofit\n', error.response);
  });

  // Get the paths we want to pre-render based on posts
  const paths = nonprofit.data.data.map((item: NonProfitDTO) => ({
    params: { slug: item.slug }
  }));

  return { paths, fallback: false };
}

interface PageProps {
  nonprofit: NonProfitDTO;
}

export default class NonProfitSinglePage extends React.Component<PageProps> {
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
        <NextSeo
          title={`${this.props.nonprofit.name} | Veteran Database`}
          description={`${this.props.nonprofit.description}`}
          canonical={`https://veterandb.com/nonprofit/${this.props.nonprofit.slug}`}
          openGraph={{ url: `https://veterandb.com/nonprofit/${this.props.nonprofit.slug}` }}
        />
        <Box
          component={'main'}
          className='single-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <section className='hero'>
            <img
              src={this.getCoverImage(this.props.nonprofit.coverImage)}
              alt={`${this.props.nonprofit.name} Cover Image`}
              className='archive-single-hero-image'
            />
          </section>
          <section className='header-section'>
            <Grid container spacing={2} sx={{ p: 5 }}>
              <Grid item xs={12} className='header-row'>
                <Grid item xs={6} className='header-item'>
                  <img
                    src={this.getLogoImage(this.props.nonprofit.logo)}
                    alt={`${this.props.nonprofit.name} Logo`}
                    className='logo'
                  />
                </Grid>
                <Grid item xs={6} className='header-item text-center'>
                  <Typography variant='h1'>{this.props.nonprofit.name}</Typography>
                  {/* social icons */}
                  <Grid item className='social-list' xs={8} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                    {(() => {
                      if (this.props.nonprofit.socialProfiles !== null) {
                        return (
                          <MenuList dense sx={{ pt: 0, pb: 0, display: 'flex', justifyContent: 'flex-end' }}>
                            {/* dribbble */}
                            {(() => {
                              if (
                                this.props.nonprofit.socialProfiles.hasOwnProperty('dribbble') &&
                                this.props.nonprofit.socialProfiles.dribbble !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.dribbble}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('facebook') &&
                                this.props.nonprofit.socialProfiles.facebook !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.facebook}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('github') &&
                                this.props.nonprofit.socialProfiles.github !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.github}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('instagram') &&
                                this.props.nonprofit.socialProfiles.instagram !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.instagram}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('linkedin') &&
                                this.props.nonprofit.socialProfiles.linkedin !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.linkedin}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('pinterest') &&
                                this.props.nonprofit.socialProfiles.pinterest !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.pinterest}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('snapchat') &&
                                this.props.nonprofit.socialProfiles.snapchat !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.snapchat}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('tiktok') &&
                                this.props.nonprofit.socialProfiles.tiktok !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.tiktok}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('twitch') &&
                                this.props.nonprofit.socialProfiles.twitch !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.twitch}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('twitter') &&
                                this.props.nonprofit.socialProfiles.twitter !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.twitter}
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
                                this.props.nonprofit.socialProfiles.hasOwnProperty('youtube') &&
                                this.props.nonprofit.socialProfiles.youtube !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.nonprofit.socialProfiles.youtube}
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
                      if (this.props.nonprofit.address !== null && this.props.nonprofit.googleMapsURL !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={this.props.nonprofit.googleMapsURL}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </p>
                              <p>
                                {this.props.nonprofit.address.line1}
                                <br />
                                {this.props.nonprofit.address.line2}
                                <br />
                                {this.props.nonprofit.address.city}, {this.props.nonprofit.address.state}{' '}
                                {this.props.nonprofit.address.zip}
                                <br />
                                {this.props.nonprofit.address.country}
                              </p>
                            </a>
                          </MenuItem>
                        );
                      }
                      if (this.props.nonprofit.address !== null && this.props.nonprofit.googleMapsURL == null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <div className='contact-links'>
                              <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </p>
                              <p>
                                <span className='text-capitalize'>{this.props.nonprofit.address.line1}</span>
                                <span className='text-capitalize'>{this.props.nonprofit.address.line2}</span>
                                <br />
                                <span className='text-capitalize'>{this.props.nonprofit.address.city}</span>,{' '}
                                <span className='text-uppercase'>{this.props.nonprofit.address.state}</span>{' '}
                                {this.props.nonprofit.address.zip}
                                <br />
                                <span className='text-capitalize'>{this.props.nonprofit.address.country}</span>
                              </p>
                            </div>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* email */}
                    {(() => {
                      if (this.props.nonprofit.email !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`mailto:${this.props.nonprofit.email}`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faEnvelope} />
                              </p>
                              <p className='text-lowercase'>{this.props.nonprofit.email}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* phone */}
                    {(() => {
                      if (this.props.nonprofit.phone !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`tel:${this.props.nonprofit.phone}`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faMobileScreenButton} />
                              </p>
                              <p className='text-lowercase'>{this.props.nonprofit.phone}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* website */}
                    {(() => {
                      if (this.props.nonprofit.websiteURL !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`https://${this.props.nonprofit.websiteURL}/?utm_source=veterandb.com&utm_medium=website&utm_campaign=veteran-database-website`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faGlobe} />
                              </p>
                              <p className='text-lowercase'>{this.props.nonprofit.websiteURL}</p>
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
                  if (this.props.nonprofit.description !== null) {
                    return (
                      <>
                        <p className='main-content'>{this.props.nonprofit.description}</p>
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
                  if (this.props.nonprofit.websiteURL !== null) {
                    return this.props.nonprofit.services.map((item: OrganizationServices, key) => {
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
