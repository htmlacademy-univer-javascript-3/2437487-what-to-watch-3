import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './not-found-page';
import { withHistory } from '../../utils/mock-component';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404';
    const expectedLinkText = 'To Main Page';

    render(withHistory(<NotFoundPage />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
