import { render } from '@testing-library/react';
import React from 'react';

import TimerContainer from './timer-container';
import { FocusPage } from "../../pages";

const Component = TimerContainer(FocusPage, 0);

describe('TimerContainer', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Component/>);
    expect(baseElement).toBeTruthy();
  });
});
