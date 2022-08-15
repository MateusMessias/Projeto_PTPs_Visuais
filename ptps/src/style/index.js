import { createTheme } from '@mui/material';

export default createTheme({
    spacing : 4,
    palette: {
        primary	: {
            main : '#2D2A26',
        },
    },
    typography : {
        fontFamily : '"Roboto", sans-serif',
        color : '#2D2A26',
        h1 : {
            fontSize : '3rem',
            lineHeight : '3.5rem',
            fontWeight: 'bold'
        },
        h2 : {
            fontSize : '2rem',
            lineHeight : '2.5rem',
            fontWeight: 'bold'
        },
        h3 : {
            fontSize : '1.5rem',
            lineHeight : '1.625rem',
            fontWeight: 'bold'
        },
        body1 : {
            fontSize : '1rem',
            lineHeight : '1.5rem',
            margin : 0,
            color : '#2D2A26'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*' : {
                    fontFamily : '"Roboto", sans-serif',
                },
                '*::-webkit-scrollbar': {
                    width: '8px',
                    height: '8px',
                },
                '*::-webkit-scrollbar-track': {
                    boxShadow: 'inset 0px 0px 6px #00000029',
                    border: '0',
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: '#EAEAEA',
                    outline: '0px',
                    border: '0px',
                },
                '@font-face': [
                    {
                        fontFamily		: 'Roboto',
                        fontStyle		: 'normal',
                        fontWeight		: 400,
                        fontDisplay		: 'swap',
                    },
                    {
                        fontFamily		: 'Roboto',
                        fontStyle		: 'normal',
                        fontWeight		: 700,
                        fontDisplay		: 'swap',
                    },
                    {
                        fontFamily		: 'Roboto',
                        fontStyle		: 'normal',
                        fontWeight		: 700,
                        fontDisplay		: 'swap',
                    },
                    {
                        fontFamily		: 'Roboto',
                        fontStyle		: 'italic',
                        fontWeight		: 700,
                        fontDisplay		: 'swap',
                    },
                    {
                        fontFamily		: 'Roboto',
                        fontStyle		: 'normal',
                        fontWeight		: 300,
                        fontDisplay		: 'swap',
                    },
                    {
                        fontFamily		: 'Roboto',
                        fontStyle		: 'normal',
                        fontWeight		: 500,
                        fontDisplay		: 'swap',
                    }
                ],
            },
        },
    },
});