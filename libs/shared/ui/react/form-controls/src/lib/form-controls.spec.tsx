import { render } from '@testing-library/react';

import FormControls from './form-controls';

describe('FormControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormControls />);
    expect(baseElement).toBeTruthy();
  });
});
