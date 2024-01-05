import {Big_Shoulders_Display, Heebo} from "next/font/google";

export const heebo = Heebo( {
	subsets: [ "latin" ],
	weight: "400",
	variable: '--font-heebo',
} );

export const bigShouldersDisplay = Big_Shoulders_Display( {
	subsets: [ "latin" ],
	weight: "600",
	variable: '--font-big-shoulders-display',
} );
