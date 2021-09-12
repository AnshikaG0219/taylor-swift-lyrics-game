import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    main:
    {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw'
    },
    head:{
        height: '30vh',
        fontSize: '4rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5rem'
    },
    quote:{
        height: '20vh',
        fontSize: '1.5rem'
    },
    btn:{
        fontSize: '1.5rem',
        padding: '0rem 3.5rem',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease',
        letterSpacing: '0.3rem',
        position: 'relative',
        backgroundImage: 'linear-gradient(315deg,#FEC260 0%, #A12568 74%)',
    }
}))