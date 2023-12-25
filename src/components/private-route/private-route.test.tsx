import {MemoryHistory, createMemoryHistory} from 'history';
import {AppRoute} from 'types/app-route.ts';
import {AuthStatusEnum} from 'types/auth-status.enum.ts';
import {withHistory} from '../../utils/mock-component';
import {Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {render, screen} from '@testing-library/react';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.MyList);
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.SignIn} element={<span>{expectedText}</span>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={AuthStatusEnum.NoAuth}>
            <span>{notExpectedText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={AppRoute.SignIn} element={<span>{notExpectedText}</span>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={AuthStatusEnum.Auth}>
            <span>{expectedText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
