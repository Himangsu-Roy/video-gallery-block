import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import VideoCarouselGallery from './Components/Common/VideoCarouselGallery/VideoCarouselGallery';

document.addEventListener('DOMContentLoaded',() => {
	const blockNameEls = document.querySelectorAll('.wp-block-vcg-video-carousel-gallery');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<VideoCarouselGallery attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});