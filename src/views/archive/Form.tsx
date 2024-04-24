import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// ** MUI Imports
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import LoadingButton from '@mui/lab/LoadingButton';

import GeneralForm from './GeneralForm';
import AdvancedForm from './AdvancedForm';
import ClassificationForm from './ClassificationForm';

// ** Third Party Imports
import { useFormik } from 'formik';

// ** Helpers
import { archiveInitialState } from '@/helpers/state';
import { useAppSelector } from '@/redux/hooks';
import { Modal } from '@mui/material';
import { ERROR_LABEL_RESPONSE, SUBMIT_LABEL_ARE_YOU_SURE } from '@/helpers/constants';
import { styleModal } from "@/helpers/style"
import {
  useGetMasterArchiveDetailQuery, useCreateMasterArchiveMutation,
  useEditMasterArchiveMutation, useUploadMasterArchiveMutation
} from '@/redux/features/master-archive/services';
import { validationArchiveForm } from '@/helpers/validation';
import * as Yup from 'yup'

const steps = ['General', 'Advanced', 'Classification'];

const ArchiveForm = () => {
  const { query, push } = useRouter()
  const { id } = query as { id: string }
  const state = useAppSelector(state => state)
  const currentUser = state.auth?.data?.data
  const { data: archiveDetailData } = useGetMasterArchiveDetailQuery({ NId: id }, { skip: !id })

  const [createArchive, responseCreateArchive] = useCreateMasterArchiveMutation({})
  const [editArchive, responseEditArchive] = useEditMasterArchiveMutation({})
  const [uploadArchive, responseUploadArchive] = useUploadMasterArchiveMutation({})
  const [loading, setLoading] = useState(false);
  const [openFinish, setOpenFinish] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep <= 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    } else {
      setOpenFinish(!openFinish)
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const formik = useFormik({
    initialValues: archiveInitialState(currentUser),
    validationSchema: Yup.object(validationArchiveForm),
    onSubmit: async (values) => {
      setLoading(true)
      const finalValues = { ...values, tgl_surat: values.tgl_surat?.toISOString()?.split("T")[0] }

      const finalValuesUpload = new FormData();
      finalValuesUpload.append("sendfile", values.file);
      finalValuesUpload.append("aksi", id ? "edit" : "add");
      finalValuesUpload.append("key", "Z32zwmhpfj");
      finalValuesUpload.append("NId", values.NId);
      finalValuesUpload.append("GIR_Id", values.GIR_Id);
      finalValuesUpload.append("NTipe", values.tipe_surat);
      finalValuesUpload.append("PeopleId", values.PeopleId);
      finalValuesUpload.append("PrimaryRoleId", values.PrimaryRoleId);
      if (archiveDetailData?.data[0]) {
        finalValuesUpload.append("LastFile", archiveDetailData?.data[0].FileName_fake);
      }

      const { data: res }: any = id ? await editArchive(finalValues) : await createArchive(finalValues)

      if (res?.status === 200) {
        finalValuesUpload.append("NId", res?.data?.NId);
        finalValuesUpload.append("GIR_Id", res?.data?.GIR_Id);

        await uploadArchive(finalValuesUpload)
      }

      setLoading(false)
    },
  });

  useEffect(() => {
    if (responseCreateArchive.isSuccess) {
      setOpenFinish(false)
      if (responseCreateArchive.data?.status === 200) {
        if (loading === false) {
          push('/app/archive')
        }
      } else {
        setOpenError(true)
      }
    }
    if (responseEditArchive.isSuccess) {
      setOpenFinish(false)
      if (responseEditArchive.data?.status === 200) {
        if (loading === false) {
          push('/app/archive')
        }
      } else {
        setOpenError(true)
      }
    }

  }, [responseCreateArchive, responseEditArchive, loading])

  useEffect(() => {
    if (id && archiveDetailData?.data) {
      formik.setValues(archiveInitialState(currentUser, archiveDetailData?.data[0]))
    }
  }, [id, archiveDetailData?.data])

  return (
    <Card>
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === 0 && (
            <>
              <GeneralForm formik={formik} />
            </>
          )}
          {activeStep === 1 && (
            <>
              <AdvancedForm formik={formik} />
            </>
          )}
          {activeStep === 2 && (
            <>
              <ClassificationForm formik={formik} />
            </>
          )}
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, justifyContent: 'space-between' }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}

          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
        <Modal
          open={openFinish}
          onClose={() => setOpenFinish(!openFinish)}
        >
          <Box sx={styleModal}>
            <Typography variant="h6" component="h2">
              {SUBMIT_LABEL_ARE_YOU_SURE}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <LoadingButton
                loading={responseCreateArchive.isLoading || responseEditArchive.isLoading}
                variant="contained"
                onClick={() => {
                  formik.submitForm()
                  setActiveStep(0)
                }}
              >
                Submit
              </LoadingButton>
              <LoadingButton
                loading={responseCreateArchive.isLoading || responseEditArchive.isLoading}
                variant="outlined"
                onClick={() => setOpenFinish(!openFinish)}
              >
                Cancel
              </LoadingButton>
            </Box>
          </Box>
        </Modal>
        <Modal
          open={openError}
          onClose={() => setOpenError(!openError)}
        >
          <Box sx={styleModal}>
            <Typography variant="h6" component="h2">
              {ERROR_LABEL_RESPONSE(id ? "Edit" : "Add")}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="contained" color='error' onClick={() => setOpenError(!openError)}>Ok</Button>
            </Box>
          </Box>
        </Modal>
      </form>
    </Card>
  )
}

export default ArchiveForm