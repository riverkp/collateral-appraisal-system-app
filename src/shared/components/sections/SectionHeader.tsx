import type { HTMLAttributes } from 'react';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}
const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div>
      <div className="text-lg">{title}</div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default SectionHeader;