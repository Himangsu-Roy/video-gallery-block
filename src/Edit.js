// import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
// import { dispatch } from '@wordpress/data';
// import { createBlock } from '@wordpress/blocks';

// const Edit = props => {
// 	const { attributes, setAttributes, clientId } = props;
// 	const handleInsertBlock = () => { 
// 		// const block = createBlock('b-blocks/table-of-content');
// 		// dispatch('core/block-editor').insertBlocks(block);
// 		const block = createBlock('b-blocks/demo-block');
// 		dispatch('core/block-editor').replaceBlock(clientId, block);
// 		// const block = createBlock('b-blocks/demo-block');
// 		// dispatch('core/block-editor').replaceInnerBlocks(clientId, [block]);
// 	}
// 	return <>

// 		<div {...useBlockProps()}>
// 			<div onClick={handleInsertBlock} style={{height:"50px",background:"#ccc",padding:"10px",width:"100%"}}>
// 				insert block
// 			</div>
// 			{/* <div>
// 				<InnerBlocks allowedBlocks={['b-blocks/demo-block']} />
// 			</div> */}
// 		</div>
// 	</>;
// }
// export default Edit;