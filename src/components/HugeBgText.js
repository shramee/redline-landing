import ScrollAndMouse from "../services/scrollAndMouse";
const snm = window.snm || new ScrollAndMouse();

export default function HugeBgText( {children, scrollTransform, style} ) {
	return <h2 ref={el => snm.addScrollTarget( el )} className='goodtimes absolute absolute--fill o-90' style={{
		fontSize: '15rem',
		lineHeight: '2',
		color: 'rgba(3, 16, 46)',
		right: 'auto',
		bottom: 'auto',
		top: '20vh',
		margin: '0',
		transformOrigin: '0 50%',
//		transform: scrollTransform || 'translateX(calc(.25em - 2.5em * var(--scroll)))'
		transform: scrollTransform || 'scale(2) translateX(calc(35% - 135% * var(--scroll)))',
		...style
	}}>{children}</h2>
}