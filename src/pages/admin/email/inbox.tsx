import React from 'react';
import dynamic from 'next/dynamic';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import Content from './overview/Content';

const EmailLayout = dynamic(() => import('./Layout'), {
  loading: () => (
    <div className="h-screen flex justify-center items-center">
      <Spin />
    </div>
  ),
});

function Inbox() {
  const [searchData, email] = useSelector((state:any) => [state.headerSearchData, state.email.allMessage]);

  return (
    <EmailLayout>
      <Content
        email={email.filter((value:any) => {
          return value.type === 'inbox';
        })}
        searchData={searchData}
      />
    </EmailLayout>
  );
}

export default Inbox;
