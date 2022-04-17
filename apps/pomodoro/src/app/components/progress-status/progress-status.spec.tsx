import { render } from '@testing-library/react';

import ProgressStatus from './progress-status';

describe('ProgressStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressStatus />);
    expect(baseElement).toBeTruthy();
  });
});
