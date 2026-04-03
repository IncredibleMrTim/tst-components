export interface EventDTO {
  id: string;
  title: string;
  description?: string;
  startDate: Date | string;
  endDate?: Date | string;
  color?: string;
  contactFirstName?: string;
  contactLastName?: string;
  contactPhone?: string;
  contactEmail?: string;
}

export enum CalendarView {
  DAY = "day",
  WEEK = "week",
  WORK_WEEK = "work_week",
  MONTH = "month",
  AGENDA = "agenda",
}
