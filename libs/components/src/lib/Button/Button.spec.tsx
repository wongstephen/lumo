import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement, getByRole } = render(<Button />);
    const button = getByRole('button');

    expect(button.tagName).toBe('BUTTON');
    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
