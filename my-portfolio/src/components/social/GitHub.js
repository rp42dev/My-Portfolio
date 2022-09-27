import { Tooltip, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function GitHub() {
    return (
        <Tooltip title="GitHub">
            <IconButton sx={{ p: 0 }} color='secondary' size="large" href="https://github.com/rp42dev" target="_blank">
                <GitHubIcon fontSize="4rem" />
            </IconButton>
        </Tooltip>
    );
}