import React from "../../../web_modules/react.js";
import "./Selector.css.proxy.js";
import SelectButton from "./SelectButton.js";

const Selector = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("select", {
    className: "sr-only"
  }, props.options.map(opts => SelectButton)));
};

export default Selector;
//# sourceMappingURL=Selector.js.map
