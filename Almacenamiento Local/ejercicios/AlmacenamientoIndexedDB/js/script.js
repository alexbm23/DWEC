// Variable global para almacenar el nombre original al editar
let originalName = "";

// Abrir/crear la base de datos
const request = indexedDB.open("MiBaseDeDatos", 1);

request.onerror = (event) => {
    console.error("Error al abrir la base de datos:", event);
};

request.onsuccess = (event) => {
    console.log("Base de datos abierta con éxito");
    db = event.target.result;
    loadIndexedDBItemsIntoTable();
};

request.onupgradeneeded = (event) => {
    db = event.target.result;
    const objectStore = db.createObjectStore("MiObjectStore", { keyPath: "name" });
    objectStore.createIndex("value", "value", { unique: false });
};

// Función para agregar o actualizar un item en IndexedDB
function setIndexedDBItem(name, value) {
    const transaction = db.transaction(["MiObjectStore"], "readwrite");
    const objectStore = transaction.objectStore("MiObjectStore");
    const request = objectStore.put({ name: name, value: value });

    request.onerror = (event) => {
        console.error("Error al guardar el item:", event);
    };

    request.onsuccess = (event) => {
        console.log("Item guardado con éxito");
    };
}

// Función para obtener todos los items de IndexedDB
function getIndexedDBItems(callback) {
    const transaction = db.transaction(["MiObjectStore"], "readonly");
    const objectStore = transaction.objectStore("MiObjectStore");
    const request = objectStore.getAll();

    request.onerror = (event) => {
        console.error("Error al obtener los items:", event);
    };

    request.onsuccess = (event) => {
        callback(request.result);
    };
}

// Función para borrar un item de IndexedDB
function deleteIndexedDBItem(name) {
    const transaction = db.transaction(["MiObjectStore"], "readwrite");
    const objectStore = transaction.objectStore("MiObjectStore");
    const request = objectStore.delete(name);

    request.onerror = (event) => {
        console.error("Error al borrar el item:", event);
    };

    request.onsuccess = (event) => {
        console.log("Item borrado con éxito");
        const row = document.getElementById(name);
        if (row) {
            row.remove(); // Eliminar la fila del DOM
        }
    };
}

// Función para agregar la fila a la tabla
function addRowToTable(name, value) {
    const tableBody = document.querySelector('#tabla-Solucion tbody');
    const row = document.createElement('tr');
    row.id = name; // Asignar un ID único basado en el nombre

    row.innerHTML = `
        <td>${name}</td>
        <td>${value}</td>
        <td><button onclick="deleteIndexedDBItem('${name}')">Borrar <span><i class='fa fa-remove'></i></span></button></td>
        <td><button onclick="loadIndexedDBItemToInputs('${name}', '${value}')">Editar <span style='margin-left: 5px;'><i class='fa fa-edit'></i></span></button></td>
    `;

    tableBody.appendChild(row);
}

// Función para cargar un item de IndexedDB en los inputs
function loadIndexedDBItemToInputs(name, value) {
    document.getElementById('valor1').value = name;
    document.getElementById('valor2').value = value;
    originalName = name; // Guardar el nombre original para usar al guardar los cambios
}

// Función para mostrar todos los items de IndexedDB en la tabla al cargar la página
function loadIndexedDBItemsIntoTable() {
    getIndexedDBItems((items) => {
        items.forEach((item) => {
            addRowToTable(item.name, item.value);
        });
    });
}

// Evento para el botón de guardar
const saveButton = document.querySelector('button:nth-of-type(1)');
saveButton.addEventListener('click', () => {
    const name = document.getElementById('valor1').value;
    const value = document.getElementById('valor2').value;

    if (name && value) {
        if (originalName && originalName !== name) {
            // Si el nombre original es diferente al nuevo, eliminar el item original
            deleteIndexedDBItem(originalName);
        }
        setIndexedDBItem(name, value);
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

        setIndexedDBItem(name, value);
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

            setIndexedDBItem(name, value);
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
