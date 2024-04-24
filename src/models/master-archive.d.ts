interface RootResult {
  msg?: string
  status?: number
}

interface MasterArchivesType extends RootResult {
  data_larsip?: MasterArchiveType[]
  total?: string
}

interface MasterArchiveType {
  APName?: string
  CreationRoleId?: string
  Hal?: string
  Nomor?: string
  SusutName?: string
  Tgl?: string
  barcode?: string
  retensi_aktif?: string
  retensi_inaktif?: string
  tipe_surat?: string
}

interface MasterArchivesInternalType extends RootResult {
  data?: MasterArchiveInternalType[]
  total?: string
}

interface MasterArchiveInternalType {
  APId?: string
  BerkasId?: string
  BerkasLokasi?: string
  ClStatus?: string
  ClCode?: string
  ClDesc?: string
  ClId?: string
  ClKey?: string
  ClName?: string
  ClParentId?: string
  ClStatusParent?: string
  CreatedBy?: string
  CreationRoleId?: string
  FileName_fake?: string
  Hal?: string
  Instansipengirim?: string
  JabatanPengirim?: string
  JenisId?: string
  KatId?: string
  LangId?: string
  MeasuereId?: string
  MediaId?: string
  NAgenda?: string
  NFileDir?: string
  NId?: string
  NKey?: string
  NLokasi?: string
  NTglReg?: string
  NTipe?: string
  Namapengirim?: string
  NoItem?: string
  Nomor?: string
  Pengirim?: string
  RetensiThn_Active?: string
  RetensiThn_Inactive?: string
  RoleId_To?: string
  SifatId?: string
  SusutId?: string
  TPId?: string
  Tesaurus?: string
  Tgl?: string
  To_Id_Desc?: string
  UrgensiId?: string
  VitId?: string
  barcode?: string
  barcodeB?: string
  berkas_Id?: string
  inbox_Id?: string
  katPenerima?: string
  ket?: string
  kodeC?: string
  no_Item?: string
  pejabatTTD?: string
  pemberkasan_Id?: string
  penyusutan?: string
  role_Id?: string
  thn_aktif?: string
  thn_inaktif?: string
  toId?: string
}