import {createContext} from 'react'

const AppContext = createContext( {
	connected: null,
	wallet: null,
	setContext: null,
} );

export default AppContext;

export const {Provider, Consumer} = AppContext;