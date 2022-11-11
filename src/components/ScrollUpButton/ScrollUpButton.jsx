import { KeyboardArrowUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ScrollUpButton({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleOnScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleOnClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleOnScroll);
      return () => window.removeEventListener(`scroll`, handleOnScroll);
    }
  });

  return (
    <>
      {show && (
        <IconButton
          onClick={handleOnClick}
          sx={{
            zIndex: 2,
            position: "fixed",
            bottom: "2vh",
            backgroundColor: "#00C19C",
            color: "black",
            "&:hover, &.Mui-focusVisible": {
              transition: "0.3s",
              color: "#397BA6",
              backgroundColor: "#8A1AD1",
            },
            right: "5%",
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      )}
    </>
  );
}
