import Button from "./pages";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const button: Story = {
  args: {
    button: {
      subject: "버튼 텍스트",
      url: "연결 할 주소",
      logo: "로고 이미지",
      color: "버튼 색",
      textcolor: "텍스트 색",
    },
  },
};
