import React from 'react';
import { Row, Col } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Unicons from '@iconscout/react-unicons';
import { PageHeaders } from '@/components/page-headers';
import Heading from '@/components/heading';

function UnIconsSvg() {
  return (
    <>
      <PageHeaders
        title="Unicons Icon"
        className="flex justify-between items-center bg-transparent pt-[15px] px-8 pb-6"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={15}>
          <Col xs={24}>
            <>
              <div className="bg-white dark:bg-white/10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="py-[16px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b">
                  <Heading as="h4" className="mb-0 text-lg font-medium">
                    Simply beautiful open source icons
                  </Heading>
                </div>
                <div className="p-[25px]">
                  <Row gutter={15}>
                    {Object.keys(Unicons).map((icon) => {
                      const IconTag = Unicons[icon];
                      return (
                        <Col xl={6} md={12} xs={24} key={icon}>
                          <div className="flex items-center mb-[15px]">
                            <IconTag className="w-[18px] h-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white/60" />
                            <span className="text-body dark:text-white/60">{icon.substring(3)}</span>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default UnIconsSvg;
