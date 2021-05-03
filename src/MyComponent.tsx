import React from 'react';

export enum Test {
  test1 = 'test1',
}

const mapping = {
  [Test.test1]: {
    data: 'data for test1'
  },
};

export type MyComponentProps = {
  someProp?: Test;
}

export const MyComponent = ({someProp}: MyComponentProps) => 
  (<div>Component {someProp && mapping[someProp].data}</div>)