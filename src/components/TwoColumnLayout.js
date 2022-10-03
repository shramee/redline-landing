import ScrollAndMouse from "../services/scrollAndMouse";
const snm = window.snm || new ScrollAndMouse();

export default function( {visual, fullMedium, flip, mid, visualStyle, visualClass, videoUrl, title, content} ) {
	return <div ref={el => snm.addScrollTarget( el )} className={"flex na3 flex-wrap " + (mid && 'items-center')}>
		<div className={`w-100 ${!fullMedium && 'w-40-m'} w-50-l pa3 ${flip && 'order-1-l'} ${visualClass}`} style={visualStyle}>
			{visual}
			{videoUrl && <video muted autoPlay loop playsInline alt={title} className="w-100 br3">
				<source src={videoUrl} type="video/webm" />
			</video>}
		</div>
		<div className={`w-100 ${!fullMedium && 'w-60-m'} w-50-l pa3`}>
			{content}
		</div>
	</div>;
}