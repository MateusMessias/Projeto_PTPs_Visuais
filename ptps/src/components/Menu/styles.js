import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({  
    paper: {
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px',
        borderEndStartRadius: 20,
        borderEndEndRadius: 20
    },
    container : {
        alignItems: 'center'
    },
    logo : {
        width: '115px'
    },
    listItem : {
        borderLeft: '4px solid transparent',
        padding: '12px 0px'
    }
}));