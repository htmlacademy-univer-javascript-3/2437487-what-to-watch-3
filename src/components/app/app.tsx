import {MainPage, MainPageProps} from 'pages/main-page/main-page.tsx';

type AppProps = MainPageProps;

export function App(props: AppProps) {
  return (
    <MainPage {...props}/>
  );
}
