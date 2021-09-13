import {
  Container,
  Button,
  ThemeProvider,
  createTheme,
  Typography,
  TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useStyles } from "./gameStyle";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";
import Confetti from "react-confetti";

export default function Game() {
  const classes = useStyles();
  const [lyrics, setLyrics] = useState("");
  const [song, setSong] = useState("");
  const [show, setShow] = useState(false);

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

  const checkAns = () => {
    if (song.toUpperCase() === lyrics.song.toUpperCase()) {
      setShow(true);
      setSong("");
      getLyrics();
    } 
    else {
      setSong("");
      alert("Wrong Guess!");
    }
  };

  // to get the quote on reload
  useEffect(() => {
    getLyrics();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.main}>
        <h1 className={classes.head}>Hello Swifties!</h1>
        <Typography className={classes.quote}>
          <FormatQuoteRoundedIcon className={classes.quoteIcon} />
          <br />
          {lyrics.quote}
          <br/>
          <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>💡Hint : {lyrics.album}</p>
        </Typography>
        <div className={classes.field}>
          <TextField
            label="Guess the song"
            variant="filled"
            value={song}
            className={classes.text}
            onChange={(e) => {
              setSong(e.target.value);
            }}
            color="secondary"
            fullWidth
            style={{ width: "50%"}}
          />
          <Button onClick={checkAns} className={classes.checkBtn} variant="contained" type="submit">
            Check
          </Button>
        </div>
        <br />
        <br />
        <Button className={classes.btn} onClick={getLyrics}>
          Get Quote
        </Button>
      </Container>
      {/* <Confetti
        run={show}
        recycle={false}
        onConfettiComplete={(confetti) => {
          setShow(false);
          confetti.reset();
        }}
      /> */}
    </ThemeProvider>
  );
}
