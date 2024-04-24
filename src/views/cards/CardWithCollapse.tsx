// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

import { QRCode } from 'react-qrcode-logo';

interface CardWithCollapseType {
  data: any
}

const CardWithCollapse: React.FC<CardWithCollapseType> = ({ data }) => {
  // ** State
  const [collapse, setCollapse] = useState<boolean>(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 1, background: '#dfe4ea' }}>
        <Box sx={{ border: '1px solid #ced6e0', borderRadius: 1, background: 'white', p: 1 }}>
          <Typography variant='body2'>QR Code Archive</Typography>
          {/* @ts-ignore */}
          <QRCode value={data?.barcode} logoImage={'/images/logos/logo-unram.png'} />
        </Box>
      </Box>
      <CardContent sx={{ overflow: 'auto', flex: 1 }}>
        <table>
          <tbody>
            <tr style={{ verticalAlign: 'baseline' }}>
              <td>
                <Typography variant='h6' sx={{ whiteSpace: 'pre' }}>
                  Nomor
                </Typography>
              </td>
              <td><Typography variant='h6'>:</Typography></td>
              <td>
                <Typography variant='h6'>
                  {data?.Nomor}
                </Typography>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'baseline' }}>
              <td>
                <Typography variant='body1' sx={{ whiteSpace: 'pre' }}>
                  Tanggal
                </Typography>
              </td>
              <td><Typography variant='body1'>:</Typography></td>
              <td>
                <Typography variant='body1'>
                  {data?.Tgl}
                </Typography>
              </td>
            </tr>
            <tr style={{ verticalAlign: 'baseline' }}>
              <td>
                <Typography variant='body1' sx={{ whiteSpace: 'pre' }}>
                  Hal
                </Typography>
              </td>
              <td><Typography variant='body1'>:</Typography></td>
              <td>
                <Typography variant='body1'>
                  {data?.Hal}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      {/* <CardActions className='card-action-dense'>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button onClick={handleClick}>Details</Button>
          <IconButton size='small' onClick={handleClick}>
            {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
          </IconButton>
        </Box>
      </CardActions> */}
      {/* <Collapse in={collapse}>
        <Divider sx={{ margin: 0 }} />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 1, background: '#dfe4ea' }}>
            <Box sx={{ border: '1px solid #ced6e0', borderRadius: 1, background: 'white', p: 1 }}>
              <Typography variant='body2'>QR Code Archive File</Typography>
              <QRCode value="https://github.com/gcoro/react-qrcode-logo" logoImage={'/images/logos/logo-unram.png'} />
            </Box>
          </Box>
          <table>
            <tbody>
              <tr style={{ verticalAlign: 'baseline' }}>
                <td>
                  <Typography variant='h6' sx={{ whiteSpace: 'pre' }}>
                    Nomor Berkas
                  </Typography>
                </td>
                <td><Typography variant='h6'>:</Typography></td>
                <td>
                  <Typography variant='h6'>
                    234/UN18.F6/JTM/EP/2023
                  </Typography>
                </td>
              </tr>
              <tr style={{ verticalAlign: 'baseline' }}>
                <td>
                  <Typography variant='body1' sx={{ whiteSpace: 'pre' }}>
                    Tanggal Berkas
                  </Typography>
                </td>
                <td><Typography variant='body1'>:</Typography></td>
                <td>
                  <Typography variant='body1'>
                    2023-10-26
                  </Typography>
                </td>
              </tr>
              <tr style={{ verticalAlign: 'baseline' }}>
                <td>
                  <Typography variant='body1' sx={{ whiteSpace: 'pre' }}>
                    Hal
                  </Typography>
                </td>
                <td><Typography variant='body1'>:</Typography></td>
                <td>
                  <Typography variant='body1'>
                    Permohonan SK Mengajar Semester Ganjil 2023-2024 Jurusan Teknik Mesin
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Collapse> */}
    </Card >
  )
}

export default CardWithCollapse
