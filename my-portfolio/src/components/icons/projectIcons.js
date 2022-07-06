import * as React from 'react';
import { Tooltip, IconButton, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


export default function ProjectIcons(props) {
    return (
      <Stack direction="row" spacing={2}>
        {props.github !== undefined ? (
          <>
            <Tooltip title="On GitHub">
              <IconButton
                size="small"
                component={Link}
                onClick={() => window.open(props.github, "_blank")}
                color="secondary"
                aria-label="On GitHub"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Website">
              <IconButton
                size="small"
                component={Link}
                onClick={() => window.open(props.url, "_blank")}
                color="secondary"
                aria-label="Website"
              >
                <RemoveRedEyeIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <Tooltip title="Website">
            <IconButton
              size="small"
              component={Link}
              onClick={() => window.open(props.url, "_blank")}
              color="secondary"
              aria-label="Website"
            >
              <RemoveRedEyeIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    );
}