let myStore = new store("Cửa hàng của Đạt"); 
let p1 =new Product(1,"bánh mỳ",2100,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmPssODV3mNij6xptcUzMmRUYLEGqFY7T0nh-BWj-TebwPPEo&s")
let p2 =new Product(2,"bánh bao",2400,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mLwetgWLzXRccAUnQbDOBlonHrT8jKeCSKhJxWOxipfvgAoE&s")
myStore.addProduct(p1);
myStore.addProduct(p2);

console.log(myStore.listProduct);  
showAll();     

function remove(index){
    let isConfirm = confirm("bạn có muốn xoá không ?")
    if(confirm){
        myStore.removeProduct(index)
        alert("xoá thành công")
        showAll()
    }
}

function Add(){
    let idInput = document.getElementById("id").value;
    let nameInput = document.getElementById("name").value;
    let priceInput = document.getElementById("price").value;
    let imgInput =document.getElementById("img").value;
    let newProduct = new Product(idInput,nameInput,priceInput,imgInput);
    myStore.addProduct(newProduct)
    alert("thêm thành công");
    showAll()
}

function edit(index) {
    let product = myStore.getOneProduct(index);
    let newName = document.getElementById("name").value;
    let newPrice = document.getElementById("price").value;
    let newImg = document.getElementById("img").value;
    let newId = document.getElementById("id").value;

    
    let updatedProduct = new Product(newId, newName, newPrice, newImg);

  
    myStore.update(index, updatedProduct);

    
    alert("Chỉnh sửa sản phẩm thành công!");

    
    showAll();
}
function showAll(){
    let list = myStore.listProduct;
    let str =`
    <tr>
            <th>Id</th>
            <th>name</th>
            <th>price</th>
            <th>img</th>
            <th colspan="2">action</th>
        </tr>   
    `
    for(i = 0;i<list.length;i++){
        str = str +`
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].img}" alt=""></td>
            <td><button onclick="edit(${i})">sửa</button></td>
            <td><button onclick="remove(${i})">xoá</button></td>
        </tr>
        `
        document.getElementById("table-product").innerHTML = str
    }
}

