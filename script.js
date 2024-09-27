// Membuat elemen form menggunakan DOM
const formContainer = document.getElementById('form-container');
const form = document.createElement('form');

// Menambahkan judul
const title = document.createElement('h1');
title.textContent = 'Kuis Formulir';
title.style.textAlign = 'center';
title.style.color = '#273d53';
formContainer.appendChild(title);

// Menambahkan elemen notifikasi di atas formulir
const notifContainer = document.createElement('div');
notifContainer.id = 'notif-container';
notifContainer.style.marginBottom = '20px';
notifContainer.style.fontWeight = 'bold';
notifContainer.style.color = '#d9534f'; // Warna merah untuk pesan notifikasi
formContainer.appendChild(notifContainer);

// Nama
const labelNama = document.createElement('label');
labelNama.textContent = 'Nama:';
const inputNama = document.createElement('input');
inputNama.type = 'text';
inputNama.id = 'nama';
inputNama.required = true;
form.appendChild(labelNama);
form.appendChild(inputNama);

inputNama.addEventListener('input', () => {
    inputNama.value = inputNama.value.replace(/[^a-zA-Z\s]/g, '');
    console.log(`Nama diisi: ${inputNama.value}`);
});

// NIM
const labelNim = document.createElement('label');
labelNim.textContent = 'NIM:';
const inputNim = document.createElement('input');
inputNim.type = 'text';
inputNim.id = 'nim';
inputNim.required = true;
inputNim.pattern = '\\d*'; // Regex pattern to allow only digits
inputNim.title = 'NIM harus berupa angka';
form.appendChild(labelNim);
form.appendChild(inputNim);

inputNim.addEventListener('input', () => {
    inputNim.value = inputNim.value.replace(/\D/g, '');
});

// Tanggal Lahir
const labelTanggal = document.createElement('label');
labelTanggal.textContent = 'Tanggal Lahir:';
const inputTanggal = document.createElement('input');
inputTanggal.type = 'date';
inputTanggal.id = 'tanggal-lahir';
inputTanggal.required = true;
form.appendChild(labelTanggal);
form.appendChild(inputTanggal);

// Tempat Lahir
const labelTempat = document.createElement('label');
labelTempat.textContent = 'Tempat Lahir:';
const selectTempat = document.createElement('select');
selectTempat.id = 'tempat-lahir';
selectTempat.required = true;

const tempatList = ['Bekasi', 'Bogor', 'Depok'];
tempatList.forEach(tempat => {
    const option = document.createElement('option');
    option.value = tempat;
    option.textContent = tempat;
    selectTempat.appendChild(option);
});
form.appendChild(labelTempat);
form.appendChild(selectTempat);

// Jenis Kelamin
const fieldsetJk = document.createElement('fieldset');
const legendJk = document.createElement('legend');
legendJk.textContent = 'Jenis Kelamin:';
fieldsetJk.appendChild(legendJk);

const radioPerempuan = document.createElement('input');
radioPerempuan.type = 'radio';
radioPerempuan.name = 'jeniskelamin';
radioPerempuan.value = 'Perempuan';
const labelPerempuan = document.createElement('label');
labelPerempuan.textContent = 'Perempuan';

const radioLaki = document.createElement('input');
radioLaki.type = 'radio';
radioLaki.name = 'jeniskelamin';
radioLaki.value = 'Laki-laki';
const labelLaki = document.createElement('label');
labelLaki.textContent = 'Laki-laki';

fieldsetJk.appendChild(radioPerempuan);
fieldsetJk.appendChild(labelPerempuan);
fieldsetJk.appendChild(radioLaki);
fieldsetJk.appendChild(labelLaki);
form.appendChild(fieldsetJk);

radioPerempuan.addEventListener('change', () => {
    alert('Anda memilih Perempuan');
});

radioLaki.addEventListener('change', () => {
    alert('Anda memilih Laki-laki');
});


// Hobi
const fieldsetHobi = document.createElement('fieldset');
const legendHobi = document.createElement('legend');
legendHobi.textContent = 'Hobi:';
fieldsetHobi.appendChild(legendHobi);

const hobiList = ['Berjualan', 'Tidur', 'Makan', 'Berbelanja'];
hobiList.forEach(hobi => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'hobi';
    checkbox.value = hobi;
    const label = document.createElement('label');
    label.textContent = hobi;
    fieldsetHobi.appendChild(checkbox);
    fieldsetHobi.appendChild(label);
});
form.appendChild(fieldsetHobi);

// Prodi
const fieldsetProdi = document.createElement('fieldset');
const legendProdi = document.createElement('legend');
legendProdi.textContent = 'Prodi:';
fieldsetProdi.appendChild(legendProdi);

const prodiList = ['SIK', 'PGSD', 'PKP', 'LK', 'PGAUD'];
const infoProdi = document.createElement('div'); // Div untuk informasi tambahan
infoProdi.id = 'info-prodi';
infoProdi.style.marginTop = '20px'; // Spasi atas untuk info

prodiList.forEach(prodi => {
    const radioProdi = document.createElement('input');
    radioProdi.type = 'radio';
    radioProdi.name = 'prodi';
    radioProdi.value = prodi;
    const labelProdi = document.createElement('label');
    labelProdi.textContent = prodi;
    fieldsetProdi.appendChild(radioProdi);
    fieldsetProdi.appendChild(labelProdi);
    
    radioProdi.addEventListener('change', () => {
        const info = getProdiInfo(prodi); // Fungsi untuk mendapatkan info
        infoProdi.textContent = info;
    });
});
form.appendChild(fieldsetProdi);
form.appendChild(infoProdi);

function getProdiInfo(prodi) {
    // Fungsi untuk menentukan informasi berdasarkan prodi
    const infoMap = {
        'SIK': 'Program Studi Sistem Informasi Kelautan.',
        'PGSD': 'Program Studi Pendidikan Guru Sekolah Dasar.',
        'PKP': 'Program Studi Pendidikan kelautan perikanan.',
        'LK': 'Program Studi Logistik Kelautan.',
        'PGAUD': 'Program Studi Pendidikan Guru Anak Usia Dini.'
    };
    return infoMap[prodi] || 'Informasi tidak tersedia.';
}




// Tombol Kirim
const buttonKirim = document.createElement('button');
buttonKirim.type = 'submit';
buttonKirim.textContent = 'Kirim';
form.appendChild(buttonKirim);

// Event pada tombol kirim
buttonKirim.addEventListener('click', (event) => {
    event.preventDefault();

    // Mengumpulkan data formulir
    const nama = inputNama.value;
    const nim = inputNim.value;
    const tanggalLahir = inputTanggal.value;
    const tempatLahir = selectTempat.value;
    const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked')?.value || 'Belum dipilih';
    const hobi = Array.from(document.querySelectorAll('input[name="hobi"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ');
    const prodi = document.querySelector('input[name="prodi"]:checked')?.value || 'Belum dipilih';

    // Membuat pesan notifikasi
    const message = `Nama: ${nama}
NIM: ${nim}
Tanggal Lahir: ${tanggalLahir}
Tempat Lahir: ${tempatLahir}
Jenis Kelamin: ${jenisKelamin}
Hobi: ${hobi}
Prodi: ${prodi}`;

    // Menampilkan notifikasi
    alert(`Formulir telah dikirim!\n\nJawaban Anda:\n${message}`);
});

// Tambahkan form ke form-container
formContainer.appendChild(form);
