import { createTheme, responsiveFontSizes } from '@mui/material';
import { grey, pink } from '@mui/material/colors';

export let theme = createTheme({
	palette: {
		primary: {
			main: pink['A200'],
		},
		secondary: {
			main: grey[900],
		},
	},
	typography: {
		fontFamily: [
			'Nunito',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		h1: {
			fontWeight: 700,
			fontSize: '56px',
		},
		h2: {
			fontWeight: 700,
			fontSize: '48px',
		},
		h3: {
			fontWeight: 700,
			fontSize: '40px',
		},
		h4: {
			fontWeight: 700,
			fontSize: '32px',

			lineHeight: 1.25,
		},
		h5: {
			fontWeight: 700,
			fontSize: '24px',
		},
		h6: {
			fontWeight: 700,
			fontSize: '16px',
		},
		body1: {
			fontSize: '16px',
			overflow: 'hidden',
			lineHeight: 1.5,
		},
	},
});

theme = responsiveFontSizes(theme);

// allow configuration using `createTheme`
declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string;
		};
	}

	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}
