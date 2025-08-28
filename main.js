import axios from "axios";

const app = document.querySelector("#app");

async function fetchMessage() {
  try {
    const res = await axios.get("http://localhost:3000/api/message");
    app.innerHTML = `<h2>${res.data.message}</h2>`;
  } catch (err) {
    app.innerHTML = "<p>Failed to fetch API</p>";
    console.error(err);
  }
}

async function fetchTranspo() {
  try {
    const response = await axios.get("http://localhost:3000/api/transpo");
    const transpo = response.data;
    let html = "<h3>Transportation</h3><ul>";
    transpo.forEach(t => {
      html += `<li>🚍 ${t.name} (${t.type}) - Capacity: ${t.capacity}</li>`;
    });
    html += "</ul>";
    app.innerHTML += html;
  } catch (error) {
    app.innerHTML += "<h3>Error fetching transportation</h3>";
    console.error(error);
  }
}

async function fetchProducts() {
  try {
    const response = await axios.get("http://localhost:3000/api/products");
    const products = response.data;
    let html = "<h3>products</h3><ul>";
    products.forEach(i => {
      html += `<li>🛒 ${i.name} - ₱${i.price}</li>`;
    });
    html += "</ul>";
    app.innerHTML += html;
  } catch (error) {
    app.innerHTML += "<h3>Error fetching products</h3>";
    console.error(error);
  }
}

async function fetchStudents() {
  try {
    const response = await axios.get("http://localhost:3000/api/students");
    const students = response.data;
    let html = "<h3>Students</h3><ul>";
    students.forEach(s => {
      html += `<li>👨‍🎓 ${s.name}, ${s.age} years old - Major: ${s.major}</li>`;
    });
    html += "</ul>";
    app.innerHTML += html;
  } catch (error) {
    app.innerHTML += "<h3>Error fetching students</h3>";
    console.error(error);
  }
}

fetchMessage();
fetchTranspo();
fetchProducts();
fetchStudents();0