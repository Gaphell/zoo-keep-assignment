import { render } from '@testing-library/react';
import React from 'react';

import FocusPage from './focus-page';
import { MockFunction } from "../../utils/timer.utils";

describe('FocusPage', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<FocusPage remainingTime={0} resetTimer={MockFunction} start={MockFunction}/>);
    expect(baseElement).toBeTruthy();
  });
});
