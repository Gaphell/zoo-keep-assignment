import { render } from '@testing-library/react';

import TimerControls from './timer-controls';

describe('TimerControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimerControls />);
    expect(baseElement).toBeTruthy();
  });
});
