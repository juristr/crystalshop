import { render } from '@testing-library/react';

import FeatPastOrders from './feat-past-orders';

describe('FeatPastOrders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatPastOrders />);
    expect(baseElement).toBeTruthy();
  });
});
