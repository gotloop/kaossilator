import React from "react";

import "./SettingsForm.css";

export const SettingsForm: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <form id="options" name="settings" className="form-container">
      {children}
    </form>
  );
};
