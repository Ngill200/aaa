const data = [
    {
        id: 1,
        name: "Ali"
    },
    {
        id: 2,
        name: "Ahmad"
    },
    {
        id: 3,
        name: "Arslan"
    },
    {
        id: 4,
        name: "Arham"
    },
    {
        id: 5,
        name: "Arham"
    },
    {
        id: 6,
        name: "Arham",
        age: 23,
    }
]

function fetchData(data) {
    const getData = document.querySelector('.container-fluid');
    data.map(dat => {
        let newCard = `
        <div class="card m-3 text-black text-bg-danger" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${dat.id}</h5>
          <p class="card-text">${dat.name}</p>
          <a href="#" class="btn btn-success">Go somewhere</a>
        </div>
      </div>
        `
        getData.innerHTML += newCard
    })
}

fetchData(data)

let arr = [
    { age: 23, name: 'saim', fav:{play:'football'} }, 
    { age: 23, name: 'asd' ,fav:{play:'pool'}},
    { age: 23, name: 'dfa',fav:{play:'fifa'}}, 
]

for(let i = 0; i<3; i++){
    arr[i].fav.play;
}

arr.map(i=>i.fav.play)
arr.map(i=>{
    i.name
    i.age
})

