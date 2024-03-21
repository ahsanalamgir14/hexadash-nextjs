import React from 'react';
import { Modal } from 'antd';
import { Buttons } from '../buttons';

function Modals(props:any) {
  const { onCancel, className, onOk, visible, title, type, color, footer, width, children } = props;

  return (
    <Modal
      title={title}
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
      className={`${className ? className : ''} ${color ? color : ''}`}
      footer={
        footer || footer === null
          ? footer
          : [
              <Buttons type="secondary" key="back" onClick={onCancel} className="text-body dark:text-white/60 hover:text-primary border-[#d9d9d9] dark:border-white/10 hover:border-primary">
                Cancel
              </Buttons>,
              <Buttons type={type} key="submit" onClick={onOk} className="text-body dark:text-white/60 hover:text-primary border-[#d9d9d9] dark:border-white/10 hover:border-primary">
                Save Change
              </Buttons>,
            ]
      }
    >
      {children}
    </Modal>
  );
}


const alertModal = Modal;
export { Modals, alertModal };
