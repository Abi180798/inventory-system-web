// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TablePagination from '@mui/material/TablePagination'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { TextField } from '@mui/material'

const WeeklyOverview = ({ totalArchive, filter, handleFilter, handleChangeRowsPerPage, handleChangePage }: any) => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '70%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 1,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 20,
        left: 0,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.primary.main,
      theme.palette.primary.main,
      theme.palette.primary.main,
      theme.palette.primary.main,
      theme.palette.primary.main,
      theme.palette.primary.main,
      theme.palette.primary.main,
      theme.palette.primary.main,
      theme.palette.primary.main
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: totalArchive?.data?.map((r: any) => r?.RoleName) || [],
      tickPlacement: 'on',
      labels: { show: true },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      // labels: {
      //   offsetX: -17,
      //   formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      // }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Arsip per Unit'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          filter?.PrimaryRoleId !== "root" ? <></> :
            <TextField label='Search Unit' variant='outlined' size='small' onChange={(e) => handleFilter({
              search: e.target.value,
              page: 1
            })} />
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        {totalArchive &&
          // @ts-ignore
          <ReactApexcharts type='bar' height={300} options={options} series={[
            { name: 'Arsip Terbuka', data: totalArchive?.data?.map((r: any) => r?.arsip_buka) || [] },
            { name: 'Arsip Tertutup', data: totalArchive?.data?.map((r: any) => r?.arsip_tutup) || [] },
            { name: 'Arsip Berkala', data: totalArchive?.data?.map((r: any) => r?.arsip_berkala) || [] },
            { name: 'Arsip Total', data: totalArchive?.data?.map((r: any) => r?.arsip_total) || [] }

          ]} />
        }
        {(filter?.PrimaryRoleId === "root" && totalArchive) &&
          <Box>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component='div'
              count={totalArchive?.total || 0}
              rowsPerPage={filter?.limit || 1}
              page={filter?.currentPage || 0}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        }
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
