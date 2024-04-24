// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Briefcase from 'mdi-material-ui/BriefcaseOutline'
import Archive from 'mdi-material-ui/ArchiveOutline'
import Qrcode from 'mdi-material-ui/Qrcode'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Beranda',
      icon: HomeOutline,
      path: '/app/dashboard'
    },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/app/account-settings'
    // },
    {
      sectionTitle: 'Master'
    },
    {
      title: 'Pengarsipan',
      icon: Archive,
      path: '/app/archive',
      openInNewTab: true
    },
    {
      title: 'Pemberkasan',
      icon: Briefcase,
      path: '/app/archive-file',
      openInNewTab: true
    },
    {
      sectionTitle: 'Hasil'
    },
    {
      title: 'IKU',
      icon: Archive,
      path: '/app/iku',
      openInNewTab: true
    },
    {
      title: 'Akreditasi',
      icon: Briefcase,
      path: '/app/accreditation',
      openInNewTab: true
    },
    {
      sectionTitle: 'Persiapan'
    },
    {
      title: 'Cetak QR Code',
      icon: Qrcode,
      path: '/app/qr-code',
      openInNewTab: true
    },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/app/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/app/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/app/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/app/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/app/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/app/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/app/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/app/form-layouts'
    // }
  ]
}

export default navigation
