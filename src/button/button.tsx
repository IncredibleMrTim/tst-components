import { Button as TailwindButton } from '@material-tailwind/react';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  ...rest
}) => {
  return (
    <TailwindButton
      placeholder={undefined}
      className={`flex items-center gap-1.5 py-2 px-5 font-normal hover:bg-tst-primary-slate-dark ${className}`}
      role='button'
      onClick={onClick}
      {...rest}
    >
      {children}
    </TailwindButton>
  );
};
