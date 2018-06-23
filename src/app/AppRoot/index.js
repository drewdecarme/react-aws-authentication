import React from "react";
import Main from "../Main/index.js";
import Authentication, { configureAmplifyAuth } from "../Authentication";
configureAmplifyAuth();

const AppRoot = () => (
  <Authentication>{props => <Main {...props} />}</Authentication>
);

export default AppRoot;
