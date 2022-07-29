import React from 'react';

import { WithChildren } from 'interfaces';

export interface DebugProps extends WithChildren {
  title?: string;
  data: any;
}

const Debug = ({
  data,
  children,
  title,
}: DebugProps) => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="mt-8 max-w-full text-xs text-blue bg-gray-1 p-3 rounded border">
      { title && <h2 className="font-bold mb-4">{title}</h2>}
      <pre className="whitespace-normal break-words">
        {data && JSON.stringify(data)}
        {children}
      </pre>
    </div>
  );
};

export default Debug;
