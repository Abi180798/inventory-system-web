import * as Yup from "yup";
import { maxNumTextArea, maxTextValidation, minTextValidation, requiredTextValidation } from "@/helpers";

export const validationArchiveForm = {
  tipe_surat: Yup.string()
    .required(requiredTextValidation('Tipe Surat')),
  jenis_naskah: Yup.string()
    .required(requiredTextValidation('Jenis Naskah')),
  tgl_surat: Yup.string()
    .required(requiredTextValidation('Tanggal Surat')),
  nomor_surat: Yup.string()
    .required(requiredTextValidation('Nomor Surat')),
  hal: Yup.string()
    .required(requiredTextValidation('Hal')),
  asal_surat: Yup.string()
    .required(requiredTextValidation('Asal Surat')),
  jumlah: Yup.string()
    .required(requiredTextValidation('Jumlah Arsip')),
  lokasi_arsip: Yup.string()
    .required(requiredTextValidation('Lokasi Arsip')),
  tujuan_surat: Yup.array().of(
    Yup.string()
      .required(requiredTextValidation('Tujuan Surat'))
  ).min(1, "Minimal 1 Tujuan Surat"),
}