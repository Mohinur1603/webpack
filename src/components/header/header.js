import React from "react";

export default function Header() {
	return (
		<header>
			<div className='list'>
				<ul>
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a href='#'>Service</a>
					</li>
					<li>
						<a href='#'>Menu</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
			<img
				style={{ width: "40px" }}
				src='https://cdn-icons-png.flaticon.com/128/8044/8044418.png'
			/>
			<div className='btns'>
				<img
					src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
					alt='search'
					className='icon-btn'
				/>
				<img
					src='https://cdn-icons-png.flaticon.com/512/891/891407.png'
					alt='cart'
					className='icon-btn'
				/>
				<button className='btn'>Register Now</button>
			</div>
		</header>
	);
}
