export default function KenBurns( {img}) {
	return <div className="w-100 db ken-burns" style={{
		paddingBottom: '',
	}}>
		<div className="ken-burns-img" style={{
			backgroundImage: `url(${img})`,
		}}></div>
	</div>
}