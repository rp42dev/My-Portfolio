import { Typography, Paper, ButtonBase, styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

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
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const LoadWebsite = (url) => {
    //fetch website url and open in new tab
    // repeat fetching for 5 times before giving up
    url = "https://" + url;

    setLoading(true);
    axios.get(url, {}).catch((reason) => {
      if (reason.response.status === 0) {
        window.open(url, "_blank");
        setLoading(false);
      }
    });
  };

  return (
    <Paper elevation={3}>
      <ImageButton
        title="View live site"
        onClick={() => LoadWebsite(props.image.url)}
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
            <ImageBackdrop className="MuiImageBackdrop-root">
              </ImageBackdrop>
      </ImageButton>
    </Paper>
  );
}
