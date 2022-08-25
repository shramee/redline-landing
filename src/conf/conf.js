import youtube from '../assets/youtube-brands.svg';
import tiktok from '../assets/tiktok-brands.svg';
import _abi_raceContract from './abi_raceContract.json';

export const
	twitchURL                 = 'https://player.twitch.tv/?channel=redlinedao&parent=' + window.location.host.split( ':' )[0],
	rewardsLinks              = [
		[<img height='25' alt='Youtube' src={youtube}/>, '#'],
		[<img height='25' alt='Tiktok' src={tiktok}/>, '#'],
	],
	sponsorLinks              = [
		['isotropic', '#'],
	],
	raceTrackImageURI              = 'https://redline.game/a/t00.webp';

export const
	defaultSpacesInRace = 6;

// Contract addresses
export const
	robotsNFTsContractAddress = '0x000658fd29c4d5b5bc56e948a206bd40f8bfa4aa4acfe17ebebfac035dadf34d',
	raceContractAddress       = '0x078d1fd91e71d15dc05ff65de1afc4733993e0c7c88d17e00768383e3151f76f';

export const abi_raceContract = _abi_raceContract;