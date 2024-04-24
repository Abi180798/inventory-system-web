// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** React DatePicker
import "react-datepicker/dist/react-datepicker.css";

// ** React Pdf Viewer
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// ** Global css styles
import '../../styles/globals.css'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <Provider store={store}>
      {/* @ts-ignore */}
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>

          <Head>
            <title>{`${themeConfig.templateName} - Sistem Informasi Kearsipan Universitas Mataram`}</title>
            <meta
              name='description'
              content={`${themeConfig.templateName} – Sistem Informasi Kearsipan Universitas Mataram – adalah sebuah aplikasi untuk memudahkan manajemen arsip`}
            />
            <meta name='keywords' content='SIKURAM, SIKD, Arsip' />
            <meta name='viewport' content='initial-scale=1, width=device-width' />
          </Head>

          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                // @ts-ignore
                return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
              }}
            </SettingsConsumer>
          </SettingsProvider>

        </CacheProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
