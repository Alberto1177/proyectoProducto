let divData = document.getElementById("divData");

function getData() {
    const promesa = fetch ("https://freetestapi.com/api/v1/products",
                            {method: "GET"});
    promesa.then((response)=>{
        response.json().then(
            (data)=>{
                //Se manda el arragelo
                console.log(data);
                createCards(data);
            })
        .catch((error)=>console.log("Problemas con el JSON", error))
    })
    .catch((err)=>
        console.log("Existio un problema con la solicitud", err));
}//get data  con datos desde url

function createCards(products) {
    console.log(products.length);
    console.log(products[0].name)
    //crear una card para cada uno de los productos con su informacion
    products.forEach((product) => {
        divData.innerHTML +=`
            <div class="card" style="width: 18rem">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Precio: ${product.price}</p>
                <p class="card-text">Descripción: ${product.description}</p>
            </div>
            </div>
            </br>`;
            divData.append();
    });
}//createCards

getData();