import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic'

const RightAside = dynamic(() => import('./RightAside'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
});
const CreatePost = dynamic(() => import('./CreatePost'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
});
const AllPosts = dynamic(() => import('./Posts'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
});


function TimelineContent() {
  const { posts } = useSelector((state:any) => {
    return {
      posts: state.Profile.posts,
    };
  });
  return (
    <Row gutter={25}>
      <Col xxl={16} xs={24}>
        <CreatePost />
        {posts
          .sort((a:any, b:any) => b.time - a.time)
          .map((post:any, index:any) => {
            return (
              <AllPosts key={index} {...post} />
            );
          })}
      </Col>
      <Col xxl={8} xs={24}>
        <RightAside />
      </Col>
    </Row>
  );
}

export default TimelineContent;
