interface AccordionProps {
  open?: boolean;
  onClick?: () => void;
  title: string;
  icon?: string;
  children: React.ReactNode;
}
