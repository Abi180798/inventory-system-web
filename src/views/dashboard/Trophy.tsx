// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import { useAppSelector } from '@/redux/hooks'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 78,
  position: 'absolute'
})

const Trophy = ({ totalArchive, filter }: any) => {
  const state = useAppSelector(state => state.auth)
  const { data: currentUser } = state
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative', height: '100%' }}>
      <CardContent>
        <Typography variant='body1' width={'90%'}>Welcome {`${currentUser?.data?.PeoplePosition} ${currentUser?.data?.PeopleName}`}! 🥳</Typography>
        <Typography variant='caption'>Total Arsip</Typography>
        <Typography variant='h5' sx={{ my: 1, color: 'primary.main' }}>
          {filter?.PrimaryRoleId === "root" ? totalArchive?.totalArsip : totalArchive?.totalArsipUser}
        </Typography>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Trophy
