import { __ } from "@wordpress/i18n";

const attributes = {
	headingTitle: {
		source: "html",
		selector: ".ip-heading-text",
		default: __("Your Heading", "inspectorpannel"),
	},

	headingAlign: {
		type: "string",
		default: "center",
	},
	subHeadingToggle: {
		type: "boolean",
		default: false,
	},
	subHeadingTitle: {
		source: "html",
		selector: ".ip-sub-heading-text",
		default: __("Your Sub Heading", "inspectorpannel"),
	},
    subPositionToggle: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
