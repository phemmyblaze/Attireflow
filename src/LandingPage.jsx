import NavBar from "./NavBar";
import Footer from "./Footer";
import Image from './Assets/ankara.png'
import './index.css'
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Stock from "./components/Stock";
import Choice from "./components/Choice";
import DemoCarousel from "./components/Carousel";
import About from "./components/About";
export default function LandingPage() {
	return (
		<div className="w-full">
			<div>
			<div className="img h-full py-6 w-full">
			<NavBar />
			<Hero />
			</div>
			<div className="mx-auto max-w-screen-xl h-full ">
			<Explore />
			<Stock />
			<Choice />
			<DemoCarousel />
			<About />
			</div>
			</div>
			<Footer />
			
		</div>
	);
}
