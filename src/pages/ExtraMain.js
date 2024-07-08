import { React } from "react";
export default function ExtraMain() {
	return (
		<div>
			<section class="section--extra-content section-divider">
				<h2 class="subheading">extra content</h2>
				<iframe
					src="https://www.youtube.com/embed/_eAsAfFoxtw?si=W8lVtyAUD_K3HPCC"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
				<p class="extra-platforms-title">Check out SAI on these platforms</p>
				<div class="text-button-container">
					<a
						href="https://www.youtube.com/@omoweatherman"
						target="_blank"
						rel="noreferrer"
						class="text-button"
					>
						<i class="fa-brands fa-youtube"></i>
						<p>2nd channel</p>
					</a>
					<a
						href="https://soundcloud.com/omoremn"
						target="_blank"
						rel="noreferrer"
						class="text-button"
					>
						<i class="fa-brands fa-soundcloud"></i>
						<p>2nd SoundCloud</p>
					</a>
				</div>
			</section>
		</div>
	);
}
