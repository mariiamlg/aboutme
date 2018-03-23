import React from "react";

export const ColoredText = props => (
  <span style={{ color: props.color }}>Hello {props.name}</span>
);