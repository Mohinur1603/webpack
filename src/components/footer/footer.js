import React from "react";

export default function Footer() {
	return (
		<footer>
			<div>
				<img
					width='50'
					src='https://cdn-icons-png.flaticon.com/128/8044/8044418.png'
					alt='/'
				/>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer...
				</p>
			</div>
			<div style={{ textAlign: "center" }}>
				<h4 style={{ marginBottom: "30px" }}>Navigator</h4>
				<ul>
					<li>About Us</li>
					<li>Service</li>
					<li>Menu</li>
				</ul>
			</div>
			<div style={{ textAlign: "center" }}>
				<h4 style={{ marginBottom: "30px" }}>Resources</h4>
				<ul>
					<li>Reviews</li>
					<li>Blog</li>
					<li>Update News</li>
				</ul>
			</div>
			<div style={{ textAlign: "center" }}>
				<h4 style={{ marginBottom: "30px" }}>Contact us</h4>
				<ul>
					<li>Email: oyasim@email.com</li>
					<li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
						<img
							width='20'
							height='20'
							src='https://cdn-icons-png.flaticon.com/512/3128/3128208.png'
						/>
						<img
							width='20'
							height='20'
							src='https://cdn-icons-png.flaticon.com/512/733/733635.png'
						/>
						<img
							width='20'
							height='20'
							src='https://cdn-icons-png.flaticon.com/512/2111/2111491.png'
						/>
					</li>
				</ul>
			</div>
		</footer>
	);
}
