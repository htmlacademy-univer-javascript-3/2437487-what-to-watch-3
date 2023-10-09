import MainScreen, {MainScreenProps} from '../../pages/main-screen/main-screen.tsx';
import React from 'react';

type AppProps = MainScreenProps;

export function App(props: AppProps): React.ReactElement {
  return (
    <MainScreen {...props}/>
  );
}
