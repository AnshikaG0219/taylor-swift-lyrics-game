import {
  Container,
  Button,
  ThemeProvider,
  createTheme,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./gameStyle";

export default function Game() {
  const classes = useStyles();
  const [lyrics, setLyrics] = useState("");

  const theme = createTheme({
    palette: {
      type: "dark",
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

  const getLyrics = () => {
    fetch("https://taylorswiftapi.herokuapp.com/get")
      .then((res) => res.json())
      .then((data) => {
        setLyrics(data);
        console.log(data);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.main}>
        <h1 className={classes.head}>Hello Swifties!</h1>
        <Typography className={classes.quote}>{lyrics.quote}</Typography>
        <Button className={[classes.btn, '']} onClick={getLyrics}>
          Get Quote
        </Button>
      </Container>
    </ThemeProvider>
  );
}
