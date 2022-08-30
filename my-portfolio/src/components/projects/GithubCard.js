import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Fetch from "../../utils/Fetch";

import useMediaQuery from "../../hooks/viewPortWidth";

export default function BasicCard() {
  const matches = useMediaQuery("(min-width:600px)");
  const [data, setData] = React.useState([]);
  const [repos, setRepos] = React.useState([]);
  const avatar = data.avatar_url;
  const name = data.name;
  const description = data.bio;
  const url = data.html_url;
  const publicRepos = data.public_repos;
  const followers = data.followers;
  const following = data.following;

  React.useEffect(() => {
    Fetch("https://api.github.com/users/Raivis80")
      .then(data => {
        setData(data);
      }).catch(error => {
        console.error(error);
      }
      );
  }, []);
  React.useEffect(() => {
    Fetch("https://api.github.com/users/Raivis80/repos")
      .then(data => {
        setRepos(data);
      }).catch(error => {
        console.error(error);
      }
      );
  }, []);

  return (
    <Paper
      sx={{
        p: 4,
        margin: "auto",
        maxWidth: 800,
        minWidth: 275,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      elevation={4}
    >
      <Box
        classList="avatar-container"
        sx={{
          mb: 4,
          minWidth: 275,
          display: "flex",
          justifyContent: "center",
          flexDirection: matches ? "row" : "column",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button
            sx={{ borderRadius: "50%" }}
            href={data.html_url}
            target="_blank"
          >
            <Avatar
              alt="Remy Sharp"
              src={avatar}
              sx={{ width: 150, height: 150 }}
            />
          </Button>
        </Stack>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          classList="name-container"
        >
          <Box>
            <Typography color={"primary"} variant="h4" component="div">
              {name}
            </Typography>

            <Typography color={"primary.dark"} mb={1} variant="body1">
              {description}
            </Typography>
          </Box>

          <Typography
            color={"primary.dark"}
            variant="body2"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Followers: {followers}</span>
            <span>Following: {following}</span>
            <span>Repos: {publicRepos}</span>
          </Typography>
        </Box>
      </Box>

      <Box>
        {repos.map((repo) => (
          <Button
            href={repo.html_url}
            target="_blank"
            color={"secondary"}
            key={repo.id}
            size="small"
          >
            {repo.name}
          </Button>
        ))}
      </Box>
    </Paper>
  );
}
