import Topbar from "./pages";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Topbar> = {
  component: Topbar,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Topbar>;

export const name: Story = {
  args: {
    privacy: {
      name: "이름",
    },
  },
};
