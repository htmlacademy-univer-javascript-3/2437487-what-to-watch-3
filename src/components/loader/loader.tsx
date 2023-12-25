import './Loader.scss';

type LoaderProps = {
  text?: string;
}
export function Loader({text = 'Loading...'}: LoaderProps) {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <div className="loader-text">{text}</div>
    </div>
  );
}
