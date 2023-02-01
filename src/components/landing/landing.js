import React from "react";
import Box from "../landing-box";

export default function Landing() {
	return (
		<div className='landing'>
			<div className='bg'>
				<div className='top'>
					<h1>Organic Fruit & Vegetables</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.<br></br> Lorem Ipsum has been the industry's standard
						dummy text ever since the <br></br> 1500s, when an unknown printer
						took a galley...
					</p>
					<span className="span">
						Order Now
						<img
							width='40'
							src='https://cdn-icons-png.flaticon.com/512/8106/8106549.png'
							alt='/'
						/>
					</span>
				</div>
				<div className='bottom'>
					<img
						src='https://s3-alpha-sig.figma.com/img/b400/d652/88a1545b6fb812f2c5880b2d5b85bfd4?Expires=1676246400&Signature=GnGeK8mIWlzL1q5eCLks9c4wZxxYfNPnPbW4grojwAvO99Xd1gezQuP3JXkHSjjhBUZhqhvyVv6qND52L08Znua4Wy-ZtJb0YzO7qhcALoP4YIe5ppY-CLnZ36g47TNC~Eib9Q0EeXp22xBaJfgiTt~vM3kFhYnPqsqIyMsaeDSDVx0cgYvTzozy7cu5bFllmvB9Qqse7gK227Dl~0ECmr3szRi9eC39Io5G4acY0HKSgVeMiOc~Rl2ZTWMVRyKMO1msknt15m-Jecm77FIey~KJvUrypBNJxDiTizEp~CUfYkNmGrMTraT8dyi~hAiNQLHej63UYruNRsphuh6HtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt='/'
					/>

					<div className='boxs'>
						<Box
							url={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
							count={"30K"}
							title={"User Order"}
						/>
						<Box
							url={"https://cdn-icons-png.flaticon.com/512/2107/2107957.png"}
							count={"20K"}
							title={"Reviews(4.8)"}
						/>
						<Box
							url={"https://cdn-icons-png.flaticon.com/512/561/561611.png"}
							count={300}
							title={'Items'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
