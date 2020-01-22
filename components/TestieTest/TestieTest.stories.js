import React from "react";
import { storiesOf } from "@storybook/react";
import TestieTest from "./TestieTest";
let stories = storiesOf("Components/TestieTest", module);

stories.addParameters({ component: TestieTest });

stories.add("Default", () => <TestieTest />);