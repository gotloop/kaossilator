import { css } from "../../../../styled-system/css";

/**
 * Shared look of a pressable plastic key, used by Button, ToggleButton,
 * SegmentedControl and Tabs. These are `css.raw` objects so Panda can extract
 * them when they're imported by name into another file.
 */

/** Light grey plastic key (Braun calculator / radio key). */
export const keyLight = css.raw({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  fontFamily: "body",
  fontWeight: "600",
  letterSpacing: "0.04em",
  color: "fg",
  background: "linear-gradient(180deg, #fbfbf9 0%, #ebebe7 55%, #dfdfda 100%)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border",
  borderRadius: "key",
  boxShadow: "keyRaised",
  cursor: "pointer",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  touchAction: "manipulation",
  transitionProperty: "transform, box-shadow, background",
  transitionDuration: "key",
  transitionTimingFunction: "ease-out",
  _hover: {
    background: "linear-gradient(180deg, #ffffff 0%, #f0f0ec 55%, #e3e3de 100%)",
  },
  _active: {
    transform: "translateY(2px)",
    boxShadow: "keyPushed",
    background: "linear-gradient(180deg, #e9e9e5 0%, #e1e1dc 100%)",
  },
  _focusVisible: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "focus",
    outlineOffset: "2px",
  },
  _disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
    transform: "none",
    boxShadow: "keyRaised",
  },
});

/** Latched-down state, shared by toggles, selected segments and tabs. */
export const keyLatched = css.raw({
  transform: "translateY(2px)",
  boxShadow: "keyLatched",
  background: "linear-gradient(180deg, #d3d3ce 0%, #cbcbc6 100%)",
  _hover: {
    background: "linear-gradient(180deg, #d8d8d3 0%, #cfcfca 100%)",
  },
});

/** Black key (T1000 / dial-section style). */
export const keyDark = css.raw({
  color: "fg.onDark",
  background: "linear-gradient(180deg, #3d3d3b 0%, #262625 60%, #1b1b1a 100%)",
  borderColor: "aluminium.950",
  boxShadow: "keyDarkRaised",
  _hover: {
    background: "linear-gradient(180deg, #464644 0%, #2c2c2b 60%, #1f1f1e 100%)",
  },
  _active: {
    transform: "translateY(2px)",
    boxShadow: "keyDarkPushed",
    background: "linear-gradient(180deg, #232322 0%, #1b1b1a 100%)",
  },
});

/** Orange key (the Braun orange button). */
export const keyOrange = css.raw({
  color: "white",
  textShadow: "0 1px 0 rgba(0,0,0,.25)",
  background: "linear-gradient(180deg, #ff8a5a 0%, #ff5a1f 60%, #ee4b12 100%)",
  borderColor: "braunOrange.600",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,.45), inset 0 -2px 0 rgba(0,0,0,.12), 0 2px 0 #b8380c, 0 3px 5px rgba(0,0,0,.3)",
  _hover: {
    background: "linear-gradient(180deg, #ff9568 0%, #ff6429 60%, #f2521a 100%)",
  },
  _active: {
    transform: "translateY(2px)",
    boxShadow:
      "inset 0 1px 3px rgba(0,0,0,.25), 0 0 0 #b8380c, 0 1px 1px rgba(0,0,0,.3)",
    background: "linear-gradient(180deg, #f2521a 0%, #e8480f 100%)",
  },
});

/** A recess cut into the panel that holds a group of keys. */
export const well = css.raw({
  display: "inline-flex",
  padding: "1",
  gap: "1",
  bg: "surface.well",
  borderRadius: "8px",
  boxShadow: "well",
});

/** Small uppercase engraved label printed on the panel. */
export const engraved = css.raw({
  fontFamily: "body",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "fg.muted",
});
