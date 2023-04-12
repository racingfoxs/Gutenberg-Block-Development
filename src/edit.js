import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from '@wordpress/element';
import "./editor.scss";
import Settings from "./settings";
export default function Edit(props) {
	const blockProps = useBlockProps();
	
	
	const { attributes, setAttributes } = props;
	const {
		headingTitle,
		headingAlign,
		subHeadingTitle,
		subHeadingToggle,
		subPositionToggle,
	} = attributes;


//   useEffect(() => {
// 	console.log("useEffect hook running")
// 	subPosiition();	
//   }, [subPositionToggle])
  


	return (
		<div {...blockProps}>
			{/* {console.log(subPositionToggle,"edit page")} */}
			<Settings {...props} />
			{/* {subPositionToggle? "Showing True": "showing False"} */}
			{/* <div {...blockProps}>

				{subPositionToggle ? "true" : "false"}
				
			</div> */}
			{subPositionToggle ? (
				<>
					{subHeadingToggle ? (
						<RichText
							{...blockProps}
							tagName="h4"
							value={subHeadingTitle}
							className="ip-sub-heading-text"
							multiline={false}
							onChange={(value) => {
								setAttributes({ subHeadingTitle: value });
							}}
						/>
					) : null}
					<div
						{...blockProps}
						className="rp-heading-align"
						style={{ textAlign: `${headingAlign}` }}
					>
						<RichText
							{...blockProps}
							tagName="h2"
							value={headingTitle}
							className="ip-heading-text"
							multiline={false}
							onChange={(value) => {
								setAttributes({ headingTitle: value });
							}}
						/>
					</div>
				</>
			) : (
				<>
					<div
						{...blockProps}
						className="rp-heading-align"
						style={{ textAlign: `${headingAlign}` }}
					>
						<RichText
							{...blockProps}
							tagName="h2"
							value={headingTitle}
							className="ip-heading-text"
							multiline={false}
							onChange={(value) => {
								setAttributes({ headingTitle: value });
							}}
						/>
					</div>

					{subHeadingToggle ? (
						<RichText
							{...blockProps}
							tagName="h4"
							value={subHeadingTitle}
							className="ip-sub-heading-text"
							multiline={false}
							onChange={(value) => {
								setAttributes({ subHeadingTitle: value });
							}}
						/>
					) : null}
				</>
			)}
		</div>
	);
}
