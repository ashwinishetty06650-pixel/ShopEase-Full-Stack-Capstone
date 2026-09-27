const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: "Classic Sneakers", category: "Footwear", price: 1499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80" },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 2499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80" },
  { id: 3, name: "Travel Backpack", category: "Bags", price: 1199, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80" },
  { id: 4, name: "Wireless Headphones", category: "Electronics", price: 1999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80" },
  { id: 5, name: "Cotton T-Shirt", category: "Fashion", price: 699, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80" },
  { id: 6, name: "Classic Sunglasses", category: "Accessories", price: 899, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80" }
];

app.use(express.json());
app.get("/api/products", (req, res) => res.json(products));
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  product ? res.json(product) : res.status(404).json({ error: "Product not found" });
});

app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));