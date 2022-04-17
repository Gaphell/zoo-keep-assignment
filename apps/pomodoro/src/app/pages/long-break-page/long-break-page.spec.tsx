import { render } from '@testing-library/react';
import React from 'react';

import LongBreakPage from './long-break-page';
import { MockFunction } from "../../utils/timer.utils";

describe('LongBreakPage', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<LongBreakPage remainingTime={0} resetTimer={MockFunction} start={MockFunction}/>);
    expect(baseElement).toBeTruthy();
  });
});
