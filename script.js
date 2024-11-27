const checkOutLines = [[], [], [], [], []];

const customers = [
    "Max", "James", "Alice", "Sophia", "Liam", "Emma", "Noah", "Olivia",
    "Ethan", "Isabella", "Lucas", "Mia", "Mason", "Charlotte", "Logan",
    "Amelia", "Elijah", "Harper", "Jacob", "Evelyn", "Michael", "Avery",
    "Benjamin", "Scarlett", "Alexander", "Abigail", "Henry", "Emily",
    "William", "Ella", "Daniel", "Luna", "Matthew", "Chloe", "Aiden"
];

let task = {};

function randomCustomersPerLine() {
    checkOutLines.forEach(line => {
        let randomCustomersCount = Math.floor(Math.random() * 5) + 1;

        for (let i = 0; i < randomCustomersCount; i++) {
            if (customers.length > 0) {
                let randomCustomerIndex = Math.floor(Math.random() * customers.length);
                let randomCustomer = customers.splice(randomCustomerIndex, 1)[0];
                let randomItems = Math.floor(Math.random() * 15) + 1;

                line.push({ customer: randomCustomer, items: randomItems });
            }
        }
    });

    task = { checkoutLines: checkOutLines };
}

randomCustomersPerLine();
const sum = [];

function sumOfItem() {
    checkOutLines.forEach(line => {
        const lineSum = line.reduce((total, obj) => total + obj.items, 0);
        sum.push(lineSum);
    });
}

sumOfItem();

function inputField() {
    const userName = document.getElementById("item").value.trim();
    const itemNumber = document.getElementById("name").value.trim();

    if (userName && itemNumber) {
        const newInput = { customer: userName, items: parseInt(itemNumber) };

        sum.length = 0;
        checkOutLines.forEach(line => {
            const lineSum = line.reduce((total, obj) => total + obj.items, 0);
            sum.push(lineSum);
        });

        const minLine = Math.min(...sum);
        const indexLine = sum.indexOf(minLine);

        checkOutLines[indexLine].push(newInput);

        sumOfItem();
        rendaring();
    } else {
        alert("Both fields are required!");
    }
}

function rendaring() {
    const container = document.getElementById("container");

    container.innerHTML = "";

    checkOutLines.forEach((line, index) => {
        container.innerHTML += `<h3>Line ${index + 1}</h3>`;

        const taskList = document.createElement("div");
        taskList.className = "taskList";
        taskList.id = `taskList${index + 1}`;

        const ul = document.createElement("ul");
        line.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = `Customer: ${entry.customer}, Items: ${entry.items}`;
            ul.appendChild(li);
        });

        taskList.appendChild(ul);
        container.appendChild(taskList);
    });
}

inputField();

function decrementItems() {
    checkOutLines.forEach((line, index) => {
        if (line.length > 0) {
            line[0].items -= 1;

            if (line[0].items <= 0) {
                line.shift();
            }
        }
    });
}

function startPeriodicRendering() {
    setInterval(() => {
        decrementItems();
        sumOfItem();
        rendaring();
    }, 3000);
}

sumOfItem();
rendaring();
startPeriodicRendering();







































// const checkOutLines = [
//     [],
//     [],
//     [],
//     [],
//     []
// ];

// const customers = ["Max", "James", "Alice", "Sophia", "Liam", "Emma", "Noah", "Olivia",
//     "Ethan", "Isabella", "Lucas", "Mia", "Mason", "Charlotte", "Logan",
//     "Amelia", "Elijah", "Harper", "Jacob", "Evelyn", "Michael", "Avery",
//     "Benjamin", "Scarlett", "Alexander", "Abigail", "Henry", "Emily",
//     "William", "Ella", "Daniel", "Luna", "Matthew", "Chloe", "Aiden"];

// let task = {};

// function randomCustomersPerLine() {
//     checkOutLines.forEach(line => {
//         // Generate a random number of customers (1 to 5) for this line
//         let randomCustomersCount = Math.floor(Math.random() * 5) + 1;

//         for (let i = 0; i < randomCustomersCount; i++) {
//             if (customers.length > 0) {
//                 // Select a random customer and remove them from the customers list
//                 let randomCustomerIndex = Math.floor(Math.random() * customers.length);
//                 let randomCustomer = customers.splice(randomCustomerIndex, 1)[0];

//                 // Generate a random number of items (1 to 15)
//                 let randomItems = Math.floor(Math.random() * 15) + 1;

//                 // Add the customer and their items to the current line
//                 line.push({ customer: randomCustomer, items: randomItems });
//             }
//         }
//     });

//     // Always update the task with the current state of checkOutLines
//     task = { checkoutLines: checkOutLines };
// }

// randomCustomersPerLine();
// const sum = []; 

// function sumOfItem() {
//     checkOutLines.forEach(line => {
//         const lineSum = line.reduce((total, obj) => {
//             return total + obj.items;  
//         }, 0);

        
//         sum.push(lineSum);
//     });
// }

// sumOfItem();  // Call the function to process the sums

// function inputField() {
//     const userName = document.getElementById('item').value.trim();
//     const itemNumber = document.getElementById('name').value.trim();

//     if (userName !== '' && itemNumber !== '') {
//         const newInput = { customer: userName, items: parseInt(itemNumber) };

//         // Ensure the sum array reflects the latest state of checkoutLines
//         sum.length = 0; // Clear the sum array
//         checkOutLines.forEach(line => {
//             const lineSum = line.reduce((total, obj) => total + obj.items, 0);
//             sum.push(lineSum);
//         });

//         const minLine = Math.min(...sum); // Find the smallest line sum
//         const indexLine = sum.indexOf(minLine); // Get the corresponding line index

//         // Add the new customer to the selected line
//         checkOutLines[indexLine].push(newInput);

//         // Recalculate sums
//         sumOfItem();

//         // Render the updated checkout lines
//         rendaring();
//     } else {
//         alert('Both fields are required!');
//     }
// }




// function rendaring () {
//     const container = document.getElementById('container');

//     container.innerHTML = '';

//     checkOutLines.forEach((line, index) => {
//         // Append line name directly to the innerHTML
//         container.innerHTML += `<h3>Line ${index + 1}</h3>`;

//         const taskList = document.createElement('div');
//         taskList.className = 'taskList';
//         taskList.id = `taskList${index + 1}`;

//         // Add customer and items as a list
//         const ul = document.createElement('ul');
//         line.forEach(entry => {
//             const li = document.createElement('li');
//             li.textContent = `Customer: ${entry.customer}, Items: ${entry.items}`;
//             ul.appendChild(li);
//         });

//         taskList.appendChild(ul);
//         container.appendChild(taskList);
//     });
// }

// inputField()

// function decrementItems() {
//     checkOutLines.forEach((line, index) => {
//         if (line.length > 0) { // Check if the line has at least one entry
//             line[0].items -= 1; // Decrement items for the first entry
            
//             // Remove the first entry if items <= 0
//             if (line[0].items <= 0) {
//                 line.shift(); // Remove the first entry
//             }
//         }
//     });
// }

// function startPeriodicRendering() {
//     setInterval(() => {
//         // Decrement items and remove customers with items <= 0
//         decrementItems();

//         // Recalculate sums and render
//         sumOfItem();
//         rendaring();
//     }, 3000); // Update every 3 seconds
// }

// sumOfItem();
// rendaring();
// startPeriodicRendering();
