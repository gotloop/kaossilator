import React from "react";

import "./selector.component.css";

interface SelectorItemProps {
  label: string;
  value: string;
}

interface SelectorProps {
  name?: string;
  id: string;
  options: SelectorItemProps[];
  value: string;
  change: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Selector: React.FC<SelectorProps> = ({
  options,
  change,
  value,
  id,
  name,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{name}</label>
      <select id={id} onChange={change} value={value}>
        {options.map((option) => (
          <option key={String(option.value)} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
