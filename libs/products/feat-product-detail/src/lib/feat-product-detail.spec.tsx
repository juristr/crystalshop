import { render } from '@testing-library/react';

import FeatProductDetail from './feat-product-detail';

describe('FeatProductDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatProductDetail />);
    expect(baseElement).toBeTruthy();
  });
});
