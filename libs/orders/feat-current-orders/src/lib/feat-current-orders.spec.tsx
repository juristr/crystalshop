import { render } from '@testing-library/react';

import FeatCurrentOrders from './feat-current-orders';

describe('FeatCurrentOrders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatCurrentOrders />);
    expect(baseElement).toBeTruthy();
  });
});
