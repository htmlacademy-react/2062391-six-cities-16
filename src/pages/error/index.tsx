import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  children: ReactNode;
}

function Container({ children }: ErrorPageProps): JSX.Element {
  return (
    <div
      style={{
        width: '1000px',
        height: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '100px',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default function ErrorPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 Cities 404</title>
      </Helmet>
      <Container>
        <img src="img/404-page.jpg" alt="404 logo" />
        <span>Page Not Found :(</span>
        <br />
        <Link to="/" title="Back">
          <span style={{ color: 'lightblue' }}>Back to Main</span>
        </Link>
      </Container>
    </>
  );
}
