import Icon from '@/shared/components/Icon';
import type { HTMLAttributes } from 'react';

interface TitleInformationHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const TitleInformationHeader = ({ title, ...props }: TitleInformationHeaderProps) => {
  return (
    <div {...props}>
      <div className="flex gap-4 items-center my-4">
        <p className="font-medium m-0">{title}</p>
        <button>
          <Icon style="solid" name="copy" className="text-cyan-600" />
        </button>
      </div>
    </div>
  );
};

export default TitleInformationHeader;
