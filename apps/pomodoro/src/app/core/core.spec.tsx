import { render } from '@testing-library/react';
import React from 'react';

import Core from './core';

describe('Core', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Core />);
    expect(baseElement).toBeTruthy();
  });
});
