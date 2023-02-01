import React from "react";
import Box from "../landing-box";

export default function TopSection() {
	return (
		<section className="top-section">
			<div className='top-section-left'>
				<h1>Why We Are The Best?</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.<br></br> Lorem Ipsum has been the industry's standard dummy
					text ever since the <br></br> 1500s, when an unknown printer took a
					galley...
				</p>
				<Box
					url={"https://cdn-icons-png.flaticon.com/512/5637/5637217.png"}
					count={"Fasted delivery Service"}
					title={
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					}
				/>
				<Box
					url={"https://cdn-icons-png.flaticon.com/512/8094/8094970.png"}
					count={"Online order Service"}
					title={
						"Lorem Ipsum is simply dummy text of the  printing and typesetting industry."
					}
				/>
				<Box
					url={"https://cdn-icons-png.flaticon.com/512/1288/1288538.png"}
					count={"24/8 Service"}
					title={
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					}
				/>
			</div>
			<div className='top-section-right'>
				<img
					src='https://s3-alpha-sig.figma.com/img/f849/b294/ddcb0c5c6fd84a5a84c06d48754d62ac?Expires=1676246400&Signature=jD9AqPzfoGwcRt26HTz4S00vxOvU7~kk89C0vmDI5uquXS59JCHNsTDBPIcPXZDUPF2DnwMfXYth4MyMFp~jK3McIfFvnuiJN42nROTlugqh6oIR3juhDeRR32Eu3fs0ndwAnKE5TLSNubF3HXpf~7xDv-6l~VjvaHg6iY88AdXSIS8AsBvUxWGo5GhNQBXFytoPpmiXLvRLid9KdUaT0fpclstfh4VbwNrNo7fJg8mbWnJ8Cc2mhF8kyzVTE8dH~iq2IM3oEmMTtst5WFzhQu~aby2j1-EZvtdJmiGlTjEGxBxf-zPssrcw6lErwRssonsYVEfSc6iCX5jftdffjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
					alt='/'
				/>
			</div>
		</section>
	);
}
