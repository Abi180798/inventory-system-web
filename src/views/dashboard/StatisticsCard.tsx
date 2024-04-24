// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const renderStats = (totalArchive: any, filter: any) => {
  const arsipTerbuka = filter?.PrimaryRoleId === "root" ? totalArchive?.ArsipTerbuka : totalArchive?.ArsipTerbukaUser
  const arsipTertutup = filter?.PrimaryRoleId === "root" ? totalArchive?.ArsipTertutup : totalArchive?.ArsipTertutupUser
  const arsipBerkala = filter?.PrimaryRoleId === "root" ? totalArchive?.ArsipBerkala : totalArchive?.ArsipBerkalaUser
  const salesData: DataType[] = [
    {
      stats: arsipTerbuka,
      title: 'Total Arsip Terbuka',
      color: 'primary',
      icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: arsipTertutup || '-',
      title: 'Total Arsip Tertutup',
      color: 'success',
      icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: arsipBerkala || '-',
      color: 'warning',
      title: 'Total Arsip Berkala',
      icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
  ]
  return salesData.map((item: DataType, index: number) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = ({ totalArchive, filter }: any) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title={
          <Box>
            <Typography variant='h6'>Total Arsip</Typography>
          </Box>
        }
        // action={
        //   <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
        //     <DotsVertical />
        //   </IconButton>
        // }
        // subheader={
        //   <Typography variant='body2'>
        //     <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
        //       Total 48.5% growth
        //     </Box>{' '}
        //     😎 this month
        //   </Typography>
        // }
        titleTypographyProps={{
          sx: {
            // mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats(totalArchive, filter)}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
