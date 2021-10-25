import { createGlobalStyle } from 'styled-components';

export const StyleGlobals = createGlobalStyle`
        
    :root {
	--colorPrimary: #2ab53c;
	--colorSecundary: #12751f;
	--corTerciaria: #6b6e6a;
	--corEscura: #1c1c1c;
	--corBackgroundLight: #fefefe;
}

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    @font-face {
	src: url(./fonts/materiais-icons-outlined.woff2) format('woff2');
	font-family: 'Material Icons';
	font-style: normal;
	font-weight: 400;

    *, *::before, *::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font: 16px Roboto, sans-serif;

    }

    .material-icons {
        font-family: 'Material Icons' !important;
    }

    a, a:focus, a:hover {
        text-decoration: none;
        color: inherit;
    }
}
`;
