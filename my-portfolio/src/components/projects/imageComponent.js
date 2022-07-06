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

const spinner = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Loading...</title>
  <style>
    body {
        background-color: #28282a;
    }
    #loader {
      border: 12px solid #b37142;
      border-radius: 50%;
      border-top: 12px solid #28282a;
      width: 70px;
      height: 70px;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
    
    .center {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  </style>
</head>

<body>
  <div id="loader" class="center"></div>
  <script>
    document.onreadystatechange = function() {
      if (document.readyState !== "complete") {
        document.querySelector(
        "body").style.visibility = "hidden";
        document.querySelector(
        "#loader").style.visibility = "visible";
      } else {
        document.querySelector(
        "#loader").style.display = "none";
        document.querySelector(
        "body").style.visibility = "visible";
      }
    };
  </script>
</body>

</html>
`;

export default function ImageComponent(props) {
  const [loading, setLoading] = useState(false);

  const LoadWebsite = (url) => {
    //fetch website url and open in new tab
    // repeat fetching for 5 times before giving up
    url = "https://" + url;
    setLoading(true);
    const tab = window.open("about:blank");
    tab.document.write(spinner);
    axios.get(url, {}).catch((reason) => {
      if (reason.response.status === 0) {
        setTimeout(() => {
          tab.location = url;
          tab.focus();
          setLoading(false);
        }, 200);
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
        <ImageBackdrop className="MuiImageBackdrop-root"></ImageBackdrop>
      </ImageButton>
    </Paper>
  );
}
