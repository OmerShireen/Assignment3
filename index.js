function search (){

let text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque facere sed asperiores at vel aperiam laboriosam minima laborum beatae accusantium maxime, tempora, quibusdam voluptatem, quisquam sint commodi neque id!"

let result = text.includes (prompt ("Enter text here "));

if (result != text.includes()){
    alert("Text found")
}
else{
    alert("Text not found")
}

}
