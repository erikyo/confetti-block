import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

const Edit = () => <p { ...useBlockProps() }>Confetti!</p>;
const save = () => {
  return(<p {...useBlockProps.save()}><canvas class="confetti"></canvas>PEW</p>)
};

registerBlockType( metadata.name, {
  edit: Edit,
  save,
} );