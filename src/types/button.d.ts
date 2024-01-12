interface ButtonProps extends TailwindComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement> | undefined;
  className?: string;
}
