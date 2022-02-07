import * as React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ButtonPrimary: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 600,
    textTransform: "unset",
    lineHeight: "19.6px",
    padding: "17px 86px",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export interface ButtonPrimaryProps {
  text: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text }) => {
  const classes = useStyles();
  return <Button className={classes.ButtonPrimary}>{text}</Button>;
};
