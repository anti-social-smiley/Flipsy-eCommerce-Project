import { Container, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const Promotions = ({ messages = [] }) => {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (messages.length === 0) return;

    const showTimeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(showTimeout);
    };
  }, [messages]);

  if (messages.length === 0) return null;

  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0px",
        overflow: "hidden",
      }}
    >
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            sx={{
              color: "inherit",
              fontSize: "1.5rem",
              fontFamily: '"Roboto Condensed", sans-serif',
              textAlign: "center",
            }}
          >
            {messages[messageIndex]}
          </Typography>
        </Box>
      </Slide>
    </Container>
  );
}
export default Promotions;