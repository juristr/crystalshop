import { render } from '@testing-library/react';

import UiProductDetail from './ui-product-detail';

describe('UiProductDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiProductDetail />);
    expect(baseElement).toBeTruthy();
  });
});
