import * as React from "react";
import * as _ from "lodash";
import { default as ToggleButtonDefault } from "@mui/material/ToggleButton";
import { ButtonContext } from "../TabList";

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
  const { setWidgetValue } = React.useContext(ButtonContext);

  const handleButton = React.useCallback(
    (e) => {
      setActive((p) => !p);
      setWidgetValue((p: Record<string, boolean>) => {
        if (p[e.target.name]) return _.omit(p, e.target.name);
        return { ...p, [e.target.name]: !!e.target.value };
      });
    },
    [setActive]
  );

  return (
    <ToggleButtonDefault
      onClick={handleButton}
      selected={active ?? false}
      name={name}
      value={value}
    >
      {title}
    </ToggleButtonDefault>
  );
};
