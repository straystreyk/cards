import * as React from "react";
import { default as ToggleButtonDefault } from "@mui/material/ToggleButton";

interface ToggleButtonProps {
  value: string | boolean;
  name: string;
  title: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  name,
  value,
  title,
}) => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <ToggleButtonDefault
      onClick={() => setActive((p) => !p)}
      selected={active ?? false}
      name={name}
      value={value}
    >
      {title}
    </ToggleButtonDefault>
  );
};
