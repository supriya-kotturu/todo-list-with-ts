import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import App from './App';
import './index.css';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.querySelector('#root')
);
