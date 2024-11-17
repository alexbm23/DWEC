// Variable global para almacenar el nombre original al editar
let originalName = "";

// Función para guardar un par de valores en el localStorage
function setLocalStorageItem(name, value) {
    localStorage.setItem(name, value);
}

// Función para obtener los items del localStorage como un objeto
function getLocalStorageItems() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
            items[key] = localStorage.getItem(key);
        }
    }
    return items;
}

// Función para agregar la fila a la tabla
function addRowToTable(name, value) {
    const tableBody = document.querySelector('#tabla-Solucion tbody');
    const row = document.createElement('tr');
    row.id = name; // Asignar un ID único basado en el nombre

    row.innerHTML = `
        <td>${name}</td>
        <td>${value}</td>
        <td><button onclick="deleteLocalStorageItem('${name}')">Borrar <span><i class='fa fa-remove'></i></span></button></td>
        <td><button onclick="loadLocalStorageItemToInputs('${name}', '${value}')">Editar <span style='margin-left: 5px;'><i class='fa fa-edit'></i></span></button></td>
    `;

    tableBody.appendChild(row);
}

// Función para cargar un item del localStorage en los inputs
function loadLocalStorageItemToInputs(name, value) {
    document.getElementById('valor1').value = name;
    document.getElementById('valor2').value = value;
    originalName = name; // Guardar el nombre original para usar al guardar los cambios
}

// Función para mostrar todos los items del localStorage en la tabla al cargar la página
function loadLocalStorageItemsIntoTable() {
    const items = getLocalStorageItems();
    for (const [name, value] of Object.entries(items)) {
        if (name && value) {
            addRowToTable(name, value);
        }
    }
}

// Función para borrar un item del localStorage y actualizar la tabla
function deleteLocalStorageItem(name) {
    localStorage.removeItem(name);
    const row = document.getElementById(name);
    if (row) {
        row.remove(); // Eliminar la fila del DOM
    }
}

// Evento para el botón de guardar
const saveButton = document.querySelector('button:nth-of-type(1)');
saveButton.addEventListener('click', () => {
    const name = document.getElementById('valor1').value;
    const value = document.getElementById('valor2').value;

    if (name && value) {
        if (originalName && originalName !== name) {
            // Si el nombre original es diferente al nuevo, eliminar el item original
            deleteLocalStorageItem(originalName);
        }
        setLocalStorageItem(name, value);
        location.reload(); // Para actualizar la tabla con los cambios
        originalName = ""; // Resetear el nombre original después de guardar
    } else {
        alert("Por favor, rellena ambos campos.");
    }
});

// Función para generar un valor aleatorio de la API y agregarlo a la tabla
async function fetchAndAddRow() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Cambia la URL según tu API
        const data = await response.json();
        const name = data.title.substring(0, 10); // Puedes ajustar los datos obtenidos
        const value = data.body.substring(0, 15);

        setLocalStorageItem(name, value);
        addRowToTable(name, value);
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

// Función para generar 5 valores y agregarlos a la tabla
async function fetchAndAddMultipleRows() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Cambia la URL según tu API
        const data = await response.json();
        for (let i = 0; i < 5; i++) {
            const name = data[i].title.substring(0, 10); // Ajusta los datos obtenidos
            const value = data[i].body.substring(0, 15);

            setLocalStorageItem(name, value);
            addRowToTable(name, value);
        }
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

// Eventos para los botones de generar
const generateOneButton = document.querySelector('button:nth-of-type(2)');
generateOneButton.addEventListener('click', fetchAndAddRow);

const generateFiveButton = document.querySelector('button:nth-of-type(3)');
generateFiveButton.addEventListener('click', fetchAndAddMultipleRows);

// Cargar los items del localStorage en la tabla al cargar la página
window.onload = loadLocalStorageItemsIntoTable;
