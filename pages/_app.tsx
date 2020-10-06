import '../styles/globals.css'
import PageNotAllow from './page-not-allow';
import SignIn from './signin/SignIn'

// export type Role = 'marketer' | 'idol'

function MyApp({ Component, pageProps }) {

  // console.log(Component);
  const AllowedComponent = SignIn
  return <AllowedComponent {...pageProps} />
}

export default MyApp
