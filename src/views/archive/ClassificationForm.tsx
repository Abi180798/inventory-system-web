// ** React Imports
import { forwardRef } from 'react'
import * as React from 'react';
// ** MUI Imports

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Autocomplete from '@mui/material/Autocomplete'

// ** Third Party Imports
import { useAppSelector } from '@/redux/hooks';
import { convertStandardOption } from '@/helpers';

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'
import ChevronRight from 'mdi-material-ui/ChevronRight'
import { buildTree } from '@/helpers';
import { useGetClassificationQuery } from '@/redux/features/classification/services';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { FormLabel } from '@mui/material';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface ClassificationFormProps {
  formik: any
}

const ClassificationForm: React.FC<ClassificationFormProps> = ({ formik }) => {
  const { values, setFieldValue, handleChange, handleBlur } = formik;

  const state = useAppSelector(state => state)
  const getOption = state.option.getOption?.data
  const getClassification = state.classification.getClassification?.data

  const { data: treeData } = useGetClassificationQuery({}, { skip: Boolean(state.classification?.getClassification?.data) })
  const treeState: any = buildTree(getClassification)

  const classificationSelected = getClassification?.find((f: any) => f?.id === values.kode_surat)

  const optionClassification = convertStandardOption(getClassification, "name", "id")
  const susutSelected = getOption?.penyusutan?.data?.find((f: any) => f.SusutId === classificationSelected?.susut_id)

  const mapDataToTreeItems = (items: any) => {
    return items?.map((item: any) => (
      <TreeItem key={item.id} nodeId={item.id} label={item.name}>
        {item.children.length > 0 && mapDataToTreeItems(item.children)}
      </TreeItem>
    ));
  };

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            5. Detail Klasifikasi Arsip
          </Typography>
        </Grid>

        {getClassification &&
          <>
            <Grid item xs={12}>
              <Box sx={{ maxHeight: 500, overflowY: 'auto' }}>
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ChevronDown />}
                  defaultExpandIcon={<ChevronRight />}
                  onNodeSelect={(e: any, node: any) => {
                    setFieldValue('kode_surat', node)
                    setFieldValue('susut', classificationSelected?.susut_id)
                  }}
                  selected={values.selected}
                >
                  {mapDataToTreeItems(treeState || [])}
                </TreeView>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Autocomplete
                  freeSolo
                  size="small"
                  options={optionClassification}
                  onChange={(e, newValue) => {
                    // @ts-ignore
                    setFieldValue("kode_surat", newValue?.value)
                    setFieldValue('susut', classificationSelected?.susut_id)
                  }}
                  renderInput={(params) => <TextField {...params} label="Klasifikasi Arsip" required />}
                />
              </FormControl>
            </Grid>
          </>
        }

        <Grid item xs={12}>
          <Divider sx={{ marginBottom: 0 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            6. Detail Pilihan
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormLabel>Nama Klasifikasi</FormLabel>
          <TextField fullWidth size='small' label={classificationSelected?.name || 'xx - xxxx'} disabled />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Tahun Aktif</FormLabel>
          <TextField fullWidth size='small' label={`${classificationSelected?.thn_aktif || 'x'} tahun`} disabled />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Tahun Inaktif</FormLabel>
          <TextField fullWidth size='small' label={`${classificationSelected?.thn_inaktif || 'x'} tahun`} disabled />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Penyusutan</FormLabel>
          <TextField fullWidth size='small' label={`${susutSelected?.SusutName || 'xxxx'}`} disabled />
        </Grid>
      </Grid>
    </>
  )
}

export default ClassificationForm