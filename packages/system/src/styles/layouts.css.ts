import { style } from "@vanilla-extract/css"
import { breakpoints } from "../sprinkles/sprinkles.css"

export const bodyWithNav = style({
	display: "grid",
	gridTemplateRows: "1fr 56px",
	overflow: "hidden",
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	"@media": {
		[breakpoints.desktop]: {
			gridTemplateColumns: "240px 1fr",
			gridTemplateRows: "1fr",
		},
	},
})

export const shrinkable = style({ minHeight: 0 })

export const scrollable = style({ overflow: "auto" })

export const fullscreen = style({
	height: "100vh",
})
