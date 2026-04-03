import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";

const meta = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

function ColorPickerWrapper(props: Parameters<typeof ColorPicker>[0]) {
  const [color, setColor] = useState(props.value || "#3174ad");

  return (
    <ColorPicker
      {...props}
      value={color}
      onChange={(value) => {
        setColor(value.toHexString());
        props.onChange?.(value);
      }}
    />
  );
}

export const Default: Story = {
  render: (args) => <ColorPickerWrapper {...args} />,
  args: {
    value: "#3174ad",
  },
};

export const Red: Story = {
  render: (args) => <ColorPickerWrapper {...args} />,
  args: {
    value: "#e74c3c",
  },
};

export const Green: Story = {
  render: (args) => <ColorPickerWrapper {...args} />,
  args: {
    value: "#27ae60",
  },
};

export const Disabled: Story = {
  render: (args) => <ColorPickerWrapper {...args} />,
  args: {
    value: "#3174ad",
    disabled: true,
  },
};

export const WithoutValue: Story = {
  render: (args) => <ColorPickerWrapper {...args} />,
  args: {},
};
