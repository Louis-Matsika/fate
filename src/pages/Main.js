// import { React, useState } from "react";
import { React } from "react";
import ExtraMain from "./ExtraMain.js";
import Newsletter from ".././components/Newsletter.js";
// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase-config";

export default function Main() {
	return (
		<div>
			<main>
				<section class="section--main-content">
					<div class="subsection--main-release">
						<iframe
							src="https://www.youtube.com/embed/B8ggua3sl5c?si=rg5hpBNLjnMxLt81"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
						{/* <img
							src="site-content/psalm.png"
							class="music-cover"
							alt="psalm. by SAI's Fate. cover art"
						></img> */}
						<h1 id="release-title">fnatic.</h1>
						<p id="creator-title">SAI's fate.</p>
					</div>
					<div class="subsection--listen-on">
						<h2 class="subheading" id="subheading--listen-on">
							listen on
						</h2>
						<div class="logo-button-container">
							<a
								href="https://www.youtube.com/watch?v=CT5tn7OUqsg"
								target="_blank"
								rel="noreferrer"
								aria-label="YouTube"
								class="logo-button"
							>
								<i class="fa-brands fa-youtube"></i>
							</a>
							<a
								href="https://open.spotify.com/track/5Qu003Ay3pWHsoEUmt6yoa?si=98a20f27eed4406b"
								target="_blank"
								rel="noreferrer"
								aria-label="Spotify"
								class="logo-button"
							>
								<i class="fa-brands fa-spotify"></i>
							</a>
							<a
								href="https://soundcloud.com/saisfate/lullaby"
								target="_blank"
								rel="noreferrer"
								aria-label="Soundcloud"
								class="logo-button"
							>
								<i class="fa-brands fa-soundcloud"></i>
							</a>
						</div>
						<div class="text-button-container" id="social-buttons">
							<a
								href="https://www.instagram.com/omosaisfate/"
								target="_blank"
								rel="noreferrer"
								class="text-button"
							>
								<i class="fa-brands fa-instagram"></i>
								<p>Instagram</p>
							</a>
							<a
								href="https://www.tiktok.com/@saisfate"
								target="_blank"
								rel="noreferrer"
								class="text-button"
							>
								<i class="fa-brands fa-tiktok"></i>
								<p>TikTok</p>
							</a>
							<a
								href="https://www.snapchat.com/add/omo541"
								target="_blank"
								rel="noreferrer"
								class="text-button"
							>
								<i class="fa-brands fa-snapchat"></i>
								<p>Snapchat</p>
							</a>
						</div>
					</div>
				</section>
				<ExtraMain />
				<Newsletter />
			</main>

			<footer>
				<a
					href="https://www.youtube.com/@saisfate"
					target="_blank"
					rel="noreferrer"
					class="footer-logo-wrapper footer-logo-wrapper--omo"
				>
					<img
						src="utilities/branding/omologo.png"
						alt="OMO logo"
						class="footer-logo omo-logo"
						id="footer-logo--omo"
					/>
				</a>
				{/* <a
					href="https://www.youtube.com/@omoweatherstation"
					target="_blank"
					rel="noreferrer"
					class="footer-logo-wrapper footer-logo-wrapper--weatherstation"
				>
					<img
						src="utilities/branding/weatherstation_logo.png"
						alt="OMOweatherstation logo"
						class="footer-logo"
						id="footer-logo--weatherstation"
					/>
				</a> */}
			</footer>
		</div>
	);
}
