import { render } from '@testing-library/react';
import React from 'react';

import ShortBreakPage from './short-break-page';
import { MockFunction } from "../../utils/timer.utils";

describe('ShortBreakPage', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<ShortBreakPage remainingTime={0} resetTimer={MockFunction} start={MockFunction}/>);
    expect(baseElement).toBeTruthy();
  });
});
