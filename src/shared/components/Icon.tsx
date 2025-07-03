import React from 'react';

type Icon = {
  style?: string;
  name: string;
  className?: string;
};

function Icon({ style = 'solid', name, className = '', ...props }: Icon): React.ReactNode {
  return (
    <svg className={`icon ${className}`} {...props}>
      <use xlinkHref={`/icons/${style}.svg#${name}`} />
    </svg>
  );
}

export default Icon;
