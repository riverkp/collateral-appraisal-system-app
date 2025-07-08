import type { HTMLAttributes, ReactNode } from 'react';
import Icon from './Icon';

interface ResizableSidebarProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  openedWidth: string;
  closedWidth: string;
}

interface ResizeButtonProps {
  onClick: () => void;
}

const ResizableSidebar = ({
  isOpen,
  onToggle,
  children,
  openedWidth,
  closedWidth,
  ...props
}: ResizableSidebarProps) => {
  return (
    <div
      className={`m-6 flex flex-col gap-8 ${isOpen ? openedWidth : closedWidth} ${props.className}`}
    >
      <div>
        <ResizeButton onClick={onToggle} />
      </div>
      {isOpen ? <div>{children}</div> : <div></div>}
    </div>
  );
};

const ResizeButton = ({ onClick }: ResizeButtonProps) => {
  return (
    <div onClick={onClick}>
      <Icon style="light" name="angles-right" className="text-stone-300" />
    </div>
  );
};

export default ResizableSidebar;
