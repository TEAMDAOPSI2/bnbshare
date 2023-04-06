import '../styles/globals.scss'
import {appWithTranslation} from "next-i18next";
import {useEffect} from "react";
import {useRouter} from "next/router";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    // add body class for rtl
    if (locale === 'ar') {
        document.body.classList.add('rtl')
    }
  }, [locale])
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
