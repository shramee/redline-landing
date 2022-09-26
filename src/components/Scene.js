export default function Scene( props ) {
	return <div className="scene">
		{props.video && <video className='bg absolute absolute--fill' src={props.video} loop={true} autoPlay={true} muted={true}>
			Sorry your browser doesn't support HTML5 video.
		</video>}
		<div className="content pa3 ph4-ns" style={props.contentStyle}>
			{props.children}
		</div>
	</div>;
}