import React from "react";

import "./Selector.css";

interface SelectorProps {
  options: string[];
}

export const Selector: React.FC<SelectorProps> = (
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
