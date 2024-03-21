import {
  UilArrowLeft,
  UilArrowRight
} from '@iconscout/react-unicons';
import { Button, Col, Row, Steps } from 'antd';
import React, { useState } from 'react';

const { Step }:any = Steps;

function StepsWidget({
  isvertical,
  size,
  current,
  direction,
  status,
  progressDot,
  steps,
  isswitch,
  navigation,
  onNext,
  onPrev,
  onDone,
  onChange,
  children,
  height,
  isfinished,
}:any) {
  const [state, setState] = useState({
    currents: current,
  });

  const next = () => {
    const currents = state.currents + 1;
    setState({ currents });
    onNext(currents);
  };

  const prev = () => {
    const currents = state.currents - 1;
    setState({ currents });
    onPrev(currents);
  };

  const { currents } = state;

  const stepStyle = {
    marginBottom: 60,
    boxShadow: '0px -1px 0 0 #e8e8e8 inset',
  };

  const onChanges = (curr:any) => {
    setState({ currents: curr });
    if (onChange) onChange(curr);
  };

  return !isswitch ? (
    <Steps
      type={navigation && 'navigation'}
      style={navigation && stepStyle}
      size={size}
      current={navigation ? currents : current}
      direction={direction}
      status={status}
      progressDot={progressDot}
      onChange={onChanges}
    >
      {children}
    </Steps>
  ) : (
    <>
      <Steps current={currents} direction={direction} status={status} progressDot={progressDot} size={size}>
        {steps !== undefined &&
          steps.map((item:any) => (
            <Step
              className={item.className && item.className}
              icon={item.icon && item.icon}
              key={item.title}
              title={item.title}
            />
          ))}
      </Steps>
      {isvertical ? (
        <div className="steps-wrapper">
          <div
            className="steps-content"
            style={{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }}
          >
            {steps[state.currents].content}
          </div>

          {!isfinished && (
            <>
              <div className="step-action-wrap">
                <div className="step-action-inner">
                  <Row>
                    <Col xs={24}>
                      <div className="steps-action">
                        {state.currents > 0 && (
                          <Button
                            className="dark:border-white/10 dark:bg-white/10 dark:text-white/[.87] hover:border-primary hover:text-primary"
                            onClick={() => prev()}
                          >
                            <UilArrowLeft />
                            Previous
                          </Button>
                        )}

                        {state.currents < steps.length - 1 && (
                          <Button className="btn-next" type="primary" onClick={() => next()}>
                            Save & Next
                            <UilArrowRight />
                          </Button>
                        )}

                        {state.currents === steps.length - 1 && (
                          <Button type="primary" onClick={onDone}>
                            Done
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <div
            className="steps-content"
            style={{ minHeight: height, display: 'flex', justifyContent: 'center', marginTop: 100 }}
          >
            {steps[state.currents].content}
          </div>

          {!isfinished && (
            <>
              <div className="step-action-wrap">
                <div className="step-action-inner">
                  <Row>
                    <Col xs={24}>
                      <div className="steps-action">
                        {state.currents > 0 && (
                          <Button
                            className="dark:border-white/10 dark:bg-white/10 dark:text-white/[.87] hover:border-primary hover:text-primary"
                            onClick={() => prev()}
                          >
                            <UilArrowLeft />
                            Previous
                          </Button>
                        )}

                        {state.currents < steps.length - 1 && (
                          <Button className="btn-next" type="primary" onClick={() => next()}>
                            Save & Next
                            <UilArrowRight />
                          </Button>
                        )}

                        {state.currents === steps.length - 1 && (
                          <Button type="primary" onClick={onDone}>
                            Done
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export { Step, StepsWidget };
