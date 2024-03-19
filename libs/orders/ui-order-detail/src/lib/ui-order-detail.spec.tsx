import { render } from '@testing-library/react';

import UiOrderDetail from './ui-order-detail';

describe('UiOrderDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiOrderDetail />);
    expect(baseElement).toBeTruthy();
  });
});
