import React, { useState } from 'react';
import { Cascader } from 'antd';

function CasCader(props:any) {
  const { data, defaultValue, trigger, onChange, isShowSearch, loading, placeholder } = props;

  const options = data;
  const [state, setState] = useState({
    options,
  });

  const onChangeEvent = (value:any) => {
    onChange(value);
  };

  const onChangeLoading = (value:any, selectedOptions:any) => {
    onChange(value, selectedOptions);
  };

  const filter = (inputValue:any, path:any) => {
    return path.some((option:any) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };

  const loadData = (selectedOptions:any) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setState({
        options: [...state.options],
      });
    }, 1000);
  };

  return (
    <Cascader
      options={options}
      expandTrigger={trigger}
      defaultValue={defaultValue}
      onChange={loading ? onChangeLoading : onChangeEvent}
      showSearch={isShowSearch && { filter }}
      loadData={loadData}
      placeholder={placeholder ? placeholder : 'Please Select'}
      changeOnSelect={!!loading}
    />
  );
}

export { CasCader };
