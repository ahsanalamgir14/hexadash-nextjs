import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag } from 'antd';
import React, { useState } from 'react';

const { CheckableTag }:any = Tag;

function Tags(props:any) {
  const [state, setState] = useState({
    checked: true,
    selectedTags: [],
  });

  const { closable, onClose, color, checked, onChange, data, hottags, animate, children } = props;
  const tagsFromServer = data;

  const log = (e:any) => {
    onClose(e);
  };

  const handleChange = (checked:any) => {
    setState({ ...state, checked });
    if (onChange) onChange(checked);
  };

  const handleChangeHot = (tag:any, checked:any) => {
    const { selectedTags }:any = state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t:any) => t !== tag);
    setState({
      ...state,
      selectedTags: nextSelectedTags,
    });
    if (onChange) onChange(nextSelectedTags);
  };

  const { selectedTags } = state;

  return checked ? (
    <CheckableTag props={props} checked={state.checked} onChange={handleChange} />
  ) : hottags ? (
    <>
      <span style={{ marginRight: 8 }}>Categories:</span>
      {tagsFromServer.map((tag:any) => (
        <CheckableTag
          key={tag}
          // checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked:any) => handleChangeHot(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  ) : animate ? (
    <AnimatedTags data={data} onChange={onChange} />
  ) : (
    <Tag closable={closable} onClose={log} color={color}>
      {children}
    </Tag>
  );
}

function AnimatedTags(props:any) {
  const { data, onChange } = props;
  const [state, setState] = useState({ tags: data, inputVisible: false, inputValue: '' });

  const handleClose = (removedTag:any) => {
    const tags = state.tags.filter((tag:any) => tag !== removedTag);
    setState({ ...state, tags });
    if (onChange) onChange(tags);
  };

  const showInput = () => {
    setState({ ...state, inputVisible: true });
  };

  const handleInputChange = (e:any) => {
    setState({ ...state, inputValue: e.target.value });
  };

  const handleInputConfirm = () => {
    const { inputValue } = state;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }

    if (onChange) onChange(tags);
    setState({
      ...state,
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const forMap = (tag:any) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e:any) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );

    return (
      <span key={tag} className="inline-flex items-center text-11 leading-[20px] font-semibold [&>.ant-tag]:bg-[#eff0f3] [&>.ant-tag]:dark:bg-whiteDark [&>.ant-tag]:dark:text-white/60 [&>.ant-tag]:text-11 [&>.ant-tag]:leading-[20px] [&>.ant-tag]:border [&>.ant-tag]:border-[#d9d9d9] [&>.ant-tag]:dark:border-whiteDark [&>span>.ant-tag-close-icon]:relative [&>span>span>svg]:text-dark [&>span>span>svg]:dark:text-white/60">
        {tagElem}
      </span>
    );
  };

  const { tags, inputVisible, inputValue } = state;
  const tagChild = tags && tags.map(forMap);

  return (
    <>
      <div className="mb-2.5">{tagChild}</div>

      {inputVisible && (
        <Input
          autoFocus
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}

      {!inputVisible && (
        <Tag
          onClick={showInput}
          className="inline-flex items-center gap-1 bg-[#eff0f3] dark:bg-whiteDark dark:text-white/60 dark:border-whiteDark h-[22px] px-[9px] font-semibold text-11 [&>span>svg]:text-dark [&>span>svg]:dark:text-white/60"
        >
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
}

export { Tags };
