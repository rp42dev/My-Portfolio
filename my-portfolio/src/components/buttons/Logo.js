import { Typography, Button } from "@mui/material";

const logoStyle = {
    color: "#b37142",
    border: "#b37142 1px solid",
    padding: "0 5px",
    borderRadius: "5px",
};


export default function Logo() {
    return (
        <Button href="/" color="secondary" sx={{ paddingLeft: 0, textTransform: "none" }}>
        <Typography
            variant="h3"
            component="div"
            sx={{
                fontWeight: "bolder",
                
                letterSpacing: "0.1rem",
                color: "#D8D8D8",
            }}
        >   rp
            <span style={logoStyle}>42</span>
        </Typography>
        </Button>
    );
}
