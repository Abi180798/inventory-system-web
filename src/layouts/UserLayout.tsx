// ** React Imports
import { ReactNode, useEffect } from 'react'

import { useRouter } from 'next/router'

// ** MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Theme, styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import VerticalLayout from 'src/@core/layouts/VerticalLayout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'

// ** Component Import
import UpgradeToProButton from './components/UpgradeToProButton'
import VerticalAppBarContent from './components/vertical/AppBarContent'
import VerticalNavHeader from '../@core/layouts/components/vertical/navigation/VerticalNavHeader'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'
import { useAppSelector } from '@/redux/hooks'
import { useGetOptionMutation } from '@/redux/features/option/services';
import { useGetUsersMutation } from '@/redux/features/user/services';

interface Props {
  children: ReactNode
}

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const UserLayout = ({ children }: Props) => {
  const state = useAppSelector(state => state)
  const { data: isLogin } = state.auth

  const [getOption] = useGetOptionMutation({})
  const [getUsers] = useGetUsersMutation({})

  // ** Hooks
  const { settings, saveSettings } = useSettings()
  const router = useRouter()

  // ** Vars
  const { contentWidth } = settings
  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const UpgradeToProImg = () => {
    return (
      <Box sx={{ mx: 'auto' }}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://themeselection.com/products/materio-mui-react-nextjs-admin-template/'
        >
          <img width={230} alt='upgrade to premium' src={`/images/misc/upgrade-banner-${settings.mode}.png`} />
        </a>
      </Box>
    )
  }

  useEffect(() => {
    if (!Boolean(state.user?.getUsers?.data)) {
      getUsers({})
    }
    if (!Boolean(state.option?.getOption?.data)) {
      getOption({})
    }
  }, [])

  if (isLogin) {
    return (
      <VerticalLayout
        hidden={hidden}
        settings={settings}
        saveSettings={saveSettings}
        verticalNavItems={VerticalNavItems()} // Navigation Items
        afterVerticalNavMenuContent={UpgradeToProImg}
        verticalAppBarContent={(
          props // AppBar Content
        ) => (
          <VerticalAppBarContent
            hidden={hidden}
            settings={settings}
            saveSettings={saveSettings}
            toggleNavVisibility={props.toggleNavVisibility}
          />
        )}
      >
        {children}
        {/* <UpgradeToProButton /> */}
      </VerticalLayout>
    )
  } else {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" color={'default'}>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <VerticalNavHeader />
              </Box>
              <Button variant={'outlined'} onClick={() => router.push('/login')}>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <ContentWrapper
          className='layout-page-content'
          sx={{
            ...(contentWidth === 'boxed' && {
              mt: 15,
              mx: 'auto',
              '@media (min-width:1440px)': { maxWidth: 1440 },
              '@media (min-width:1200px)': { maxWidth: '100%' }
            })
          }}
        >
          {children}
        </ContentWrapper>
      </>
    )
  }
}

export default UserLayout
