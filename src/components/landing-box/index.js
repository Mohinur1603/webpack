import React from "react";

export default function Box({ url, count, title }) {
	return (
		<div className='box'>
			<img
				src={url}
				alt='/'
			/>
			<div>
				<h2>{count}</h2>
				<span>{title}</span>
			</div>
		</div>
	);
}
