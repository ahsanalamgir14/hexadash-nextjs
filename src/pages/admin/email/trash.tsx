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

function Trash() {
  const { searchData, email } = useSelector((state:any) => {
    return {
      searchData: state.headerSearchData,
      email: state.email.allMessage,
    };
  });
  return (
    <EmailLayout>
      <Content
        email={email.filter((value:any) => {
          return value.type === 'trash';
        })}
        searchData={searchData}
      />
    </EmailLayout>
  );
}

export default Trash;
