/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "block-no-empty": true,
    "custom-property-pattern": "k-",
  }
};
