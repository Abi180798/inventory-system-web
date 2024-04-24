import { useState, useMemo } from 'react'
import { debounce } from 'lodash';

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TablePagination from '@mui/material/TablePagination';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

// components
import CardWithCollapse from "@/views/cards/CardWithCollapse"
// services
import { useGetMasterArchivePagedQuery } from "@/redux/features/master-archive/services"
// helpers
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { handleChangeMasterArchive } from '@/redux/features/master-archive/masterArchiveSlice'

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
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Typography variant='h5'>Daftar Arsip Universitas Mataram</Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="SIKURAM" {...a11yProps(0)} />
            {/* <Tab label="E-Office" {...a11yProps(1)} /> */}
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <ListArchive value={value} />
        </Grid>
      </Grid>
    </>
  )
}

export default Home

interface ListArchiveProps {
  value: number
}

const ListArchive: React.FC<ListArchiveProps> = ({ value }) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const filter = state.masterArchive?.filter
  const { data, isLoading, isError, isFetching } = useGetMasterArchivePagedQuery(filter, { refetchOnMountOrArgChange: true })
  const dataMasterArchive: MasterArchivesType = data

  const handleFilter = (value: any) => {
    dispatch(handleChangeMasterArchive({
      fieldName: 'filter',
      fieldValue: {
        ...value
      }
    }))
  }


  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch(handleChangeMasterArchive({ fieldName: "filter", fieldValue: { ...filter, page: newPage + 1 } }));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(handleChangeMasterArchive({ fieldName: "filter", fieldValue: { ...filter, limit: parseInt(event.target.value, 10) } }));
  }

  const debouncedChangePageHandler = useMemo(() => debounce(handleChangePage, 1000), []);
  const debouncedChangeRowsPerPageHandler = useMemo(() => debounce(handleChangeRowsPerPage, 1000), []);
  const debouncedFilterHandler = useMemo(() => debounce(handleFilter, 1000), []);


  if (isError) return (
    <Box>
      <Box className='content-center'>
        <Box sx={{ height: 200, p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Data Not Found ⚠️
          </Typography>
          <Typography variant='body2'>We couldn&prime;t find the data you are looking for.</Typography>
        </Box>
      </Box>
    </Box>
  )
  if (isLoading) return (
    <Box>
      <Skeleton variant="rectangular" width={'auto'} height={260} />
    </Box>)
  return (
    <CustomTabPanel value={value} index={0}>
      <Grid container spacing={6} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} />
        <Grid item xs={12} sm={6}>
          <TextField label='Search Unit' variant='outlined' size='small' onChange={(e) => debouncedFilterHandler({ ...filter, search: e.target.value })} sx={{ width: '100%' }} />
        </Grid>
      </Grid>
      {isFetching &&
        <Box sx={{ position: 'absolute', transform: 'translate(-50%, 50%)', top: '80%', left: '50%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircularProgress />
            <Box>Loading...</Box>
          </Box>
        </Box>
      }
      {/* {!isFetching ? */}
      <Grid container spacing={6}>
        {(dataMasterArchive?.data_larsip || [])?.length > 0 &&
          dataMasterArchive?.data_larsip?.map((archive: MasterArchiveType) => (
            <Grid item xs={12} sm={6}>
              <CardWithCollapse data={archive} />
            </Grid>
          ))}
      </Grid>
      {/* :
        <Box>
          <Box className='content-center'>
            <Box sx={{ height: 200, p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
                Loading... ⚠️
              </Typography>
              <Typography variant='body2'>Wait, we find the data you are looking for.</Typography>
            </Box>
          </Box>
        </Box>
      } */}

      <Grid container spacing={6}>
        <Box sx={{ pt: 6 }}>
          <TablePagination
            component="div"
            count={parseInt((dataMasterArchive?.total || "0"), 10) || 0}
            page={filter?.page - 1 || 0}
            onPageChange={debouncedChangePageHandler}
            rowsPerPage={filter?.limit || 10}
            onRowsPerPageChange={debouncedChangeRowsPerPageHandler}
          />
        </Box>
      </Grid>
    </CustomTabPanel>
  )
}