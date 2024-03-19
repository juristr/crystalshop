import { render } from '@testing-library/react';

import FeatProductList from './feat-product-list';

describe('FeatProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatProductList />);
    expect(baseElement).toBeTruthy();
  });
});
