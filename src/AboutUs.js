import React,{useEffect} from "react";

import "./AboutUs.css";
import Footer from "./Footer";
import Nav from "./Nav";



function AboutUs() {

	useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


	return (
        <>
            <Nav/>
		
            <div className="aboutContainer">
                <h1 style={{display:'hidden'}}>hello</h1>
           
				<div className="about">
					<h1 className="heading1">About Us</h1>

					<p className="para para1">
						CHORKI is the ultimate entertainment destination for Bangla language
						audience around the world. Huge Bangla and foreign content including
						Original Movies, Web Series, Short Fiction & Entertainment Shows are
						available on the Chorki video streaming platform. Watch exciting
						Chorki originals, Bangla dubbed foreign content, Classic Bangla
						television fictions and much more.
					</p>
				</div>

				<div className="about">
					<h1 className="heading1">Content Features</h1>

					<div className="about-sub">
						<h2>One Original Film Every Month</h2>

						<p className="para para2">
							The audience will get one new original movie every month around
							the year. Your regular dose of visual entertainment is here.
						</p>
					</div>
				</div>

				<div className="about3">
					<div className="about-sub abhi">
						<h2>Exciting Original Web Series</h2>

						<p className="para para2">
							Thrilling, rom-com, trending Bangla original web series with top
							star-cast and made by talented directors.
						</p>
					</div>
				</div>

				<div className="about3">
					<div className="about-sub abhi">
						<h2>Original Bangla Short Fiction</h2>

						<p className="para para2">
							Thrilling, rom-com, trending Bangla original web series with top
							star-cast and made by talented directors.
						</p>
					</div>
				</div>

				<div className="about3">
					<div className="about-sub abhi">
						<h2>Trending Bangla Movies</h2>

						<p className="para para2">
							Hot new releases from theatres are here. Chorki is like your own
							personal movie theatre.
						</p>
					</div>
				</div>
				<div className="about3">
					<div className="about-sub">
						<h2>Bangla Dubbed Foreign Movies</h2>

						<p className="para para2">
							Now you can enjoy super-hit international movies in your own
							language. All big international movies are available in Bangla.
							Movies are dubbed by Bengali stars.
						</p>
					</div>
				</div>
				<div className="about3">
					<div className="about-sub">
						<h2>Bangla Dubbed Foreign Series</h2>

						<p className="para para2">
							Intriguing foreign language series are available in Bangla. Watch
							international contents in your own language.
						</p>
					</div>
				</div>
				<div className="about3">
					<div className="about-sub">
						<h2>Classic Bangla Movies and TV Fiction</h2>

						<p className="para para2">
							The impact of classic movies and Bangla TV content can never be
							underestimated. Handpicked and curated Bangla classic movies and
							tele classics of the golden age are available all in one place.
						</p>
					</div>
                </div>
                

                <div className="about">
					<h1 className="heading1">Platform Features</h1>

					<div className="about-sub">
						<h2>Multi-Device Capability</h2>

						<p className="para para2">
						Watch your favourite content, anywhere, anytime- on Andriod, ios mobile, laptop or Smart TV. Chorki is casting enabled and is available on Android TV, Amazon Fire TV, and on the web (www.chorki.com).


						</p>
					</div>



				</div>


                <div className="about3">
					<div className="about-sub abhi2">
						<h2>High definition video</h2>

						<p className="para para2">
						Enjoy HD movies, series, shorts, and hundreds of other exciting video content.

						</p>
					</div>
				</div>

                <div className="about3">
					<div className="about-sub abhi3">
						<h2>Offline Video Download</h2>

						<p className="para para2">
						You can download video content on your mobile device and watch anytime, anywhere.

						</p>
					</div>
				</div>
                <div className="about3">
					<div className="about-sub abhi">
						<h2>Smooth Video Streaming</h2>

						<p className="para para2">
						Enjoy your time with bufferless video contents. All videos play without any lag and will adjust resolution according to your data speed

						</p>
					</div>
				</div>
                <div className="about3">
					<div className="about-sub abhi">
						<h2>Subscription Plans</h2>

						<p className="para para2">
                        Easy-to-avail subscription plans are available on Chorki.com Users can subscribe for half-yearly or yearly plans to watch premium Chorki content. Pay-per-view for individual contents and free contents are also available.



						</p>
					</div>
				</div>
                
                


                </div>
                
            
                <Footer />
                
        
		</>
	);
}

export default AboutUs;
