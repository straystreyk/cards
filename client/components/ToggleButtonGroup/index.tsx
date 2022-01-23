import * as React from "react";
import { ToggleButton } from "../ToggleButton";

// interface ToggleButtonGroupProps {}

export const ToggleButtonGroup: React.FC = () => {
  return (
    <>
      <ToggleButton title="one" name="jopa" value="false" />
      <ToggleButton title="one" name="jopa2" value="false" />
      <ToggleButton title="one" name="jopa3" value="false" />
      <ToggleButton title="one" name="jopa4" value="false" />
    </>
  );
};
