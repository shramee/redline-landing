export default function Scene( {contentStyle, bgChildren, children, video, ...restProps} ) {
	restProps.className = restProps.className || '';
	restProps.className += ' scene';
	return <div {...restProps}>
		{bgChildren}
		{video && <video className='bg absolute absolute--fill' loop autoPlay muted playsInline>
			<source src={video} type="video/webm" />
		</video>}
		<div className="content pa3 pt5 pb4 ph4-ns" style={contentStyle}>
			{children}
		</div>
	</div>;
}