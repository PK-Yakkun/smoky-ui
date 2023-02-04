import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonStyledProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
const defaultProps: ButtonStyledProps = {
  bgColor: "primary",
};
Default.args = defaultProps;
