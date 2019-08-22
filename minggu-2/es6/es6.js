const siswa =[{
    "nama":"Achmad Zulfikar",
    "kelas":"xi-RPL1"
},
{
    "nama":"wisman ndraha",
    "kelas":"xi-RPL1"
},
{
    "nama":"Rendi Fadilah",
    "kelas":"xi-RPL1"
}
];

let x;

for(x in siswa){ 
    let namaSiswa = siswa[x].nama
    let kelasSiswa = siswa[x].kelas
    let divider = "<div>\<span class='nama-siswa'>"+namaSiswa+"</span>\<span class='kelas-siswa'>"+kelasSiswa+"</span>\</div>";
document.getElementById('siswa-rpl').innerHTML += divider
}