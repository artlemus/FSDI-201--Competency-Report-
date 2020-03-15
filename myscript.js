const salon = {
  name: "the fasion pet",
  phone: "321-1321",
  address: {
    street: "avcgfdgfd",
    number: "654"
  },
  workingHours: {
    days: "mon-fri",
    open: "9am",
    close: "5pm"
  },
  pets: []
};

console.log(salon);

let {
  name,
  phone,
  address: { street, number },
  workingHours: { days, open, close }
} = salon;


document.querySelector('.info').innerHTML = `Contact us ${phone}, ${street} ${number}<br>Open from:
${open} to ${close}`
// object Constructorfee
var c = 0;

class Pet {
  constructor(name, age, gender, breed, service, ownerName, ownerContact) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = ownerName;
    this.ownerContact = ownerContact;
    this.hunger = 10;
    this.happiness = 5;
    this.id = "pet" + c;
    c += 1;
  }
  ownerInfo = function() {
    console.log(
      "owner name:" +
        this.ownerName +
        "\n" +
        "contact info:" +
        this.ownerContact
    );
  };
  feed = function() {
    this.hunger = 5;
    this.happiness += 5;
    console.log("feeding..");
  };
  status = function() {
    console.log("hunger:" + this.hunger + "\n" + "happiness:" + this.happiness);
  };
}

const pet1 = new Pet("shaggy", 2, "male", "boxer", "shower", "sam", "8768766");
const pet2 = new Pet("saggy", 5, "male", "boxer", "shower", "sam", "8768766");
const pet3 = new Pet("laggy", 6, "male", "boxer", "shower", "sam", "8768766");

pet1.ownerInfo();
pet2.ownerInfo();
pet3.ownerInfo();

console.log(pet1);
console.log(pet2);
console.log(pet3);

pet1.status();
pet1.feed();
pet1.status();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textname = document.getElementById("txtname");
var textage = document.getElementById("txtage");
var textgender = document.getElementById("txtgender");
var textbreed = document.getElementById("txtbreed");
var textservice = document.getElementById("txtservice");
var textowner = document.getElementById("txtOname");
var textcontact = document.getElementById("txtcontact");

function register() {
  // console.log(textname.value);
  // console.log(textage.value);
  // console.log(textgender.value);
  // console.log(textbreed.value);
  // console.log(textservice.value);
  // console.log(textowner.value);
  // console.log(textcontact.value);

  const thePet = new Pet(
    textname.value,
    textage.value,
    textgender.value,
    textbreed.value,
    textservice.value,
    textowner.value,
    textcontact.value
  );

  var tbody = document.getElementById("rowPet");

  var row = `<tr id='${thePet.id}'>
    <td>${thePet.name}</td>
    <td>${thePet.age}</td>
    <td>${thePet.breed}</td>
    <td>${thePet.gender}</td>
    <td>${thePet.service}</td>
    <td>${thePet.owner}</td>
    <td>${thePet.ownerContact}</td>
    <td> <button onclick='deletePet("${thePet.id}")'>Delete</button></td>
    </tr>`;
  tbody.innerHTML += row;

  salon.pets.push(thePet);

  alert("you registered a new pet.");
  clear();
}

function clear() {
  textname.value = "";
  textage.value = "";
  textgender.value = "";
  textbreed.value = "";
  textservice.value = "";
  textowner.value = "";
  textcontact.value = "";
}

function display(aPet) {
  var tbody = document.getElementById("rowPet");

  var row = `<tr id='${aPet.id}'>
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.service}</td>
    <td>${aPet.owner}</td>
    <td>${aPet.ownerContact}</td>
    <td> <button onclick='deletePet("${aPet.id}")'>Delete</button></td>
    
    </tr>`;
  tbody.innerHTML += row;
}
display(pet1);
display(pet2);
display(pet3);

function deletePet(petId) {
  var tr = document.getElementById(petId);
  var indexDelete;

  // search pet using id

  for (var i = 0; i < salon.pets.length; i++) {
    var selected = salon.pets[i];
    if (selected.id === petId) {
      indexDelete = i;
    }
  }

  salon.pets.splice(indexDelete, 1);
  tr.remove();
}
