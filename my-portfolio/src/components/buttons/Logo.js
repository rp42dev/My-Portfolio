import { Typography, Button } from "@mui/material";

export default function Logo() {
    return (
        <Button href="/" color="secondary" sx={{ textTransform: "none" }}>
        <Typography
            variant="h3"
            component="div"
            sx={{
                fontWeight: "bolder",
                
                letterSpacing: "0.1rem",
                color: "primary.main",
            }}
        >   rp
            <span className="logo">42</span>
        </Typography>
        </Button>
    );
}
