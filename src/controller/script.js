import Empleado from "../models/Empleado.js";
import { bst } from "./dependecies1.js";

let btnAdd = document.getElementById("agenda-btn");
let btnSearch = document.getElementById("search-btn");
let btnMin = document.getElementById("min-btn");
let btnMax = document.getElementById("max-btn");
let searchResultsContainer = document.getElementById("searchResults");
let btnFull = document.getElementById("full-btn")

btnAdd.addEventListener("click", () => {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let jobTitle = document.getElementById("jobTitle").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let email = document.getElementById("email").value.trim();
    let state = document.getElementById("state").value.trim();
    let zip = document.getElementById("zip").value.trim();

  
    if (!firstName || !lastName || !phoneNumber || !jobTitle || !address || !city || !email || !state || !zip) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Campo Vacios!",
          });
        return; 
    }

    console.log("Agregar:", { firstName, lastName, phoneNumber, jobTitle, email, address, city, state, zip });

    let empleado = new Empleado(firstName, lastName, phoneNumber, jobTitle, email, address, city, state, zip);
    let data = bst.add(empleado);
    console.log("Resultado de agregar:", data); 
    
    if (data) {
        Swal.fire({
            title: "Agregado Exitosamente!",
            text: "El usuario fue agregado!",
            icon: "success"
        });
        
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Usuario no pudo ser Agregado",
        });
    }
});

btnSearch.addEventListener("click", () => {
    let lastName = document.getElementById("lastNameSerach").value.trim();


    if (lastName === "") {
        return; 
    }

    let employeeFound = false; 

    searchResultsContainer.innerHTML = "";

    bst.inOrder((empleado) => {
        if (empleado.lastName.includes(lastName)) {
            console.log("Contacto encontrado:", empleado); 
            let empleadoElement = document.createElement("div");
            empleadoElement.textContent = `Nombre: ${empleado.firstName} ${empleado.lastName}, Teléfono: ${empleado.phoneNumber}, Puesto: ${empleado.jobTitle}, Email: ${empleado.email}, Dirección: ${empleado.address}, Ciudad: ${empleado.city}, Estado: ${empleado.state}, Zip: ${empleado.zip}`;
            searchResultsContainer.appendChild(empleadoElement);
            employeeFound = true; 
        }
    });

    if (employeeFound) {
        Swal.fire({
            title: "Empleado Encontrado!",
            text: "Se encontró al menos un empleado con ese apellido.",
            icon: "success"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Usuario no se encuentra",
        });
    }
});


btnMin.addEventListener("click", () => {
    let route = bst.min();
    searchResultsContainer.innerHTML = ""; 
    
    if (route) {
        let empleadoElement1 = document.createElement("div");
        empleadoElement1.textContent = `Nombre: ${route.value.firstName || 'N/A'} ${route.value.lastName || 'N/A'}, Teléfono: ${route.value.phoneNumber || 'N/A'}, Puesto: ${route.value.jobTitle || 'N/A'}, Email: ${route.value.email || 'N/A'}, Dirección: ${route.value.address || 'N/A'}, Ciudad: ${route.value.city || 'N/A'}, Estado: ${route.value.state || 'N/A'}, Zip: ${route.value.zip || 'N/A'}`;
        searchResultsContainer.appendChild(empleadoElement1);
    } else {
        searchResultsContainer.textContent = "No se encontró ningún empleado.";
    }
});

btnMax.addEventListener("click", () => {
    let route = bst.max(); 
    searchResultsContainer.innerHTML = ""; 

    if (route) {
        let empleadoElement1 = document.createElement("div");
        empleadoElement1.textContent = `Nombre: ${route.value.firstName || 'N/A'} ${route.value.lastName || 'N/A'}, Teléfono: ${route.value.phoneNumber || 'N/A'}, Puesto: ${route.value.jobTitle || 'N/A'}, Email: ${route.value.email || 'N/A'}, Dirección: ${route.value.address || 'N/A'}, Ciudad: ${route.value.city || 'N/A'}, Estado: ${route.value.state || 'N/A'}, Zip: ${route.value.zip || 'N/A'}`;
        searchResultsContainer.appendChild(empleadoElement1);
    } else {
        searchResultsContainer.textContent = "No se encontró ningún empleado.";
    }
});

btnFull.addEventListener("click", () =>{
    searchResultsContainer.innerHTML = ""; 
    
    bst.inOrder((empleado) => { 
        let empleadoElement = document.createElement("div");
        empleadoElement.textContent = `Nombre: ${empleado.firstName} ${empleado.lastName}, Teléfono: ${empleado.phoneNumber}, Puesto: ${empleado.jobTitle}, Email: ${empleado.email}, Dirección: ${empleado.address}, Ciudad: ${empleado.city}, Estado: ${empleado.state}, Zip: ${empleado.zip}`;
        searchResultsContainer.appendChild(empleadoElement);
    });
    
})