import React from 'react'

export default function Comments() {
  return (
		<section className='comment-section'>
			<div className='left-comment'>
				<h1>What Our Customers About Us saying</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularis
				</p>
				<h4 style={{marginBottom: "20px"}}>Ahmed Hridoy</h4>
				<span>&#9733;</span>
				<span>&#9733;</span>
				<span>&#9733;</span>
				<span>&#9733;</span>
				<span>&#9733;</span>
			</div>
            <div></div>
			<div className='right-comment'>
				<img
					src='https://s3-alpha-sig.figma.com/img/b4fa/5f80/413f5b053d32e909f9fa0f82721a96c0?Expires=1676246400&Signature=FPycfcEIhCeQ1Evb393UbEDL2nUS7iBSEoNE~9lGKu6aZlhNHgFY0T8k2NzCZEC-F7v5oF5PUT6r4aNRS6bmlG8N~NizVUksNcBswkFdZu1OzXrTl4N8Fez-EjtIJZFre0uHQ23IGj0~bJrBWE6LkOo0GCF~EOcqUjwh1JyRvp8fHftzkHPXAseAUWA0ftz3qvP2EXn9gpI5xMfLCsSUsfTPzJAXNu6~ZYj9GmMn45m7PI8xUJKpIuO28g5pXgF3TniziKZLzIcSfsVnJ7QcHZp-UkQAglWVnQIOtKKcWjBpQPIi39LPHWdQbD6PhP6a0~OErvDe1thevfVf1nh4Dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
					alt='/'
				/>
			</div>
		</section>
	);
}
