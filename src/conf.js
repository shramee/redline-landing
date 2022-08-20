import youtube from './assets/youtube-brands.svg';
import tiktok from './assets/tiktok-brands.svg';

export const
	twitchURL                 = 'https://player.twitch.tv/?channel=redlinedao&parent=' + window.location.host.split( ':' )[0],
	contract_address          = '0x05f940ac40c4aced54b371a00087e14d793a60813b80180f17cbb585e78ad14d',
	rewardsLinks              = [
		[<img height='25' alt='Youtube' src={youtube}/>, '#'],
		[<img height='25' alt='Tiktok' src={tiktok}/>, '#'],
	],
	sponsorLinks              = [
		['isotropic', '#'],
	],
	robotsNFTsContractAddress = '0x044915126b3736c22fc04be736caf0813451617fc562dc727d164361b81358a9';

