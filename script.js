// --- DATABASE MATERI (Simulasi) ---
const materiDB = [
    {
        id: 1,
        judul: "Pertemuan 1: Pengenalan Web & HTML",
        isi: `
            <h2>Apa itu Website?</h2>
            <p>Website adalah kumpulan halaman yang menampilkan informasi teks, gambar, animasi, suara, atau gabungan dari semuanya yang saling terkait.</p>
            
            <h2>Struktur Dasar HTML</h2>
            <p>HTML (HyperText Markup Language) adalah kerangka dasar web. Setiap file HTML harus memiliki struktur berikut:</p>
            <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Judul Halaman&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Halo Dunia!&lt;/h1&gt;
    &lt;p&gt;Ini adalah paragraf pertama.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
            </pre>
            <div class="info-box"><i class="fas fa-lightbulb"></i> Tips: Simpan file dengan ekstensi .html</div>
        `
    },
    {
        id: 2,
        judul: "Pertemuan 2: Format Teks HTML",
        isi: `
            <h2>Tag Heading</h2>
            <p>Heading digunakan untuk judul. Ada 6 tingkatan dari h1 sampai h6.</p>
            <pre>&lt;h1&gt;Judul Utama&lt;/h1&gt;\n&lt;h2&gt;Sub Judul&lt;/h2&gt;</pre>
            
            <h2>Paragraf & Style</h2>
            <p>Gunakan tag <b>&lt;p&gt;</b> untuk paragraf, <b>&lt;b&gt;</b> untuk tebal, dan <b>&lt;i&gt;</b> untuk miring.</p>
        `
    },
    {
        id: 3,
        judul: "Pertemuan 3: List dan Hyperlink",
        isi: `
            <h2>List (Daftar)</h2>
            <p>Ada dua jenis list: Ordered (Angka) dan Unordered (Bulatan).</p>
            <pre>
&lt;ul&gt; 
  &lt;li&gt;Kopi&lt;/li&gt;
  &lt;li&gt;Teh&lt;/li&gt;
&lt;/ul&gt;</pre>
            <h2>Hyperlink</h2>
            <p>Link dibuat menggunakan tag &lt;a&gt;. Atribut href berisi tujuan link.</p>
            <pre>&lt;a href="https://google.com"&gt;Ke Google&lt;/a&gt;</pre>
        `
    },
    {
        id: 4,
        judul: "Pertemuan 4: Multimedia (Gambar & Video)",
        isi: `
            <h2>Menyisipkan Gambar</h2>
            <p>Gunakan tag &lt;img&gt;. Tag ini tidak memiliki penutup.</p>
            <pre>&lt;img src="gambar.jpg" alt="Deskripsi Gambar" width="300"&gt;</pre>
            <h2>Menyisipkan Video</h2>
            <pre>&lt;video controls&gt;\n  &lt;source src="video.mp4" type="video/mp4"&gt;\n&lt;/video&gt;</pre>
        `
    },
    {
        id: 5,
        judul: "Pertemuan 5: Tabel HTML",
        isi: `
            <h2>Struktur Tabel</h2>
            <p>Tabel dibentuk oleh tag Table, TR (Baris), dan TD (Kolom).</p>
            <table>
                <tr><th>Tag</th><th>Fungsi</th></tr>
                <tr><td>&lt;table&gt;</td><td>Pembungkus utama</td></tr>
                <tr><td>&lt;tr&gt;</td><td>Table Row (Baris)</td></tr>
                <tr><td>&lt;td&gt;</td><td>Table Data (Sel)</td></tr>
            </table>
        `
    },
    {
        id: 6,
        judul: "Pertemuan 6: Form Input",
        isi: `
            <h2>Formulir</h2>
            <p>Digunakan untuk mengambil data dari user.</p>
            <pre>
&lt;form&gt;
  &lt;label&gt;Nama:&lt;/label&gt;
  &lt;input type="text" name="nama"&gt;
  &lt;br&gt;
  &lt;input type="submit" value="Kirim"&gt;
&lt;/form&gt;</pre>
        `
    },
    {
        id: 7,
        judul: "Pertemuan 7: Review & Latihan (UTS)",
        isi: `
            <h2>Persiapan UTS</h2>
            <p>Materi UTS mencakup Pertemuan 1 sampai 6.</p>
            <h3>Soal Latihan:</h3>
            <ol style="margin-left:20px">
                <li>Buat halaman Biodata Diri menggunakan Table.</li>
                <li>Buat Form pendaftaran dengan input Nama, Email, dan Password.</li>
                <li>Pastikan ada link navigasi ke halaman lain.</li>
            </ol>
        `
    },
    {
        id: 8,
        judul: "Pertemuan 8: Pengenalan CSS",
        isi: `
            <h2>Apa itu CSS?</h2>
            <p>CSS (Cascading Style Sheets) digunakan untuk menghias HTML agar menarik.</p>
            <h2>Cara Penulisan</h2>
            <p>Ada 3 cara: Inline, Internal, dan External.</p>
            <pre>
/* Contoh External CSS */
body {
    background-color: blue;
    color: white;
}</pre>
        `
    },
    {
        id: 9,
        judul: "Pertemuan 9: CSS Selector & Color",
        isi: `
            <h2>Selector</h2>
            <p>Memilih elemen yang akan dihias.</p>
            <ul>
                <li><b>Tag:</b> h1 { ... }</li>
                <li><b>Class:</b> .namaclass { ... }</li>
                <li><b>ID:</b> #namaid { ... }</li>
            </ul>
        `
    },
    {
        id: 10,
        judul: "Pertemuan 10: CSS Box Model",
        isi: `
            <h2>Konsep Box Model</h2>
            <p>Setiap elemen HTML dianggap sebagai kotak.</p>
            <div class="info-box">
                Urutan dari dalam keluar: Content > Padding > Border > Margin
            </div>
            <pre>
div {
  width: 300px;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
}</pre>
        `
    },
    {
        id: 11,
        judul: "Pertemuan 11: CSS Layout (Flexbox)",
        isi: `
            <h2>Flexbox</h2>
            <p>Teknik modern untuk mengatur tata letak yang responsif.</p>
            <pre>
.container {
  display: flex;
  justify-content: center; /* Posisi horizontal */
  align-items: center;     /* Posisi vertikal */
}</pre>
        `
    },
    {
        id: 12,
        judul: "Pertemuan 12: Pengenalan JavaScript",
        isi: `
            <h2>Dasar JavaScript</h2>
            <p>JS membuat web menjadi interaktif. Kode JS bisa dijalankan di console browser.</p>
            <pre>
// Menampilkan alert
alert("Halo JavaScript!");

// Menulis ke console
console.log("Sedang belajar JS");</pre>
        `
    },
    {
        id: 13,
        judul: "Pertemuan 13: Variabel & Tipe Data JS",
        isi: `
            <h2>Variabel</h2>
            <p>Gunakan <code>let</code> atau <code>const</code>.</p>
            <pre>
let nama = "Budi";
const umur = 20;
let isStudent = true;</pre>
            <p>Tipe data dasar: String, Number, Boolean.</p>
        `
    },
    {
        id: 14,
        judul: "Pertemuan 14: DOM Manipulation",
        isi: `
            <h2>Document Object Model (DOM)</h2>
            <p>Mengubah isi HTML menggunakan JavaScript.</p>
            <pre>
// Mengubah text elemen dengan ID 'judul'
document.getElementById("judul").innerText = "Judul Baru";

// Mengubah warna style
document.body.style.backgroundColor = "red";</pre>
        `
    }
];

// --- LOGIKA APLIKASI ---

const meetingList = document.getElementById('meeting-list');
const contentDisplay = document.getElementById('content-display');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');

// 1. Render Menu Sidebar
function initMenu() {
    materiDB.forEach(materi => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button onclick="loadMateri(${materi.id})" id="btn-${materi.id}">
                ${materi.judul} <i class="fa-solid fa-chevron-right"></i>
            </button>
        `;
        meetingList.appendChild(li);
    });
}

// 2. Fungsi Load Materi
window.loadMateri = function(id) {
    // Cari data berdasarkan ID
    const data = materiDB.find(item => item.id === id);
    
    // Update Konten dengan animasi fade
    contentDisplay.style.opacity = 0;
    
    setTimeout(() => {
        contentDisplay.innerHTML = `
            <div class="materi-card">
                <span style="font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">Materi Kuliah</span>
                <h1>${data.judul}</h1>
                <hr style="margin: 15px 0; border: 0; border-top: 1px solid #eee;">
                <div class="materi-body">
                    ${data.isi}
                </div>
            </div>
        `;
        contentDisplay.style.opacity = 1;
    }, 200);

    // Update tombol active di sidebar
    document.querySelectorAll('#sidebar button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${id}`).classList.add('active');

    // Tutup sidebar jika di mobile
    if(window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    }
}

// 3. Event Listener Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Jalankan saat pertama load
initMenu();