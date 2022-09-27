import ScrollAndMouse from "../services/scrollAndMouse";
const snm = window.snm || new ScrollAndMouse();

export default function( {visual, flip, mid, visualStyle, visualClass, videoUrl, title, content} ) {
	return <div ref={el => snm.addScrollTarget( el )} className={"flex pv4 pv5-m pv6-ns na3 flex-wrap " + (mid && 'items-center')}>
		<div className={`w-100 w-40-m w-50-l pa3 ${flip && 'order-1'} ${visualClass}`} style={visualStyle}>
			{visual}
			{videoUrl && <video src={videoUrl} muted={true} autoPlay={true} loop={true} alt={title} className="w-100 br3"/>}
		</div>
		<div className="w-100 w-60-m w-50-l pa3">
			{content}
		</div>
	</div>;
}