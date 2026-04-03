import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, CalendarView, type CalendarEvent } from "./Calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    view: {
      control: "select",
      options: Object.values(CalendarView),
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Meeting",
    startDate: new Date(2024, 3, 15, 10, 0),
    endDate: new Date(2024, 3, 15, 11, 0),
    color: "#3174ad",
  },
  {
    id: "2",
    title: "Conference",
    startDate: new Date(2024, 3, 16, 14, 0),
    endDate: new Date(2024, 3, 16, 16, 0),
    color: "#e74c3c",
  },
];

export const Month: Story = {
  args: {
    events: sampleEvents,
    view: CalendarView.MONTH,
    date: new Date(2024, 3, 1),
    onSelectEvent: (event) => console.log("Selected event:", event),
    onViewChange: (view) => console.log("View changed to:", view),
  },
};

export const Week: Story = {
  args: {
    ...Month.args,
    view: CalendarView.WEEK,
  },
};

export const Day: Story = {
  args: {
    ...Month.args,
    view: CalendarView.DAY,
  },
};

export const WithMultipleEvents: Story = {
  args: {
    events: [
      ...sampleEvents,
      {
        id: "3",
        title: "Lunch",
        startDate: new Date(2024, 3, 15, 12, 0),
        endDate: new Date(2024, 3, 15, 13, 0),
        color: "#27ae60",
      },
      {
        id: "4",
        title: "Team Standup",
        startDate: new Date(2024, 3, 17, 9, 30),
        endDate: new Date(2024, 3, 17, 10, 0),
        color: "#f39c12",
      },
    ],
    view: CalendarView.MONTH,
    date: new Date(2024, 3, 1),
    onSelectEvent: (event) => console.log("Selected event:", event),
    onViewChange: (view) => console.log("View changed to:", view),
  },
};

export const Empty: Story = {
  args: {
    events: [],
    view: CalendarView.MONTH,
    date: new Date(2024, 3, 1),
    onSelectEvent: (event) => console.log("Selected event:", event),
    onViewChange: (view) => console.log("View changed to:", view),
  },
};
