import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="#fff">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CirclePogressBar({ progressModule }) {
  const [progress, setProgress] = React.useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  React.useEffect(() => {
    setProgress(progressModule);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CircularProgressWithLabel value={progress} />
    </ThemeProvider>
  );
}