import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram-icon.svg';
import { ReactComponent as GooglePlusIcon } from 'assets/icons/googleplus-icon.svg';
import { ReactComponent as YoutubeIcon } from 'assets/icons/youtube-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook-icon.svg';
import { ReactComponent as PinterestIcon } from 'assets/icons/pinterest-icon.svg';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import MapContainer from '../../containers/MapContainer/MapContainer';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    paddingTop: 20,
  },

  footerTop: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  footerBorder: {
    borderTop: '1px solid gray',
  },
  footerBorderMobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  footerBottom: {
    paddingBottom: 5,
  },
  footerLocation: {
    display: 'flex',
  },
  footerMap: {
    marginRight: 15,
    marginTop: 3,
  },
  footerHeading: {
    fontFamily: 'serif',
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 400,
    color: 'white',
  },
  footerText: {
    fontFamily: 'sans-serif',
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 300,
    lineHeight: 1.8,
    color: 'gray',
    paddingTop: 18,
    paddingBottom: 13,
  },
  footerTextLine: {
    margin: 0,
    lineHeight: 1.8,
  },
  footerLink: {
    color: 'gray',
  },

  footerCopyrights: {
    padding: '15px 0',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 5,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      paddingTop: 11,
      paddingLeft: 0,
    },
  },
  footerConnect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      order: -1,
      justifyContent: 'center',
      padding: '19px 0',
    },
  },
  footerConnectUs: {
    marginRight: 16,
  },
  footerSocialNetworks: {
    display: 'flex',
    paddingRight: 3,
    [theme.breakpoints.down('md')]: {
      paddingRight: 5,
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  footerIcon: {
    fill: 'gray',
    width: 25,
    height: 25,
    display: 'flex',
    opacity: 0.45,
    transition: 'opacity 0.5s',
  },
  footerIconLink: {
    marginRight: 8,
    [theme.breakpoints.down('md')]: {
      marginRight: 18,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 28,
    },
  },
}));

function Footer() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container className={classes.footerTop}>
          <div lg={4} xs={6} className={classes.footerLocation}>
            <div className={classes.footerMap}>
              <MapContainer
                zoom={15}
                containerStyle={{ height: '100px', width: '140px', position: 'relative' }}
                position={{ lat: 44.816430, lng: 20.460600 }}
              />
            </div>
            <div>
              <div className={classes.footerHeading}>
                STORE LOCATION
              </div>
              <div className={classes.footerText}>
                <p className={classes.footerTextLine}> Company ltd.co </p>
                <p className={classes.footerTextLine}> 234 Fake address name, </p>
                <p className={classes.footerTextLine}> Fake city name, Country </p>
                <p className={classes.footerTextLine}> 01234 (000) 123 456 xxx </p>
              </div>
            </div>
          </div>
          <div lg={4} xs={6}>
            <div className={classes.footerHeading}>
              ABOUT US
            </div>
            <div className={classes.footerText}>
              One could refuse to pay expensive translators,
              the European languages are members of the same family.
              Their separate existence is a myth.
              Uses
              {' '}
              <a href="/" className={classes.footerLink}>read more</a>
            </div>
          </div>
        </Grid>

        <Grid container>
          <div xs={12}>
            <div className={classes.footerBorder} />
          </div>
        </Grid>

        <Grid container className={classes.footerBottom}>
          <div xs={12}>
            <div className={clsx(classes.footerBorder, classes.footerBorderMobile)} />
          </div>
          <div sm={6} xs={12}>
            <div className={clsx(classes.footerCopyrights, classes.footerText)}>
              © 2020 the shop. All Rights Reserved.
            </div>
          </div>
          <div sm={6} xs={12} className={classes.footerConnect}>
            <div className={clsx(classes.footerHeading, classes.footerConnectUs)}>
              CONNECT US
            </div>
            <div className={classes.footerSocialNetworks}>
              <a href="/" className={classes.footerIconLink}>
                <TwitterIcon className={classes.footerIcon} />
              </a>
              <a href="/" className={classes.footerIconLink}>
                <PinterestIcon className={classes.footerIcon} />
              </a>
              <a href="/" className={classes.footerIconLink}>
                <FacebookIcon className={classes.footerIcon} />
              </a>
              <a href="/" className={classes.footerIconLink}>
                <YoutubeIcon className={classes.footerIcon} />
              </a>
              <a href="/" className={classes.footerIconLink}>
                <InstagramIcon className={classes.footerIcon} />
              </a>
              <a href="/" className={classes.footerIconLink}>
                <GooglePlusIcon className={classes.footerIcon} />
              </a>
            </div>
          </div>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
