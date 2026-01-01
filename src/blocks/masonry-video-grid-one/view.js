import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import MasonryVideoGridOne from './Components/Common/MasonryVideoGrid/MasonryVideoGrid';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-mvgo-masonry-video-grid-one');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<MasonryVideoGridOne attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});