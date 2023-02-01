import React from "react";
import BottomSection from "./components/bottom-section/bottom-section";
import Comments from "./components/comments/comments";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import MiddleSection from "./components/middle-section/middle-section";
import TopSection from "./components/top-section/top-section";

export default function App() {
	return (
		<div className='container'>
			<Header />
            <Landing/>
			<TopSection/>
			<MiddleSection/>
			<Comments/>
			<BottomSection/>
			<Footer/>            
		</div>
	);
}
