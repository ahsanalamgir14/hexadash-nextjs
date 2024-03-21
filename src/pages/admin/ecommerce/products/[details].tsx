import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PageHeaders } from '@/components/page-headers';

import { filterSinglePage } from '@/redux/product/actionCreator';

import dynamic from 'next/dynamic'
const DetailsRight = dynamic(() => import('./overview/DetailsRight'), {
  loading: () => (
    <>
      <Skeleton active />
    </>
  ),
});

function ProductDetails() {
  const router = useRouter();
  const { asPath } = router;
  const productID = asPath.split('/')[4];

  const { products, product } = useSelector((state:any) => {
    return {
      product: state.product.data,
      products: state.products.data,
    };
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (filterSinglePage) {
      // @ts-ignore
      dispatch(filterSinglePage(parseInt(productID, 10), products));
    }
  }, [dispatch, productID]);

  const { img, category } = product[0];

  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Product Details',
    },
  ];

  return (
    <>
      <PageHeaders
        routes={PageRoutes}
        title="Product Details"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <div className="bg-white dark:bg-white/10 p-[25px] rounded-[10px]">
          <div className="p-[15px] md:px-0">
            <Row gutter={30}>
              <Col xs={24} lg={10} className="lg:mb-5">
                <figure className="mb-0">
                  <img className="w-full rounded-[10px]" src={`/hexadash-nextjs/${img}`} alt="" />
                </figure>
                <div className="mt-[15px] md:mb-[15px]">
                  <div className="gap-[15px] flex items-center flex-wrap">
                    {products.length
                      ? products
                          .filter((value:any) => {
                            return value.category === category;
                          })
                          .map((value:any, index:any) => {
                            return (
                              index <= 3 && (
                                <figure key={index} className="mb-0 flex-[0_0_15%]">
                                  <Link href={`/admin/ecommerce/products/${value.id}`}>
                                    <img
                                      className="w-full min-w-[90px] md:min-w-[60px] rounded-10 md:rounded-4"
                                      src={`/hexadash-nextjs/${value.img}`}
                                      alt=""
                                    />
                                  </Link>
                                </figure>
                              )
                            );
                          })
                      : null}
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={14}>
                <DetailsRight product={product[0]} />
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;
