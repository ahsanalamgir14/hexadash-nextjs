import { UilCheck } from '@iconscout/react-unicons';
import React from 'react';

function List(props:any) {
  const { text } = props;

  return (
    <div className="flex items-center mb-3 text-body dark:text-white/60">
      <span className="ltr:mr-2.5 rtl:ml-2.5">
        <UilCheck className="w-6 h-6 text-success" />
      </span>
      <span>{text}</span>
    </div>
  );
}

export { List };
