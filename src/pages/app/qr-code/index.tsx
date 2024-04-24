import { useState, forwardRef } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton';

// ** Third Party Imports
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import localeId from 'date-fns/locale/id';
import PrintQrCode from '@/views/qr-code/PrintQrCode'
import WrapperAccess from '@/layouts/WrapperAccess'

registerLocale('id', localeId)

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth size='small' {...props} inputRef={ref} label='Tahun' autoComplete='off' />
})

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WrapperAccess>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Typography variant='h5'>QR Code Arsip Universitas Mataram</Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Cetak QR Code Arsip" {...a11yProps(0)} />
            <Tab label="Cetak QR Code Berkas" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <QrCodeArchive value={value} />
        </Grid>
      </Grid>
    </WrapperAccess>
  )
}

export default Home

interface QrCodeArchiveProps {
  value: number
}

const QrCodeArchive: React.FC<QrCodeArchiveProps> = ({ value }) => {

  return (
    <>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={6}>
          <QrCodeForm />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={6}>
          <QrCodeArchiveForm />
        </Grid>
      </CustomTabPanel>
    </>
  )
}

const QrCodeForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<any>({
    from: 0,
    to: 0,
    code: '',
    date: new Date(),
    dataQR: []
  })
  function handleChange(data: any) {
    setState({ ...state, ...data })
  }
  function generateQrCode() {
    setLoading(true)
    let array: string[] = []
    for (let i: number = (state.from || 0); i <= (state.to || 0); i++) {
      array.push(i + "/" + state.code + "/" + state.date.getFullYear())
    }
    setState({ ...state, dataQR: array })
    setLoading(false)
  }

  return (
    <>
      <Grid item xs={12} sm={2}>
        <TextField fullWidth size='small' label='No urut dari' placeholder='xxx' required
          onChange={(e) => handleChange({ from: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField fullWidth size='small' label='No urut sampai' placeholder='xxx' required
          onChange={(e) => handleChange({ to: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField fullWidth size='small' label='Kode Unit Kerja' placeholder='xxxx' required
          onChange={(e) => handleChange({ code: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <FormControl fullWidth required>
          <DatePicker
            portalId='root-portal'
            locale={localeId}
            showYearPicker
            selected={state.date}
            showYearDropdown
            showMonthDropdown
            dateFormat="yyyy"
            placeholderText='YYYY'
            onChange={(date: Date) => handleChange({ date: date })}
            required
            // @ts-ignore
            customInput={<CustomInput />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={2}>
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={generateQrCode}
        >
          Submit
        </LoadingButton>
      </Grid>
      <Grid item xs={12}>
        {/* @ts-ignore */}
        <PrintQrCode dataArray={state.dataQR} />
      </Grid>
    </>
  )
}
const QrCodeArchiveForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<any>({
    from: 0,
    to: 0,
    cl: '',
    code: '',
    date: new Date(),
    dataQR: []
  })
  function handleChange(data: any) {
    setState({ ...state, ...data })
  }
  function generateQrCode() {
    setLoading(true)
    let array: string[] = []
    for (let i: number = (state.from || 0); i <= (state.to || 0); i++) {
      array.push(state.code + "/" + state.cl + "/" + i + "/" + state.date.getFullYear())
    }
    setState({ ...state, dataQR: array })
    setLoading(false)
  }

  return (
    <>
      <Grid item xs={12} sm={3}>
        <TextField fullWidth size='small' label='Kode Unit Kerja' placeholder='xxxx' required
          onChange={(e) => handleChange({ code: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField fullWidth size='small' label='Kode Klasifikasi' placeholder='xx/xxxx/xxxx/xxxx' required
          onChange={(e) => handleChange({ cl: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField fullWidth size='small' label='No urut dari' placeholder='xxx' required
          onChange={(e) => handleChange({ from: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField fullWidth size='small' label='No urut sampai' placeholder='xxx' required
          onChange={(e) => handleChange({ to: e.target.value })} />
      </Grid>
      <Grid item xs={12} sm={2}>
        <FormControl fullWidth required>
          <DatePicker
            portalId='root-portal'
            locale={localeId}
            showYearPicker
            selected={state.date}
            showYearDropdown
            showMonthDropdown
            dateFormat="yyyy"
            placeholderText='YYYY'
            onChange={(date: Date) => handleChange({ date: date })}
            required
            // @ts-ignore
            customInput={<CustomInput />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={2}>
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={generateQrCode}
        >
          Submit
        </LoadingButton>
      </Grid>
      <Grid item xs={12}>
        {/* @ts-ignore */}
        <PrintQrCode dataArray={state.dataQR} />
      </Grid>
    </>
  )
}