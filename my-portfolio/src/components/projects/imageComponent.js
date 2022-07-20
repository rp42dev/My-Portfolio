import { Typography, Paper, ButtonBase, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LoadWebpage from "./LoadWebpage";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 400,
  width: 100,
  boxShadow: theme.shadows[6],
  transition: theme.transitions.create("box-shadow", {
    duration: theme.transitions.duration.short,
  }),
  "@media (max-width:600px)": {
    height: 300,
    width: "auto",
  },
  "@media (max-width:400px)": {
    height: 200,
    width: "auto",
  },
  "& .MuiTypography-root": {
    fontStyle: theme.button,
    color: "transparent",
    borderBottom: "3px solid transparent",
    borderRadius: "4px",
    transition: "all .2s ease-in-out",
  },
  "&:hover": {
    boxShadow: theme.shadows[10],
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },

    "& .MuiTypography-root": {
      opacity: 1,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderBottom: "3px solid rgba(179, 113, 66)",
      backgroundColor: "rgb(20, 20, 21, 0.3)",
      color: theme.palette.secondary.main,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.dark.main,
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

export default function ImageComponent(props) {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setResult] = useState(true);

  let call = async (url) => {
    let success = await LoadWebpage(url);
    setResult(success);
    console.log(success);
  };

  useEffect(() => {
    if (url) {
      call(url);
      setLoading(true);
    } 

  }, [url]);

  useEffect(() => {
    if (success) {
      setLoading(false);
    } if (!success) {
      setLoading(false);
    }
  }, [success]);


  return (
    <Paper elevation={3}>
      <ImageButton
        title="View live site"
        onClick={() => setUrl(props.image.url)}
        focusRipple
        key={props.image.title}
        style={{
          width: "100%",
        }}
      >
        {/* overlay if loading */}

        <ImageSrc style={{ backgroundImage: `url(${props.image.img})` }} />

        {loading ? (
          <CircularProgress color="secondary" size={100} />
        ) : (
          <Typography variant="h6" className="MuiTypography-root">
            {props.image.title}
          </Typography>
        )}
        <ImageBackdrop className="MuiImageBackdrop-root"></ImageBackdrop>
      </ImageButton>
    </Paper>
  );
}
