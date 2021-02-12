import { Component } from 'react';
import Router from 'next/router';
import cookie from 'cookie';
import Cookies from 'js-cookie';

export const WithAccountRedirect = (WrappedComponent) => class extends Component {
  static getInitialProps({ req, res }) {
    let cookies;
    if (typeof window === 'undefined' && req.headers?.cookie) {
      cookies = cookie.parse(req.headers.cookie);

      if (cookies.token) {
        res.writeHead(302, { location: '/account/personal' });
        res.end();
      }
    }

    return {
      props: {},
    };
  }

  componentDidMount() {
    if (Cookies.get('token')) Router.push('/account/personal');
  }

  render() {
    const { ...props } = this.props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  }
};
