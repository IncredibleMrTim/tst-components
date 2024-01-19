interface AccordionProps {
  open?: boolean;
  onClick?: () => void;
  title: string;
  icon?: string;
  iconOpen?: string;
  iconClosed?: string;
  children: React.ReactNode;
}
