import type { ButtonHTMLAttributes } from 'react';
import Icon from '../Icon';

interface ReturnButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ReturnButton = ({}: ReturnButtonProps) => {
  return (
    <div>
      <Icon style="regular" name="chevron-left" />
    </div>
  );
};

export default ReturnButton;
