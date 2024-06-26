import { UilEllipsisH } from '@iconscout/react-unicons';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DropDown = dynamic(() => import('../../dropdown'), {
  ssr: false,
});

const Heading = dynamic(() => import('../../heading'), {
  ssr: false,
});

const Card = dynamic(() => import('antd').then((mod) => mod.Card), {
  ssr: false,
});

function Cards(props:any) {
  const {
    title,
    children,
    more,
    moreText,
    size,
    headless,
    caption,
    isbutton,
    bodyStyle,
    headStyle,
    border,
    bodypadding,
    className,
  } = props;

  return (
    <>
      {!headless ? (
        <Card
          size={size}
          title={title}
          bodyStyle={bodyStyle && bodyStyle}
          headStyle={headStyle && headStyle}
          bordered={border.toString()}
          className={className}
          extra={
            <div className="flex items-center gap-[15px]">
              {isbutton && isbutton}

              {more && 
              
                <DropDown customContent={more} placement="bottom">
                  <button
                    className="flex items-center group dark:text-white/[.87]">
                    {!moreText ? 
                      <UilEllipsisH className="w-[24px] h-[24px] text-light dark:text-white/60 dark:group-hover:text-white/[.87]" /> : 'More'
                    }
                  </button>
                </DropDown>
              
              }
            </div>
          }
          style={{ width: '100%' }}
        >
          {children}
        </Card>
      ) : (
        <Card
          bodyStyle={bodyStyle && bodyStyle}
          size={size}
          style={{ width: '100%' }}
          bordered={border.toString()}
          className={className}
        >
          {title && <Heading as="h4">{title}</Heading>}
          {caption && <p className="dark:text-white/60">{caption}</p>}
          {children}
        </Card>
      )}
    </>
  );
}

Cards.defaultProps = {
  border: false,
};

export { Cards };
