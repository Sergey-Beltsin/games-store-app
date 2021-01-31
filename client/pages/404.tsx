import Error from 'next/error';

// Opinionated: do not record an exception in Sentry for 404
const NotFound = () => <Error statusCode={404} />;

export default NotFound;
