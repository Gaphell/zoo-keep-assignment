import { render } from '@testing-library/react';

import LinearProgressBar from './linear-progress-bar';

describe('LinearProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinearProgressBar />);
    expect(baseElement).toBeTruthy();
  });
});
