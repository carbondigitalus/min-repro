// NPM Modules
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PodcastsIcon from '@mui/icons-material/Podcasts';
// import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Container, Grid, Link, MenuItem, MenuList, Typography } from '@mui/material';
import React from 'react';
// Custom Modules
import customTheme from '@/config/mui.theme';
import Image from 'next/image';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <Box
          component={'div'}
          className='footer'
          sx={{ backgroundColor: customTheme.palette.primary.dark, width: '100%' }}
        >
          <Container sx={{ pt: 8, pb: 0 }}>
            <Grid container spacing={2} className='footer-grid'>
              <Grid item xs={4} className='footer-logo-col'>
                <Link href='/' color='inherit' className='logo-link footer-logo-link'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE_FILES}/logo-sand.png`}
                    alt='Veteran Database Logo'
                    width={250}
                    height={250}
                  />
                </Link>
                <br />
                <Typography paragraph={true}>
                  Veteran Database. The single point of reference for Veteran Business &amp; Entertainment.
                  <br />
                  <br />
                  100% Veteran-Owned & Operated.
                </Typography>
              </Grid>
              <Grid item xs={8} className='footer-menu-section' sx={{ fontSize: '2rem' }}>
                <Grid item xs={3} className='veteran-listings-col footer-menu-col' sx={{ fontSize: '2rem' }}>
                  <Typography variant='h2'>Veteran Listings</Typography>
                  <MenuList dense sx={{ pt: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/business' color='inherit' underline='hover'>
                        Business
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/directory' color='inherit' underline='hover'>
                        Directory
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/nonprofit' color='inherit' underline='hover'>
                        NonProfit
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/podcast' color='inherit' underline='hover'>
                        Podcast
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Grid>
                <Grid item xs={3} className='entertainment-col footer-menu-col' sx={{ fontSize: '2rem' }}>
                  <Typography variant='h2'>Entertainment</Typography>
                  <MenuList
                    dense
                    sx={{ pt: 1, pb: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                  >
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Typography variant='body1'>Coming Soon!</Typography>
                    </MenuItem>
                  </MenuList>
                </Grid>
                <Grid item xs={3} className='useful-links-col footer-menu-col' sx={{ fontSize: '2rem' }}>
                  <Typography variant='h2'>Useful Links</Typography>
                  <MenuList dense sx={{ pt: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/blog' color='inherit' underline='hover'>
                        Blog
                      </Link>
                    </MenuItem> */}
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='https://app.veterandb.com/login' color='inherit' underline='hover' target='_blank'>
                        Login
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='https://app.veterandb.com/register' color='inherit' underline='hover' target='_blank'>
                        Register
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='https://roadmap.veterandb.com' color='inherit' underline='hover' target='_blank'>
                        Roadmap
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='https://status.veterandb.com' color='inherit' underline='hover' target='_blank'>
                        Server Status
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='https://support.veterandb.com' color='inherit' underline='hover' target='_blank'>
                        Support
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link
                        href='https://forms.office.com/pages/responsepage.aspx?id=2HI0GalSLEqs4adO-VsnePJuaraJWetIkCKf4FnJyPVUREpWSzNWVDg2OE9MVjJQRTlJN1MxUjFTUy4u'
                        color='inherit'
                        underline='hover'
                        target='_blank'
                      >
                        Veteran Status
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Grid>
                <Grid item xs={3} className='company-links-col footer-menu-col' sx={{ fontSize: '2rem' }}>
                  <Typography variant='h2'>Company</Typography>
                  <MenuList dense sx={{ pt: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/about' color='inherit' underline='hover'>
                        About
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/advertise' color='inherit' underline='hover'>
                        Advertise
                      </Link>
                    </MenuItem>
                    {/* <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/contact' color='inherit' underline='hover'>
                        Contact
                      </Link>
                    </MenuItem> */}
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/press' color='inherit' underline='hover'>
                        Press &amp; Media
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/legal/privacy-policy' color='inherit' underline='hover'>
                        Privacy Policy
                      </Link>
                    </MenuItem>
                    <MenuItem sx={{ fontWeight: '400' }}>
                      <Link href='/legal/terms-conditions' color='inherit' underline='hover'>
                        Terms &amp; Conditions
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          component={'div'}
          className='copyright-row'
          sx={{ backgroundColor: customTheme.palette.primary.dark, width: '100%' }}
        >
          <Container sx={{ pt: 2, pb: 1 }}>
            <Grid
              container
              className='copyright-wrapper'
              spacing={2}
              sx={{ pt: 1, color: customTheme.palette.secondary.main, fontSize: '1.2rem' }}
            >
              <Grid item className='copyright-line' xs={12} sm={6} md={4}>
                <Typography variant='body1' sx={{ fontWeight: '300', fontSize: '14px' }}>
                  Copyright &copy; 2020-{new Date().getFullYear()} &middot; Veteran Database &middot; A&nbsp;
                  <Link
                    href='https://carbondigital.us'
                    color='inherit'
                    underline='hover'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Carbon Digital
                  </Link>
                  &nbsp;Project &middot; All Rights Reserved.
                </Typography>
              </Grid>
              <Grid
                item
                className='social-line'
                xs={12}
                sm={6}
                md={8}
                sx={{ textTransform: 'uppercase', fontSize: '2rem' }}
              >
                <MenuList
                  id='footer-social-list'
                  dense
                  sx={{ pt: 0, pb: 0, display: 'flex', justifyContent: 'flex-end' }}
                >
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link
                      href='https://www.facebook.com/veterandb'
                      color='inherit'
                      underline='hover'
                      target='_blank'
                      rel='noreferred'
                    >
                      <FacebookIcon />
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link
                      href='https://www.instagram.com/veterandatabase/'
                      color='inherit'
                      underline='hover'
                      target='_blank'
                      rel='noreferred'
                    >
                      <InstagramIcon />
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link
                      href='https://twitter.com/VeteranDatabase'
                      color='inherit'
                      underline='hover'
                      target='_blank'
                      rel='noreferred'
                    >
                      <TwitterIcon />
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link
                      href='https://www.youtube.com/@VeteranDB'
                      color='inherit'
                      underline='hover'
                      target='_blank'
                      rel='noreferred'
                    >
                      <YouTubeIcon />
                    </Link>
                  </MenuItem>
                </MenuList>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    );
  }
}
