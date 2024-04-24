// ** React Imports
import { useState, useEffect } from 'react'
import * as React from 'react';
// ** MUI Imports

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// ** Third Party Imports
import { useAppSelector } from '@/redux/hooks';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// ** Icons Imports
import Upload from 'mdi-material-ui/Upload'
import { FormLabel } from '@mui/material';
import { getFileNameAndExtension } from '@/helpers';

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

interface AdvancedFormProps {
  formik: any
}

const AdvancedForm: React.FC<AdvancedFormProps> = ({ formik }) => {
  const { values, setFieldValue, handleChange, handleBlur } = formik

  const [attach, setAttach] = useState<any>()
  const state = useAppSelector(state => state)
  const getOption = state.option.getOption?.data

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  async function convertFile(file: any) {
    const value = new Uint8Array(await file.arrayBuffer())
    setAttach(value)
  }

  useEffect(() => {
    if (formik.values.file)
      convertFile(formik.values.file)
  }, [formik.values.file])

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            3. Archive Details
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button component="label" variant="contained" startIcon={<Upload />}>
            Upload file
            <VisuallyHiddenInput type="file"
              name='upload'
              onChange={(e) => {
                const file = e.target.files ? e.target.files[0] : ''
                setFieldValue('file', file)
              }}
              accept={`${getOption?.file_allowed?.data?.map((r: any) => r?.TipeExt)?.join(',')}`}
            />
          </Button>
          <FormLabel sx={{ ml: 2 }}>{values?.file?.name}</FormLabel>
        </Grid>
        {(values?.file?.name && getFileNameAndExtension(values?.file?.name)?.extension === 'pdf') && attach &&
          <Grid item xs={12}>
            {/* @ts-ignore */}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
              <div
                style={{
                  height: '300px',
                  // width: '900px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {/* @ts-ignore */}
                <Viewer fileUrl={attach} plugins={[defaultLayoutPluginInstance]} />
              </div>
            </Worker>
          </Grid>
        }
        <Grid item xs={12}>
          <Divider sx={{ marginBottom: 0 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            4. Advanced Details
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Kategori Arsip</InputLabel>
            <Select
              label='Kategori Arsip'
              defaultValue=''
              size='small'
              placeholder='Pilih Kategori Arsip'
              name='kategori_arsip'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.kategori_arsip}
              required
            >
              {getOption?.kategori_arsip?.data?.map((r: any) => (
                <MenuItem key={r?.KatId} value={r?.KatId}>{r?.KatName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Sifat Surat</InputLabel>
            <Select
              label='Sifat Surat'
              defaultValue=''
              size='small'
              placeholder='Pilih Sifat Surat'
              name='sifat'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sifat}
              required
            >
              {getOption?.sifat?.data?.map((r: any) => (
                <MenuItem key={r?.SifatId} value={r?.SifatId}>{r?.SifatName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Tingkat Perkembangan Surat</InputLabel>
            <Select
              label='Tingkat Perkembangan Surat'
              defaultValue=''
              size='small'
              placeholder='Pilih Tingkat Perkembangan Surat'
              name='tingkat_perkembangan'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tingkat_perkembangan}
              required
            >
              {getOption?.tingkat_perkembangan?.data?.map((r: any) => (
                <MenuItem key={r?.TPId} value={r?.TPId}>{r?.TPName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Urgensi Surat</InputLabel>
            <Select
              label='Urgensi Surat'
              defaultValue=''
              size='small'
              placeholder='Pilih Urgensi Surat'
              name='urgensi'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.urgensi}
              required
            >
              {getOption?.urgensi?.data?.map((r: any) => (
                <MenuItem key={r?.UrgensiId} value={r?.UrgensiId}>{r?.UrgensiName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Media Surat</InputLabel>
            <Select
              label='Media Surat'
              defaultValue=''
              size='small'
              placeholder='Pilih Media Surat'
              name='media'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.media}
              required
            >
              {getOption?.media?.data?.map((r: any) => (
                <MenuItem key={r?.MediaId} value={r?.MediaId}>{r?.MediaName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Vital Surat</InputLabel>
            <Select
              label='Vital Surat'
              defaultValue=''
              size='small'
              placeholder='Pilih Vital Surat'
              name='vital'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.vital}
              required
            >
              {getOption?.vital?.data?.map((r: any) => (
                <MenuItem key={r?.VitId} value={r?.VitId}>{r?.VitName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Bahasa Surat</InputLabel>
            <Select
              label='Bahasa Surat'
              defaultValue=''
              size='small'
              placeholder='Pilih Bahasa Surat'
              name='bahasa'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bahasa}
              required
            >
              {getOption?.bahasa?.data?.map((r: any) => (
                <MenuItem key={r?.LangId} value={r?.LangId}>{r?.LangName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel size='small'>Akses Publik Surat</InputLabel>
            <Select
              label='Akses Publik Surat'
              defaultValue=''
              size='small'
              placeholder='Pilih Akses Publik Surat'
              name='akses_publik'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.akses_publik}
              required
            >
              {getOption?.akses_publik?.data?.map((r: any) => (
                <MenuItem key={r?.APId} value={r?.APId}>{r?.APName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}

export default AdvancedForm