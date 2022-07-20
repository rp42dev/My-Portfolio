import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "react-reveal/Fade";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardComponent(props) {
  return (
    <Fade bottom distance="30%" delay={400}>
      <Card className="border-left" elevation={6} square sx={{ minWidth: 275 }}>
        <CardContent>
          {props.title && (
            <Typography
              color="primary.light"
              gutterBottom
              variant="h6"
              component="h2"
            >
              {props.title}
            </Typography>
          )}

          {props.text && (
            <Typography color="primary" variant="body2" component="p">
              {props.text}
            </Typography>
          )}
        </CardContent>
        {props.actions && (
          <CardActions>
            {props.actions.map((action, index) => (
              <Button key={index} variant="contained" color="primary">
                {action}
              </Button>
            ))}
          </CardActions>
        )}
      </Card>
    </Fade>
  );
}
