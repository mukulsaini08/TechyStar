import React from "react";
import {
	AiFillAmazonCircle,
	AiFillGoogleCircle,
	AiFillInstagram,
	AiFillYoutube,
} from "react-icons/ai";
import vg from "../assets/2.webp";

const Home = () => {
	return (
		<>
			<div className='home' id='home'>
				<main>
					<h1>TechyStar</h1>
					<p>Solution to all your problems.</p>
				</main>
			</div>

			<div className='home2'>
				<img src={vg} alt='Graphics' />
				<div>
					<p>
						We are your one and only solution to the tech problems you face
						every day. We are leading tech company whose aim is to increase the
						problem solving ability in children.
					</p>
				</div>
			</div>

			<div className='home3' id='about'>
				<div>
					<h1>Who we are ?</h1>
					<p>
						TechyStar is a global developer and licensor of software, devices,
						solutions, and services. The company is well known for its Windows
						and Office Suite software but nets a growing share of its profit and
						revenue from cloud computing and its cloud platform, Azure.
					</p>
				</div>
			</div>

			<div className='home4' id='brands'>
				<div>
					<h1>Brands</h1>
					<article>
						<div
							style={{
								animationDelay: "0.1s",
							}}
						>
							<AiFillGoogleCircle />
							<p>Google</p>
						</div>
						<div
							style={{
								animationDelay: "0.2s",
							}}
						>
							<AiFillAmazonCircle />
							<p>Amazon</p>
						</div>
						<div
							style={{
								animationDelay: "0.3s",
							}}
						>
							<AiFillInstagram />
							<p>Instagram</p>
						</div>
						<div
							style={{
								animationDelay: "0.4s",
							}}
						>
							<AiFillYoutube />
							<p>Youtube</p>
						</div>
					</article>
				</div>
			</div>
		</>
	);
};

export default Home;
