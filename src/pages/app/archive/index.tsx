import { useState, useEffect, useMemo } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Modal from '@mui/material/Modal'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import TableData from '@/views/tables/TableData'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import File from 'mdi-material-ui/File'
import Pencil from 'mdi-material-ui/Pencil'
import Delete from 'mdi-material-ui/Delete'

import { debounce } from 'lodash';

// components
import TableStickyHeader, { Column } from '@/views/tables/TableStickyHeader'
// services
import { useDeleteMasterArchiveMutation, useGetMasterArchiveInternalPagedQuery } from "@/redux/features/master-archive/services"
// helpers
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { handleChangeMasterArchive } from '@/redux/features/master-archive/masterArchiveSlice'
import { useRouter } from 'next/router'
import { DELETE_LABEL_ARE_YOU_SURE, DELETE_LABEL_ARE_YOU_SURE_CONTENT } from '@/helpers/constants'
import { styleModal } from "@/helpers/style"
import { ColumnDef, Row } from '@tanstack/react-table'
import WrapperAccess from '@/layouts/WrapperAccess'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// const columns: readonly any[] = [
//   { accessorKey: 'Nomor', header: 'Nomor', minWidth: 170 },
//   { accessorKey: 'Hal', header: 'Hal', minWidth: 100 },
//   { accessorKey: 'Tgl', header: 'Tanggal', minWidth: 100 },
//   {
//     accessorKey: 'NTipe', header: 'Tipe Surat', minWidth: 100,
//     cell: ({ getValue }) =>
//       getValue() === "inbox"
//         ? "Surat Masuk"
//         : getValue() === "outboxins" && "Surat Keluar"
//   },
//   { accessorKey: 'retensi_aktif', header: 'Retensi Aktif', minWidth: 100 },
//   { accessorKey: 'retensi_inaktif', header: 'Retensi Inaktif', minWidth: 100 },
//   { accessorKey: 'APName', header: 'Akses Publik', minWidth: 100 },
//   { accessorKey: 'barcode', header: 'QR Code', minWidth: 100 }
// ]
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
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <WrapperAccess>
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
    </WrapperAccess>
  )
}

export default Home

interface ListArchiveProps {
  value: number
}

const ListArchive: React.FC<ListArchiveProps> = ({ value }) => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()

  const [collapse, setCollapse] = useState<boolean>(false)

  const state = useAppSelector((state) => state)
  const auth = state.auth.data?.data
  const filter = state.masterArchive?.filter

  const [deleteArchive, responseDeleteArchive] = useDeleteMasterArchiveMutation()
  const { data, isLoading, isError, isFetching } = useGetMasterArchiveInternalPagedQuery({
    PeopleId: auth?.PeopleId || '',
    PrimaryRoleId: auth?.PrimaryRoleId || '',
    statarsip: 'none',
    ...filter
  }, { refetchOnMountOrArgChange: true })

  const dataTable = useMemo(() => data, [data]);

  // state
  const [selected, setSelected] = useState<any>()
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const handleCloseDelete = () => setOpenDelete(!openDelete)

  const handleAdd = () => push("/app/archive/create")
  const handleEdit = (id: string) => push(`/app/archive/${id}/edit`)
  const handleDelete = (data: MasterArchiveType) => {
    setOpenDelete(true)
    setSelected(data)
  }
  const handleForceDelete = () => {
    deleteArchive({
      PeopleId: auth?.PeopleId || '',
      NId: selected?.NId,
      FileDir: selected?.NFileDir,
    })
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

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

  const columns: ColumnDef<MasterArchiveInternalType>[] = useMemo(
    () => {

      // const handleDelete = (id: string) => {
      //   if (isDetailPage) {
      //     deleteUsers(id);
      //   } else {
      //     dispatch(handleRoleAccessSaved((state.users.roleAccessSaved || state.users.getAccess
      //       ?.map((val: any) => {
      //         return {
      //           id: val?.id ?? '',
      //           module: convertStandardOption([val?.module]) ?? [],
      //           companies: convertStandardOption(val?.companies) ?? [],
      //           role: convertStandardSelect(val?.role) ?? {},
      //           subModules: val?.subModules ?? [],
      //           userId: id
      //         }
      //       })
      //     )?.filter((f: any) => f.id !== id)))
      //     dispatch(handleRoleAccessTableSaved((state.users.roleAccessTableSaved || state.users.getAccess)?.filter((f: any) => f.id !== id)))
      //   }
      // };

      return [
        {
          id: "expander",
          size: 52,
          header: () => null,
          cell: ({ row }) => {
            return row.getCanExpand() ? (
              <button
                {...{
                  type: 'button',
                  onClick: row.getToggleExpandedHandler(),
                  style: {
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    margin: 0,
                  },
                }}
              >
                {row.getIsExpanded() ? (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronRight sx={{ fontSize: '1.875rem' }} />
                )}
              </button>
            ) : null;
          },
        },
        // {
        //   header: "No", accessorKey: "no", size: 48,
        //   cell: ({ row }) => {
        //     let rowNumber = filterState ? rowNumberHelper(filterState[0].PageNumber, filterState[0].PageSize, row.index) : (row.index + 1);
        //     return (
        //       <div>{rowNumber}</div>
        //     )
        //   }
        // },
        { header: "Nomor", accessorKey: "Nomor" },
        { header: "Hal", accessorKey: "Hal", size: 300 },
        { header: "Tanggal", accessorKey: "Tgl", size: 100 },
        {
          header: "Tipe Surat", accessorKey: "NTipe",
          cell: ({ getValue }) =>
            getValue() === "inbox"
              ? "Surat Masuk"
              : getValue() === "outboxins" && "Surat Keluar"
        },
        { header: "Retensi Aktif", accessorKey: "thn_aktif" },
        { header: "Retensi Inaktif", accessorKey: "thn_inaktif" },
        { header: "Penyusutan", accessorKey: "penyusutan" },
        { header: "QR Code", accessorKey: "barcode" },
        {
          header: "Action",
          enableSorting: false,
          accessorFn: (row) => row.NId,
          cell: ({ getValue, row }) => {
            const roleId = String(getValue()) || ''
            const fileDir = row.original?.NFileDir
            const filename = row.original?.FileName_fake
            return (
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'end' }}>
                {(fileDir && filename) &&
                  <IconButton href={`https://sikd.arsip.unram.ac.id/FilesUploaded/${fileDir}/${filename}`} target="_blank"
                    size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
                    <File />
                  </IconButton>
                }
                <IconButton onClick={() => handleEdit(roleId)}
                  size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
                  <Pencil />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.original)} size='small' aria-label='settings' sx={{ color: 'text.secondary' }}>
                  <Delete />
                </IconButton>
              </Box>
            );
          },
        },
      ]
    },
    [data]
  );

  useEffect(() => {
    if (responseDeleteArchive.isSuccess) {
      setOpenDelete(false)
    }
  }, [responseDeleteArchive])

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
  return (
    <CustomTabPanel value={value} index={0}>
      <Grid component={Paper} container spacing={4} sx={{ py: 4, pl: 2, pr: 4 }}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant='contained' onClick={handleAdd}>
                Tambah Arsip
              </Button>
              <Box>
                <Button onClick={handleCollapse} variant='contained'
                  endIcon={collapse
                    ? <ChevronUp sx={{ fontSize: '1.875rem' }} />
                    : <ChevronDown sx={{ fontSize: '1.875rem' }} />}>
                  Filter
                </Button>
              </Box>
            </Box>
            <Box>
              <TextField label='Search Unit' variant='outlined' size='small' onChange={(e) => debouncedFilterHandler({ ...filter, search: e.target.value })} />
            </Box>
          </Box>
        </Grid>
        {collapse &&
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel size='small'>Status Arsip</InputLabel>
                  <Select
                    label='Status Arsip'
                    defaultValue=''
                    size='small'
                    placeholder='Select Status Arsip'
                    onChange={(e) => debouncedFilterHandler({ ...filter, statarsip: e.target.value })}
                    value={filter.statarsip || 'none'}
                    sx={{ minWidth: 200 }}
                  >
                    <MenuItem value={"none"}>Belum Pilih</MenuItem>
                    <MenuItem value={"aktif"}>Aktif</MenuItem>
                    <MenuItem value={"inaktif"}>Inaktif</MenuItem>
                    <MenuItem value={"musnah"}>Musnah</MenuItem>
                    <MenuItem value={"Permanen"}>Permanen</MenuItem>
                    <MenuItem value={"dinilaikembali"}>Dinilai Kembali</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth>
                  <InputLabel size='small'>Akses Publik</InputLabel>
                  <Select
                    label='Akses Publik'
                    defaultValue=''
                    size='small'
                    placeholder='Select Akses Publik'
                    onChange={(e) => debouncedFilterHandler({ ...filter, apid: e.target.value })}
                    value={filter.apid}
                    sx={{ minWidth: 200 }}
                  >
                    <MenuItem value={"Z32zwmhpfj.2"}>Terbuka</MenuItem>
                    <MenuItem value={"Z32zwmhpfj.1"}>Tertutup</MenuItem>
                    <MenuItem value={"Z32zwmhpfj.3"}>Berkala</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>
        }
        <Grid item xs={12} sx={{ position: 'relative' }}>
          {isFetching &&
            <Box sx={{ position: 'absolute', transform: 'translate(-50%, 50%)', top: '30%', left: '50%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress />
                <Box>Loading...</Box>
              </Box>
            </Box>
          }
          {/* {!isFetching ? */}
          <TableData
            tableName={`Arsip`}
            data={dataTable?.data || []}
            columns={columns}
            getRowCanExpand={() => true}
            filter={filter}
            handleChangePage={debouncedChangePageHandler}
            handleChangeRowsPerPage={debouncedChangeRowsPerPageHandler}
            // handleFilter={debouncedChangeHandler}
            renderSubComponent={({ row }) => <TableSubRow row={row} />}
            totalCount={dataTable?.total || 0}
          />
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

          {/* {(dataMasterArchive?.data || [])?.length > 0 &&
            <TableStickyHeader columns={columns} rows={dataMasterArchive?.data || []}
              count={parseInt((dataMasterArchive?.total || "0"), 10) || 0}
              page={filter?.page || 1} rowsPerPage={filter?.limit || 10}
              handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}
              handleEdit={handleEdit} handleDelete={handleDelete}
              isViewFile />
          } */}
        </Grid>
      </Grid>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
      >
        <Box sx={styleModal}>
          <Typography variant="h6" component="h2">
            {DELETE_LABEL_ARE_YOU_SURE}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {DELETE_LABEL_ARE_YOU_SURE_CONTENT}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button variant="contained" color="error" onClick={handleForceDelete}>Yes</Button>
            <Button variant="outlined" color="error" onClick={handleCloseDelete}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </CustomTabPanel>
  )
}


type TableSubRowProps = {
  row: Row<any>;
};

const TableSubRow = ({ row }: TableSubRowProps) => {
  return (
    <div style={{ marginLeft: 70 }}>
      <table>
        <tr>
          <td>Asal Surat</td>
          <td>: </td>
          <td>{row.original.JabatanPengirim ? row.original.JabatanPengirim : row.original.Instansipengirim}</td>
        </tr>
        <tr>
          <td>Tujuan Surat</td>
          <td>: </td>
          <td>{row.original.To_Id_Desc}</td>
        </tr>
        <tr>
          <td>Kode Klasifikasi</td>
          <td>: </td>
          <td>{row.original.ClCode}</td>
        </tr>
        <tr>
          <td>Pejabat yang bertanda tangan</td>
          <td>: </td>
          <td>{row.original.pejabatTTD}</td>
        </tr>
        <tr>
          <td>Lokasi</td>
          <td>: </td>
          <td>{row.original.NLokasi}</td>
        </tr>
        <tr>
          <td>Keterangan</td>
          <td>: </td>
          <td>{row.original.ket}</td>
        </tr>
      </table>
    </div>
  );
};