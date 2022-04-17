import { render } from '@testing-library/react';

import PomodoroDetails from './pomodoro-details';

describe('PomodoroDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PomodoroDetails />);
    expect(baseElement).toBeTruthy();
  });
});
