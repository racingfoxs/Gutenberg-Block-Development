
import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
registerBlockType( metadata.name, {
	attributes,
	edit: (props)=><Edit { ...props } />,
	save,
} );
