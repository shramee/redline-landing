import youtube from './assets/youtube-brands.svg';
import tiktok from './assets/tiktok-brands.svg';

export const
	twitchURL = 'https://player.twitch.tv/?channel=leekbeats&parent=' + window.location.host.split( ':' )[0];


// Array of links, Link text and URL
export const rewardsLinks = [
	[ <img height='25' alt='Youtube' src={youtube} />, '#' ],
	[ <img height='25' alt='Tiktok' src={tiktok} />, '#' ],
]

export const sponsorLinks = [
	[ 'isotropic', '#' ],
]
