import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Box
        sx={{
          mx: "auto",
          width: 190,
          p: 0.25,
          m: 0.25,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Typography variant="h4" color="primary">
          React posts
        </Typography>
      </Box>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" href="/">
          Home
        </Button>
        <Button variant="outlined" href="/create">
          New blog
        </Button>
      </Stack>
    </nav>
  );
};

export default NavBar;
