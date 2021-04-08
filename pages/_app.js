import '../styles/global.css';


export default function App({ Component, pageProps }) {
  // これ自体がアプリケーション全体をラップする
  return <Component {...pageProps} />
}