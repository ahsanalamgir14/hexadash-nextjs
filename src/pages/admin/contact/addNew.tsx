import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'antd';
import ContactCard from './overview/ContactCard';

import ContactLayout from './Layout';

function AddNew() {
  const { users } = useSelector((state:any) => {
    return {
      users: state.Contact.data,
    };
  });

  const [state, setState] = useState({
    selectedRowKeys: 0,
    selectedRows: 0,
    visible: true,
    editVisible: false,
    modalType: 'primary',
    url: null,
    update: {},
  });

  const showEditModal = (data:any) => {
    setState({
      ...state,
      editVisible: true,
      update: data,
    });
  };

  return (
    <ContactLayout>
      {users.map((user:any) => {
        return (
          <Col key={user.id} xxl={6} xl={8} sm={12} xs={24} className="mb-[25px]">
            <ContactCard showEditModal={showEditModal} user={user} />
          </Col>
        );
      })}
    </ContactLayout>
  );
}

export default AddNew;
