// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ArchiveForm from '@/views/archive/Form'
import WrapperAccess from '@/layouts/WrapperAccess'

const ArchiveEdit = () => {
  return (
    <WrapperAccess>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Typography variant='h5'>Edit Archive</Typography>
        </Grid>
        <Grid item xs={12}>
          <ArchiveForm />
        </Grid>
      </Grid>
    </WrapperAccess>
  )
}

export default ArchiveEdit