import React from "react";
import "./SelectButton.css";
interface SelectProps {
    children: React.ReactNode[];
}
const SelectButton: React.FunctionComponent<SelectProps> = (props: SelectProps) => {
    return <button>{props.children}</button>;
};
export default SelectButton;
