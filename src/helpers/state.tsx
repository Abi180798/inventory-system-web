export const archiveInitialState = (currentUser?: any, data?: any) => {
  const state = {
    PeopleId: currentUser?.PeopleId || '',
    tipe_surat: data?.NTipe || 'inbox',
    NId: data?.NId || '',
    GIR_Id: data?.GIR_Id || '',
    NTglReg: data?.NTglReg || '',
    PrimaryRoleId: currentUser?.PrimaryRoleId || '',
    nomor_surat: data?.Nomor || '',
    kode_surat: data?.ClId || '',
    barcode: data?.barcode || '',
    hal: data?.Hal || '',
    agenda: data?.NAgenda || '',
    jenis_naskah: data?.JenisId || '',
    tingkat_perkembangan: data?.TPId || 'Z32zwmhpfj.1',
    akses_publik: data?.APId || 'Z32zwmhpfj.1',
    kategori_arsip: data?.KatId || 'Z32zwmhpfj.2',
    sifat: data?.SifatId || 'Z32zwmhpfj.1',
    urgensi: data?.UrgensiId || 'Z32zwmhpfj.1',
    media: data?.MediaId || 'Z32zwmhpfj.1',
    vital: data?.VitId || 'Z32zwmhpfj.1',
    jumlah: data?.NJml || '',
    bahasa: data?.LangId || 'Z32zwmhpfj.1',
    satuan_unit: data?.MeasureId || 'Z32zwmhpfj.1',
    kategori_pengirim: data?.Pengirim || 'internal',
    kategori_penerima: data?.kat_penerima || 'internal',
    asal_surat: data?.Namapengirim === "" ? data?.Instansipengirim : data?.Namapengirim || '',
    tujuan_surat: data?.kat_penerima === "external" ? data?.To_Id_Desc : data?.toId?.split(",") || [],
    pejabat_ttd: data?.pejabatTTD || '',
    tgl_surat: data?.Tgl ? new Date(data?.Tgl) : new Date(),
    lokasi_arsip: data?.NLokasi || '',
    berkas: data?.BerkasId || "1",
    ket: data?.ket || '',
    path: data?.NFileDir || '',
    file: ''
  }
  return state;
}