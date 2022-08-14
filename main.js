const d = document;

// Consulta a API para imprimir categorias
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => (
        d.getElementById("item1").innerHTML = data[0],
        d.getElementById("item2").innerHTML = data[1],
        d.getElementById("item3").innerHTML = data[2],
        d.getElementById("item4").innerHTML = data[3]
    ))

//consulta a API para imprimir tarjetas en Index
for (let i = 1; i < 9; i++) {
    fetch(`https://fakestoreapi.com/products/${i}`)
        .then(res => res.json())
        .then(data => (
            d.getElementById(`img-art${i}`).setAttribute('src', data.image),
            d.getElementById(`titulo${i}`).innerHTML = data.title,
            d.getElementById(`categoria${i}`).innerHTML = data.category,
            d.getElementById(`precio${i}`).innerHTML = "$ "+data.price
    ));
}

//consulta api para imprimir productos de electronica
for (let i = 0; i < 7; i++) {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then(res => res.json())
        .then(data => (
            d.getElementById(`elect-img${i}`).setAttribute('src', data[i].image),
            d.getElementById(`elect-categoria${i}`).innerHTML = data[i].title,
            d.getElementById(`elect-titulo${i}`).innerHTML = data[i].category,
            d.getElementById(`elect-precio${i}`).innerHTML = "$ "+data[i].price
    ));
}

//sonsulta para imprimri joyeria
for (let i = 0; i < 5; i++) {
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then(res => res.json())
        .then(data => (
            d.getElementById(`joyas-img${i}`).setAttribute('src', data[i].image),
            d.getElementById(`joyas-categoria${i}`).innerHTML = data[i].title,
            d.getElementById(`joyas-titulo${i}`).innerHTML = data[i].category,
            d.getElementById(`joyas-precio${i}`).innerHTML = "$ "+data[i].price
    ));
}

//consulta para imprimir moda masculina
for (let i = 0; i < 5; i++) {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(res => res.json())
        .then(data => (
            d.getElementById(`mens-img${i}`).setAttribute('src', data[i].image),
            d.getElementById(`mens-categoria${i}`).innerHTML = data[i].title,
            d.getElementById(`mens-titulo${i}`).innerHTML = data[i].category,
            d.getElementById(`mens-precio${i}`).innerHTML = "$ "+data[i].price
    ));
}

//consulta para imprimir mda femenina
for (let i = 0; i < 7; i++) {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res => res.json())
        .then(data => (
            d.getElementById(`wom-img${i}`).setAttribute('src', data[i].image),
            d.getElementById(`wom-categoria${i}`).innerHTML = data[i].title,
            d.getElementById(`wom-titulo${i}`).innerHTML = data[i].category,
            d.getElementById(`wom-precio${i}`).innerHTML = "$ "+data[i].price
    ));
}
