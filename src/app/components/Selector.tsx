import React from "react";

import "./Selector.css";
import SelectButton from "./SelectButton";

interface SelectorProps {
  options: string[];
}
const Selector: React.FunctionComponent<SelectorProps> = (
  props: SelectorProps,
) => {
  return (
    <div className="form-group">
      <select className="sr-only">
        {/*props.options.map((opts) => <SelectButton>{opts}</SelectButton>)*/}
      </select>
    </div>
  );
};
export default Selector;