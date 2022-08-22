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
	raceTrackImageURI              = 'https://redline.game/a/t00.png';

export const
	defaultSpacesInRace = 6;

// Contract addresses
export const
	robotsNFTsContractAddress = '0x044915126b3736c22fc04be736caf0813451617fc562dc727d164361b81358a9',
	raceContractAddress       = '0x05f940ac40c4aced54b371a00087e14d793a60813b80180f17cbb585e78ad14d';

export const abi_raceContract = _abi_raceContract;