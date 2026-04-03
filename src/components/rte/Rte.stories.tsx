import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Rte } from "./Rte";
import { lexicalToText } from "@/utils/lexical";

const meta = {
  title: "Components/RTE",
  component: Rte,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    value: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Rte>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to create a Lexical state with text content
function createTextState(text: string): string {
  return JSON.stringify({
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normalcy",
              style: "",
              text,
              type: "text",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
        },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      type: "root",
      version: 1,
    },
  });
}

function RteWrapper(props: Parameters<typeof Rte>[0]) {
  const [value, setValue] = useState<string | undefined>(props.value);

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <div style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>
        Text content: <strong>{value ? lexicalToText(value) || "(empty)" : "(empty)"}</strong>
      </div>
      <Rte
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.onChange?.(newValue);
        }}
      />
    </div>
  );
}

export const Default: Story = {
  render: (args) => <RteWrapper {...args} />,
  args: {},
};

export const WithInitialContent: Story = {
  render: (args) => <RteWrapper {...args} />,
  args: {
    value: createTextState(
      "This is a rich text editor with formatting capabilities."
    ),
  },
};

export const Disabled: Story = {
  render: (args) => <RteWrapper {...args} />,
  args: {
    disabled: true,
    value: createTextState("This editor is disabled and read-only."),
  },
};

export const WithMultipleLines: Story = {
  render: (args) => <RteWrapper {...args} />,
  args: {
    value: createTextState(
      "You can edit this text. Try using the formatting buttons to make text bold, italic, or underlined. You can also create lists and add images."
    ),
  },
};
