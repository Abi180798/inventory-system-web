// ** React Imports
import { forwardRef } from 'react'
import * as React from 'react';
// ** MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Autocomplete from '@mui/material/Autocomplete'

// ** Third Party Imports
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import localeId from 'date-fns/locale/id';
import { useAppSelector } from '@/redux/hooks';
import { convertStandardOption } from '@/helpers';

registerLocale('id', localeId)

interface GeneralFormProps {
  formik: any
}

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth size='small' {...props} inputRef={ref} label='Tanggal Surat' autoComplete='off' />
})

const GeneralForm: React.FC<GeneralFormProps> = ({ formik }) => {
  const { values, setFieldValue,
    handleChange, handleBlur, errors, touched
  } = formik

  const state = useAppSelector(state => state)
  const getOption = state.option.getOption?.data
  const getUsers = state.user?.getUsers?.data

  const optionJenisNaskah = convertStandardOption(getOption?.jenis_naskah?.data, "JenisName", "JenisId")
  const optionUsers = convertStandardOption(getUsers, "PeoplePosition", "PeopleId")

  if (!getUsers) return <>Tunggu Formulir</>

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            1. Archive
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel size='small'>Tipe Surat</InputLabel>
            <Select
              label='Tipe Surat'
              defaultValue=''
              size='small'
              placeholder='Select Tipe Surat'
              name='tipe_surat'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tipe_surat}
              required
            >
              <MenuItem value={"inbox"}>Surat Masuk</MenuItem>
              <MenuItem value={"outboxins"}>Surat Keluar</MenuItem>
            </Select>
            {errors.tipe_surat && touched.tipe_surat ? (
              <div style={{ color: 'red', fontSize: 11 }}>{errors.tipe_surat}</div>
            ) : null}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required error={true}>
            <Autocomplete
              freeSolo
              size="small"
              options={optionJenisNaskah}
              onChange={(e, newValue) => setFieldValue("jenis_naskah", newValue?.value)}
              onBlur={handleBlur}
              value={values.jenis_naskah ? optionJenisNaskah?.find((f) => f.value === values.jenis_naskah) : values.jenis_naskah}
              renderInput={(params) => <TextField {...params} label="Jenis Naskah" required />}
            />
            {errors.jenis_naskah && touched.jenis_naskah ? (
              <div style={{ color: 'red', fontSize: 11 }}>{errors.jenis_naskah}</div>
            ) : null}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <DatePicker
              portalId='root-portal'
              locale={localeId}
              selected={values.tgl_surat}
              showYearDropdown
              showMonthDropdown
              dateFormat="dd-MM-yyyy"
              placeholderText='DD-MM-YYYY'
              name='tgl_surat'
              onChange={(date: Date) => setFieldValue('tgl_surat', date)}
              onBlur={handleBlur}
              required
              // @ts-ignore
              customInput={<CustomInput />}
            />
            {errors.tgl_surat && touched.tgl_surat ? (
              <div style={{ color: 'red', fontSize: 11 }}>{errors.tgl_surat}</div>
            ) : null}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size='small' label='Nomor Surat' placeholder='xx/xxxx/xxxx/xxxx' required
            name='nomor_surat'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nomor_surat} />
          {errors.nomor_surat && touched.nomor_surat ? (
            <div style={{ color: 'red', fontSize: 11 }}>{errors.nomor_surat}</div>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size='small' label='QR Code' placeholder='xxx/UNxx.xx/xxxx'
            name='barcode'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.barcode} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size='small' label='Agenda' placeholder='1'
            name='agenda'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.agenda} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth multiline minRows={3} size='small' label='Hal' placeholder='Archive xxxx' required
            name='hal'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hal} />
          {errors.hal && touched.hal ? (
            <div style={{ color: 'red', fontSize: 11 }}>{errors.hal}</div>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ marginBottom: 0 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            2. Destination
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel size='small'>Kategori Asal Surat</InputLabel>
            <Select
              label='Kategori Asal Surat'
              defaultValue=''
              size='small'
              placeholder='Select Kategori Asal Surat'
              name='kategori_pengirim'
              onChange={(e) => {
                formik.setFieldValue('kategori_pengirim', e.target.value)
                formik.setFieldValue('asal_surat', '')
              }}
              onBlur={handleBlur}
              value={values.kategori_pengirim}
              required
            >
              <MenuItem value={"internal"}>Internal</MenuItem>
              <MenuItem value={"external"}>External</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {values?.kategori_pengirim === "internal" &&
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <Autocomplete
                freeSolo
                size="small"
                options={optionUsers}
                onChange={(e, newValue) => setFieldValue("asal_surat", newValue?.value)}
                onBlur={handleBlur}
                value={values.asal_surat ? optionUsers?.find((f) => f.value === values.asal_surat) : values.asal_surat}
                renderInput={(params) => <TextField {...params} label="Asal Surat" required />}
              />
              {errors.asal_surat && touched.asal_surat ? (
                <div style={{ color: 'red', fontSize: 11 }}>{errors.asal_surat}</div>
              ) : null}
            </FormControl>
          </Grid>
        }
        {values?.kategori_pengirim === "external" &&
          <Grid item xs={12} sm={6}>
            <TextField fullWidth size='small' label='Asal Surat' placeholder='Department xxxx' required
              name='asal_surat'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.asal_surat} />
            {errors.asal_surat && touched.asal_surat ? (
              <div style={{ color: 'red', fontSize: 11 }}>{errors.asal_surat}</div>
            ) : null}
          </Grid>
        }
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel size='small'>Kategori Tujuan Surat</InputLabel>
            <Select
              label='Kategori Tujuan Surat'
              defaultValue=''
              size='small'
              placeholder='Select Kategori Tujuan Surat'
              name='kategori_penerima'
              onChange={(e) => {
                formik.setFieldValue('kategori_penerima', e.target.value)
                formik.setFieldValue('tujuan_surat', [])
              }}
              onBlur={handleBlur}
              value={values.kategori_penerima}
              required
            >
              <MenuItem value={"internal"}>Internal</MenuItem>
              <MenuItem value={"external"}>External</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {values.kategori_penerima === "internal" &&
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <Autocomplete
                freeSolo
                multiple
                size="small"
                options={optionUsers}
                onChange={(e, newValue) => setFieldValue("tujuan_surat", newValue?.map((v) => v?.value))}
                onBlur={handleBlur}
                value={values.tujuan_surat ? optionUsers?.filter((fil) => values?.tujuan_surat?.find((f: any) => f === fil.value)) : values.tujuan_surat}
                renderInput={(params) => <TextField {...params} label="Tujuan Surat" required />}
              />
              {errors.tujuan_surat && touched.tujuan_surat ? (
                <div style={{ color: 'red', fontSize: 11 }}>{errors.tujuan_surat}</div>
              ) : null}
            </FormControl>
          </Grid>
        }
        {values.kategori_penerima === "external" &&
          <Grid item xs={12} sm={6}>
            <TextField fullWidth size='small' label='Tujuan Surat' placeholder='Department xxxx' required
              name='tujuan_surat'
              onChange={(e) => formik.setFieldValue('tujuan_surat', [e.target.value])}
              onBlur={handleBlur}
              value={values.tujuan_surat[0]} />
            {errors.tujuan_surat && touched.tujuan_surat ? (
              <div style={{ color: 'red', fontSize: 11 }}>{errors.tujuan_surat}</div>
            ) : null}
          </Grid>
        }
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size='small' label='Pejabat yang bertanda tangan' placeholder='John Doe xxxx'
            name='pejabat_ttd'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.pejabat_ttd} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField fullWidth size='small' label='Jumlah Unit' placeholder='1'
              name='jumlah'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.jumlah} />
            <FormControl fullWidth >
              <InputLabel size='small'>Satuan Unit</InputLabel>
              <Select
                label='Satuan Unit'
                defaultValue=''
                size='small'
                placeholder='Select Satuan Unit'
                name='satuan_unit'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.satuan_unit}
                required
              >
                {getOption?.satuan_unit?.data?.map((r: any) => (
                  <MenuItem key={r?.MeasureUnitId} value={r?.MeasureUnitId}>{r?.MeasureUnitName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {errors.jumlah && touched.jumlah ? (
            <div style={{ color: 'red', fontSize: 11 }}>{errors.jumlah}</div>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth multiline minRows={3} size='small' label='Lokasi' placeholder='File Cabinet xxxx' required
            name='lokasi_arsip'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lokasi_arsip} />
          {errors.lokasi_arsip && touched.lokasi_arsip ? (
            <div style={{ color: 'red', fontSize: 11 }}>{errors.lokasi_arsip}</div>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth multiline minRows={3} size='small' label='Keterangan' placeholder='Esc xxxx'
            name='ket'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ket} />
        </Grid>
      </Grid>
    </>
  )
}

export default GeneralForm