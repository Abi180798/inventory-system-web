import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'


import { useGetDashboardTotalArchivePagedMutation } from '@/redux/features/dashboard/services'
import { useAppSelector } from '@/redux/hooks'
import WrapperAccess from '@/layouts/WrapperAccess'

const Dashboard = () => {
  const state = useAppSelector(state => state)
  const auth = state.auth.data?.data

  const [filter, setFilter] = useState({
    PrimaryRoleId: auth?.PrimaryRoleId || '',
    search: "",
    currentPage: 0,
    page: 1,
    limit: 10,
    all: "no",
    apiId: "Z32zwmhpfj.2",
    statarsip: "none"
  })

  const [fetchTotalArchive, responseTotalArchive] = useGetDashboardTotalArchivePagedMutation()
  const { data: totalArchive } = responseTotalArchive


  const handleFilter = (data: any) => {
    setFilter({ ...filter, ...data })
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setFilter({ ...filter, currentPage: newPage, page: newPage + 1 })
  }

  const handleChangeRowsPerPage = (event: any) => {
    setFilter({ ...filter, page: 1, limit: +event.target.value as number })
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchTotalArchive(filter)
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [filter])

  return (
    <WrapperAccess>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy totalArchive={totalArchive} filter={filter} />
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard totalArchive={totalArchive} filter={filter} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <WeeklyOverview
              totalArchive={totalArchive}
              filter={filter}
              handleFilter={handleFilter}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              handleChangePage={handleChangePage} />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid> */}
        </Grid>
      </ApexChartWrapper>
    </WrapperAccess>
  )
}

export default Dashboard
