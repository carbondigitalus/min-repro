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
  // faBellConcierge,
  // faCity,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, MenuItem, MenuList, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { BreadcrumbJsonLd, LocalBusinessJsonLd, NextSeo } from 'next-seo';
import React from 'react';

// Custom Modules
import GlobalPageWrapper from '@/components/templates/global.template';
import customTheme from '@/config/mui.theme';
import { PodcastDTO } from '@/utils/interfaces';

export async function getStaticProps({ params }) {
  // @ts-ignore-next-line eslint-ignore-next-line
  const podcastList: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/podcast/${params.slug}`
  }).catch((error) => {
    console.log('Error Received: /podcast\n', error.response);
  });

  return {
    props: {
      podcast: podcastList.data.data
    }
  };
}

export async function getStaticPaths() {
  // @ts-ignore-next-line eslint-ignore-next-line
  const podcast: AxiosResponse = await axios({
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_API_URL}/podcast`
  }).catch((error) => {
    console.log('Error Received: /podcast\n', error.response);
  });

  // Get the paths we want to pre-render based on posts
  const paths = podcast.data.data.map((item: PodcastDTO) => ({
    params: { slug: item.slug }
  }));

  return { paths, fallback: false };
}

interface PageProps {
  podcast: PodcastDTO;
}

export default class PodcastSinglePage extends React.Component<PageProps> {
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
          title={`${this.props.podcast.name} | Veteran Database`}
          description={`${this.props.podcast.description}`}
          canonical={`https://veterandb.com/podcast/${this.props.podcast.slug}`}
          openGraph={{ url: `https://veterandb.com/podcast/${this.props.podcast.slug}` }}
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
            },
            {
              position: 3,
              name: `${this.props.podcast.name}`,
              item: `https://veterandb.com/podcast/${this.props.podcast.slug}`
            }
          ]}
        />
        {(() => {
          if (this.props.podcast.address !== null && this.props.podcast.websiteURL !== null) {
            return (
              <LocalBusinessJsonLd
                id={`https://veterandb.com/podcast/${this.props.podcast.slug}`}
                type='LocalBusiness'
                name={`${this.props.podcast.name}`}
                description={`${this.props.podcast.description}`}
                url={`https://veterandb.com/nonprofit/${this.props.podcast.slug}`}
                telephone={`${this.props.podcast.phone}`}
                address={{
                  streetAddress: `${this.props.podcast.address.line1}`,
                  addressLocality: `${this.props.podcast.address.city}`,
                  addressRegion: `${this.props.podcast.address.state}`,
                  postalCode: `${this.props.podcast.address.zip}`,
                  addressCountry: 'US'
                }}
                images={[
                  `https://uploads.veterandb.com/military/${this.props.podcast.coverImage}`,
                  `https://uploads.veterandb.com/military/${this.props.podcast.logo}`
                ]}
                sameAs={[`${this.props.podcast.websiteURL}`]}
                openingHours={[
                  {
                    opens: '00:00',
                    closes: '23:59',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    validFrom: '2019-01-01',
                    validThrough: '2050-12-31'
                  }
                ]}
              />
            );
          }
        })()}
        <Box
          component={'main'}
          className='single-page'
          sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}
        >
          <section className='hero'>
            <img
              src={this.getCoverImage(this.props.podcast.coverImage)}
              alt={`${this.props.podcast.name} Cover Image`}
              className='archive-single-hero-image'
            />
          </section>
          <section className='header-section'>
            <Grid container spacing={2} sx={{ p: 5 }}>
              <Grid item xs={12} className='header-row'>
                <Grid item xs={6} className='header-item'>
                  <img
                    src={this.getLogoImage(this.props.podcast.logo)}
                    alt={`${this.props.podcast.name} Logo`}
                    className='logo'
                  />
                </Grid>
                <Grid item xs={6} className='header-item text-center'>
                  <Typography variant='h1'>{this.props.podcast.name}</Typography>
                  {/* social icons */}
                  <Grid item className='social-list' xs={8} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                    {(() => {
                      if (this.props.podcast.socialProfiles !== null) {
                        return (
                          <MenuList dense sx={{ pt: 0, pb: 0, display: 'flex', justifyContent: 'flex-end' }}>
                            {/* dribbble */}
                            {(() => {
                              if (
                                this.props.podcast.socialProfiles.hasOwnProperty('dribbble') &&
                                this.props.podcast.socialProfiles.dribbble !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.dribbble}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('facebook') &&
                                this.props.podcast.socialProfiles.facebook !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.facebook}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('github') &&
                                this.props.podcast.socialProfiles.github !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.github}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('instagram') &&
                                this.props.podcast.socialProfiles.instagram !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.instagram}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('linkedin') &&
                                this.props.podcast.socialProfiles.linkedin !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.linkedin}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('pinterest') &&
                                this.props.podcast.socialProfiles.pinterest !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.pinterest}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('snapchat') &&
                                this.props.podcast.socialProfiles.snapchat !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.snapchat}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('tiktok') &&
                                this.props.podcast.socialProfiles.tiktok !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.tiktok}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('twitch') &&
                                this.props.podcast.socialProfiles.twitch !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.twitch}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('twitter') &&
                                this.props.podcast.socialProfiles.twitter !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.twitter}
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
                                this.props.podcast.socialProfiles.hasOwnProperty('youtube') &&
                                this.props.podcast.socialProfiles.youtube !== null
                              ) {
                                return (
                                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                                    <a
                                      href={this.props.podcast.socialProfiles.youtube}
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
                      if (this.props.podcast.address !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <div className='contact-links'>
                              <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </p>
                              <p>
                                <span className='text-capitalize'>{this.props.podcast.address.line1}</span>
                                <span className='text-capitalize'>{this.props.podcast.address.line2}</span>
                                <br />
                                <span className='text-capitalize'>{this.props.podcast.address.city}</span>,{' '}
                                <span className='text-uppercase'>{this.props.podcast.address.state}</span>{' '}
                                {this.props.podcast.address.zip}
                                <br />
                                <span className='text-capitalize'>{this.props.podcast.address.country}</span>
                              </p>
                            </div>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* email */}
                    {(() => {
                      if (this.props.podcast.email !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`mailto:${this.props.podcast.email}`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faEnvelope} />
                              </p>
                              <p className='text-lowercase'>{this.props.podcast.email}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* phone */}
                    {(() => {
                      if (this.props.podcast.phone !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`tel:${this.props.podcast.phone}`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faMobileScreenButton} />
                              </p>
                              <p className='text-lowercase'>{this.props.podcast.phone}</p>
                            </a>
                          </MenuItem>
                        );
                      }
                    })()}
                    {/* website */}
                    {(() => {
                      if (this.props.podcast.websiteURL !== null) {
                        return (
                          <MenuItem className='contact-links-wrapper' sx={{ fontWeight: '700', p: 1 }}>
                            <a
                              className='contact-links'
                              href={`https://${this.props.podcast.websiteURL}/?utm_source=veterandb.com&utm_medium=website&utm_campaign=veteran-database-website`}
                              target='_blank'
                              rel='noreferrer'
                            >
                              <p>
                                <FontAwesomeIcon icon={faGlobe} />
                              </p>
                              <p className='text-lowercase'>{this.props.podcast.websiteURL}</p>
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
                  if (this.props.podcast.description !== null) {
                    return (
                      <>
                        <p className='main-content'>{this.props.podcast.description}</p>
                      </>
                    );
                  }
                })()}
              </Grid>
            </Grid>
          </section>
        </Box>
      </GlobalPageWrapper>
    );
  }
}
