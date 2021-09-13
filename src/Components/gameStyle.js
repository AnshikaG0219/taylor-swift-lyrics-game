import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: "4rem 0rem",
  },
  head: {
    fontSize: "4rem",
    marginBottom: '2rem',
    width: '100%',
    textTransform: "uppercase",
    letterSpacing: "0.5rem",
  },
  quote: {
    height: "30%",
    fontSize: "1.5rem",
    width: '60%',
    margin: '2rem 0rem'
  },
  btn: {
    fontSize: "1.5rem",
    padding: "0rem 3.5rem",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
    letterSpacing: "0.3rem",
    position: "relative",
    boxShadow: "0 0.2rem 0.5rem 0.2rem rgba(255, 105, 135, .3)",
    backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  field: {
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    "& label.Mui-focused": {
        color: "#F4ABC4",
      },
  },
  quoteIcon:{
      transform:'scaleX(-1)',
      fontSize: '2rem'
  },
  checkBtn:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#fff',
    borderRadius: '0',
    fontWeight: 'bold',
    letterSpacing: '0.2rem',
    padding: '1rem 2rem',
    [theme.breakpoints.down("md")]:{
      width: '50%',
      padding: '0.5rem'
    }
  },
}));
