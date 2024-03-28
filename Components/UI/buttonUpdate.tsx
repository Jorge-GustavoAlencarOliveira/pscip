import React, { ButtonHTMLAttributes } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick?: (() => void) | (() => Promise<void>);
}

export const ButtonUpdate = ({
  handleClick,
  children,
  ...props
}: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        handleClick();
        toast.success('Alterações salvas');
        router.replace(router.asPath);
      }}
      className="btn btn-success float-end mt-4"
      {...props}
    >
      {children}
    </button>
  );
};
