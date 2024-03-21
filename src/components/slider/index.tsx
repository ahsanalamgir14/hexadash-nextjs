import { FrownOutlined } from '@ant-design/icons';
import { Col, InputNumber, Row, Slider } from 'antd';
import React, { useState } from 'react';

function Sliders(props:any) {
  const { defaultValue, range, min, max, step, input, icon, marks, vertical, defaultValues, onAfterChange, onChange } =
    props;

  const [state, setState]:any = useState({
    inputValue: 1,
    mini: min,
    maxi: max,
  });

  const onChanges = (value:any) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(value)) {
      return;
    }

    setState({
      ...state,
      inputValue: value,
    });
    if (onChange) onChange(value);
  };

  const handleChange = (value:any) => {
    setState({ ...state, value });
    if (onChange) onChange(value);
  };

  const { inputValue, value, mini, maxi } = state;
  const mid = ((maxi - mini) / 2).toFixed(5);
  const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
  const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';

  const onAfterChanges = (values:any) => {
    if (onAfterChange) onAfterChange(values);
  };

  return input ? (
    <Row>
      <Col xl={20} xs={24}>
        <Slider
          min={min}
          max={max}
          onChange={onChanges}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={step}
        />
      </Col>
      <Col xl={4} xs={24}>
        <InputNumber min={min} max={max} value={inputValue} onChange={onChanges} step={step} />
      </Col>
    </Row>
  ) : icon ? (
    <div>
      <FrownOutlined style={{ color: preColor }} />
      <Slider min={mini} max={maxi} onChange={handleChange} value={value} />
      <FrownOutlined style={{ color: nextColor }} />
    </div>
  ) : (
    <Slider
      marks={marks}
      defaultValue={defaultValue || defaultValues}
      range={range}
      step={step}
      vertical={vertical}
      onAfterChange={onAfterChanges}
      onChange={onChange}
      max={max}
      min={min}
    />
  );
}

export { Sliders };
