// NPM Modules
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, Divider, Grid, Link, MenuItem, MenuList, Typography } from '@mui/material';
import React from 'react';

// Custom Modules
import customTheme from '@/config/mui.theme';
import Image from 'next/image';

interface PageProps {
  child?: any;
}

interface PageState {
  isMobileActive: boolean;
}

export default class Header extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);

    this.state = {
      isMobileActive: false
    };
  }

  private handleClickMobileMenu() {
    console.log('mobile menu icon clicked');
    if (this.state.isMobileActive) {
      return this.setState({ isMobileActive: false });
    }
    return this.setState({ isMobileActive: true });
  }

  render() {
    return (
      <header>
        <Box className='header-top-bar' sx={{ backgroundColor: customTheme.palette.primary.dark, width: '100%' }}>
          <Container sx={{ pt: 2, pb: 1 }}>
            <Grid container spacing={2} className='header-topbar'>
              <Grid item xs={4}>
                <Typography variant='body1' sx={{ fontWeight: '500' }}>
                  <Link href='mailto:hello@veterandb.com' color='inherit' underline='hover'>
                    hello@veterandb.com
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={8} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                <MenuList
                  className='header-nav-top-bar'
                  dense
                  sx={{ pt: 0, pb: 0, display: 'flex', justifyContent: 'flex-end' }}
                >
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='https://app.veterandb.com/login' color='inherit' underline='hover' target='_blank'>
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='https://app.veterandb.com/register' color='inherit' underline='hover' target='_blank'>
                      Register
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='https://roadmap.veterandb.com' color='inherit' underline='hover' target='_blank'>
                      Roadmap
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link
                      href='https://forms.office.com/pages/responsepage.aspx?id=2HI0GalSLEqs4adO-VsnePJuaraJWetIkCKf4FnJyPVUREpWSzNWVDg2OE9MVjJQRTlJN1MxUjFTUy4u'
                      color='inherit'
                      underline='hover'
                      target='_blank'
                    >
                      Veteran Status
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='https://status.veterandb.com' color='inherit' underline='hover' target='_blank'>
                      Server Status
                    </Link>
                  </MenuItem>
                </MenuList>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box component={'div'} sx={{ backgroundColor: customTheme.palette.secondary.main, width: '100%' }}>
          <Container sx={{ pt: 3, pb: 0 }}>
            <Grid container spacing={2} className='header-nav'>
              <Grid item xs={4}>
                <Link href='/' color='inherit' className='logo-link'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE_FILES}/logo-green.png`}
                    alt='Veteran Database Logo'
                    width={250}
                    height={250}
                  />
                </Link>
              </Grid>
              <Grid item xs={8} className='header-nav' sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                <div className='mobile-nav-icon'>
                  <button onClick={() => this.handleClickMobileMenu()}>
                    <MenuIcon className='mobile-nav-icon' />
                  </button>
                </div>
                <MenuList
                  className='menu-list'
                  dense
                  sx={{ pt: 1, pb: 0, display: 'flex', justifyContent: 'flex-end' }}
                >
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='/business' color='inherit' underline='hover'>
                      Business
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='/directory' color='inherit' underline='hover'>
                      Directory
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='/nonprofit' color='inherit' underline='hover'>
                      NonProfit
                    </Link>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                    <Link href='/podcast' color='inherit' underline='hover'>
                      Podcast
                    </Link>
                  </MenuItem>
                </MenuList>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {(() => {
          if (this.state.isMobileActive) {
            return (
              <Box className='mobile-nav-wrapper' sx={{ width: '100%' }}>
                <Container sx={{ pt: 2, pb: 1 }}>
                  <Grid container spacing={2} className='header-topbar'>
                    <div className='mobile-nav-icon-close-wrapper'>
                      <button onClick={() => this.handleClickMobileMenu()}>
                        <CloseIcon className='mobile-nav-icon-close' />
                      </button>
                    </div>
                    <Grid item xs={12} sx={{ textTransform: 'uppercase', fontSize: '2rem' }}>
                      <MenuList dense sx={{ pt: 1, pb: 0, display: 'flex', justifyContent: 'flex-end' }}>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link href='/business' color='inherit' underline='hover'>
                            Business
                          </Link>
                        </MenuItem>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link href='/directory' color='inherit' underline='hover'>
                            Directory
                          </Link>
                        </MenuItem>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link href='/nonprofit' color='inherit' underline='hover'>
                            NonProfit
                          </Link>
                        </MenuItem>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link href='/podcast' color='inherit' underline='hover'>
                            Podcast
                          </Link>
                        </MenuItem>
                        <Divider className='mobile-nav-divider' />
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link
                            href='https://app.veterandb.com/login'
                            color='inherit'
                            underline='hover'
                            target='_blank'
                          >
                            Login
                          </Link>
                        </MenuItem>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link
                            href='https://app.veterandb.com/register'
                            color='inherit'
                            underline='hover'
                            target='_blank'
                          >
                            Register
                          </Link>
                        </MenuItem>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link href='https://roadmap.veterandb.com' color='inherit' underline='hover' target='_blank'>
                            Roadmap
                          </Link>
                        </MenuItem>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link
                            href='https://forms.office.com/pages/responsepage.aspx?id=2HI0GalSLEqs4adO-VsnePJuaraJWetIkCKf4FnJyPVUREpWSzNWVDg2OE9MVjJQRTlJN1MxUjFTUy4u'
                            color='inherit'
                            underline='hover'
                            target='_blank'
                          >
                            Veteran Status
                          </Link>
                        </MenuItem>
                        <MenuItem sx={{ fontWeight: '700', p: 1 }}>
                          <Link href='https://status.veterandb.com' color='inherit' underline='hover' target='_blank'>
                            Server Status
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            );
          }
        })()}
      </header>
    );
  }
}
