import "./style.scss";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	RadioControl,
	ToggleControl,
	SelectControl,
	TabPanel,
} from "@wordpress/components";
import { memo } from "@wordpress/element";

const Settings = (props) => {
	const { attributes, setAttributes } = props;
	const { headingAlign, subHeadingToggle, subPositionToggle } = attributes;

	const titleSettings = () => {
		return (
			<InspectorControls style={{ marginBottom: "40px" }}>
				<PanelBody title="Content">
					<PanelRow>
						<RadioControl
							label="Alignment"
							selected={headingAlign}
							options={[
								{ label: "Left", value: "left" },
								{ label: "Center", value: "center" },
								{ label: "Right", value: "right" },
							]}
							onChange={(value) => setAttributes({ headingAlign: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		);
	};

	const subHeadingSettings = () => {
		return (
			<InspectorControls style={{ marginBottom: "40px" }}>
				<PanelBody title="Sub Heading">
					<PanelRow>
						<ToggleControl
							label="Enable Sub Heading"
							checked={subHeadingToggle}
							onChange={() =>
								setAttributes({ subHeadingToggle: !subHeadingToggle })
							}
						/>
					</PanelRow>
					{subHeadingToggle && 
					<PanelRow>
						<SelectControl
							label="Position"
							value={subPositionToggle}
							options={[
								{ label: "Above Heading", value: true },
								{ label: "Below Heading", value: false },
							]}
							onChange={(value) => {
								// console.log(typeof(JSON.parse(value.toLowerCase())));
								let convertValue = JSON.parse(value.toLowerCase());
								return setAttributes({ subPositionToggle: convertValue });
							}}
							__nextHasNoMarginBottom
						/>
					</PanelRow>
					}
				</PanelBody>
			</InspectorControls>
		);
	};

	const onSelect = (tabName) => {
		console.log("Selecting tab", tabName);
	};

	const MyTabPanel = () => (
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title="Content">
				<PanelRow>
					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						onSelect={onSelect}
						tabs={[
							{
								name: "tab1",
								title: "Tab 1",
								className: "tab-one",
							},
							{
								name: "tab2",
								title: "Tab 2",
								className: "tab-two",
							},
						]}
					>
						{(tab) => <p>{tab.title}</p>}
					</TabPanel>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{titleSettings()}
			{subHeadingSettings()}
			{MyTabPanel()}
		</>
	);
};

export default memo(Settings);
