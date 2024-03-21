import React from 'react';
import { Alert } from 'antd';

function AlertText(props:any) {
  const { type, icon, message, description, showIcon, closable, closeIcon } = props;

  return (
    <Alert
      message={message}
      type={type}
      description={description}
      closable={closable}
      showIcon={showIcon && showIcon}
      closeIcon={closeIcon && closeIcon}
      icon={icon && icon}
    />
  );
}

export default AlertText;
