import { Button as TailwindButton } from '@material-tailwind/react';
import type { ButtonProps as TailwindButtonProps } from '@material-tailwind/react';
import { Ref } from 'react';

interface ButtonProps extends TailwindButtonProps {
  children: React.ReactNode;
  ref?: Ref<HTMLButtonElement> | undefined;
}

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
