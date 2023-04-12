import { useBlockProps, RichText } from "@wordpress/block-editor";
export default function save(props) {
	const blockProps = useBlockProps.save();
	const { attributes } = props;
	const {
		headingTitle,
		headingAlign,
		subHeadingTitle,
		subHeadingToggle,
		subPositionToggle,
	} = attributes;

	return (
		<div {...blockProps}>
			{subPositionToggle ? (
				<>
				{subHeadingToggle ? (
						<RichText.Content
							{...blockProps}
							value={subHeadingTitle}
							tagName="h4"
							className="ip-sub-heading-text"
						/>
					) : null}
					<div
					 {...blockProps}
						// style={{ textAlign: `${headingAlign}` }}
					>
						<RichText.Content
							{...blockProps}
							value={headingTitle}
							tagName="h2"
							className={`rp-heading-align-${ headingAlign }`}
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
						<RichText.Content
							{...blockProps}
							value={headingTitle}
							tagName="h2"
							className="ip-heading-text"
						/>
					</div>
					{subHeadingToggle ? (
						<RichText.Content
							{...blockProps}
							value={subHeadingTitle}
							tagName="h4"
							className="ip-sub-heading-text"
						/>
					) : null}
				</>
			)}
			
		</div>
	);
}
