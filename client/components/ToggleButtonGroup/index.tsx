import * as React from "react";
import { ToggleButton } from "../ToggleButton";

// interface ToggleButtonGroupProps {}

export const ToggleButtonGroup: React.FC = () => {
  const [buttonsValues, setButtonValue] = React.useState<[] | string[]>([]);

  return (
    <>
      <ToggleButton title="one" name="jopa" value="One" />
    </>
  );
};
