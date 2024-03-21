import React from 'react';

function Heading(props:any) {
  const { as, children, className, id } = props;
  const StyledHeading:any = as ? as.toLowerCase() : 'h1';

  return (
    <StyledHeading className={className} id={id}>
      {children}
    </StyledHeading>
  );
}


export default Heading;
