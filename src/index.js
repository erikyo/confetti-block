import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import confetti from "canvas-confetti";

/**
 * The edit function for the block.
 * @return {JSX.Element}
 * @constructor
 */
const Edit = () => <p { ...useBlockProps(
  {
    className: 'wp-block-blocchi-confetti',
    onClick: () => {
      console.log("confetti!")
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
) }>Confetti!</p>;

/**
 * The save function for the block.
 * @return {JSX.Element}
 */
const save = () => {
  return(<canvas {...useBlockProps.save()}>PEW</canvas>)
};

/**
 * The register function for the block.
 */
registerBlockType( metadata.name, {
  edit: Edit,
  save,
} );