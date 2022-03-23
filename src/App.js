import NavBar from "./components/NavBar";
import Home from "./views/Home";

import { Grid } from "@mui/material";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <div className="App">
          <NavBar />
          <div className="content">
            <Home />
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default App;
