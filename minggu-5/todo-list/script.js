let todo = [
{
    title:"Rendang",
    description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali"
},
{
    title:"udang tumis",
    description:"Tumis bawang merah dan bawang putih hingga harum. Masukkan cabai, lengkuas, dan daun salam, tumis hingga layu."
},
{
    title:"Ayam penyet",
    description:"Ayam penyet adalah masakan Indonesia - lebih tepatnya masakan Jawa Timur - masakan ayam goreng yang terdiri dari ayam goreng yang dihancurkan dengan alu terhadap mortar untuk membuatnya lebih lembut, disajikan dengan sambal, irisan mentimun, tahu goreng dan tempe"
},
{
    title:"jus mangga",
    description:"Sorbet mangga. Blender separuh mangga yang telah dipotong-potong bersama jeruk nipis, simple syrup, dan sedikit garam. "
},
{
    title:"alpukat",
    description:"Avokad ialah tumbuhan penghasil buah meja dengan nama sama. Tumbuhan ini berasal dari Meksiko dan Amerika Tengah dan kini banyak dibudidayakan di Amerika Selatan dan Amerika Tengah sebagai tanaman perkebunan monokultur dan sebagai tanaman pekarangan di daerah-daerah tropika lainnya di dunia."
}
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')

    listItem =()=>{
        for ( let x in todo){
            this.item.innerHTML +='<div class="list-item">'+todo[x].title+'</div>'
        }
    }
    setDisplay =  (n=0)=>{
       this. content.innerHTML ='<div class="title">'+todo[n].title+'</div>\
       <div class="container">'+todo[n].description+'</div>'
    }
}
const todoList = new TodoList()
