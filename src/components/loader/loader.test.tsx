import { render, screen } from '@testing-library/react';
import { Loader } from './loader.tsx';

describe('Component: Loader', () => {
  it('should render correct', () => {
    const expectedText = /Loading/i;

    render(<Loader />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
