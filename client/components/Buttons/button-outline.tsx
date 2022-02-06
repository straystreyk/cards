import * as React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ButtonPrimaryProps } from "./button-primary";

const useStyles = makeStyles((theme) => ({
  ButtonOutline: {
    color: theme.palette.secondary.main,
    backgroundColor: "transparent",
    fontWeight: 600,
    textTransform: "unset",
    lineHeight: "19.6px",
    transition: "0.35s all ease",
    padding: "17px 86px",
    border: "1px solid #0070F3",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#ffffff",
    },
  },
}));

// interface ButtonOutlineProps extends ButtonPrimaryProps {}

export const ButtonOutline: React.FC<ButtonPrimaryProps> = ({ text }) => {
  const classes = useStyles();
  return <Button className={classes.ButtonOutline}>{text}</Button>;
};
