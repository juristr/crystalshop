import { render } from '@testing-library/react';

import FeatCreateOrder from './feat-create-order';

describe('FeatCreateOrder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatCreateOrder />);
    expect(baseElement).toBeTruthy();
  });
});
