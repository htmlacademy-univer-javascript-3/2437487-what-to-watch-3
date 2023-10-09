import {Link} from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <p><strong>404 Not Found</strong></p>
      <Link to={'/'}>To Main Page</Link>
    </>
  );
}
