const ponsel =[
    {
    "nama":"oppo A71",
    "gambar":"",
    "ramPonsel":"2GB",
    "hargaPonsel":"$ 654.45",
    "storage":"32GB",
},
{
   "nama":"Samsung Galaxy s10",
   "gambar":"",
   "ramPonsel":"128GB+8GB",
   "hargaPonsel":"128+8GB",
},
{
    "nama":"Vivo v15",
    "gambar":"",
    "ramPonsel":"6/64GB",
    "hargaPonsel":"4.399.000",
    "storage":"32GB", 
},
{
    "nama":"Huawei p30",
    "gambar":"",
    "ramPonsel":"128GB+6GB",
    "hargaPonsel":"$530.00",
    "storage":"32GB", 
},
{ 
    
    "nama":"Sony Xperia 1",
    "gambar":"",
    "ramPonsel":"128GB",
    "hargaPonsel":"$949.99",
    "storage":"32GB",      
},
{
    "nama":"Apple iphone x",
    "gambar":"",
    "ramPonsel":"128GB",
    "hargaPonsel":"$999.99",
    "storage":"64GB",  
},
{
    "nama":"LG v35 ThinQ v35",
    "gambar":"",
    "ramPonsel":"128GB",
    "hargaPonsel":"$299.99",
    "storage":"64GB",  
}
];

let x;

for(x in ponsel){ 
    let namaPonsel = ponsel[x].nama
    let hargaPonsel = ponsel[x].harga
    let ramPonsel= ponsel[x].ram
    let storagePonsel = ponsel[x].storage
    let divider ="<div><span class='nama-ponsel"+namaPonsel+"</span><span class='harga-ponsel'>"+hargaPonsel+"</span><span class='ram-ponsel'>"+ramPonsel+"</span><span class='storage-ponsel'>"+storagePonsel+"</span></div>";
    document.getElementById('ponsel-saya').innerHTML += divider
}
