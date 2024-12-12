import { ChartColumn, Home, Package, PackagePlus, Settings, ShoppingBag, LogOut } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";

export const navbarLinks = [
    {
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
        ],
    },
    {
        links: [
            {
                label: "Product Catalog",
                icon: Package,
                path: "/products",
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory",
            },
            {
                label: "Marketplace Integration",
                icon: ShoppingBag,
                path: "/marketplace",
            },
            {
                label: "SKU Costing",
                icon: Package,
                path: "/sku-costing",
            },
        ],
    },
    {
        links: [
            {
                label: "Reports",
                icon: ChartColumn,
                path: "/reports",
            },
        ],
    },
    {
        links: [
            {
                label: "Reviews",
                icon: ShoppingBag,
                path: "/reviews",
            },
        ],
    },
    {
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
            {
                label: "Logout",
                icon: LogOut,
                path: "/logout",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Mon",
        amazon: 1500,
        flipkart: 1200,
        webstore: 900
    },
    { 
        name: "Tue", 
        amazon: 2000, 
        flipkart: 1800, 
        webstore: 1600 
    },
    { 
        name: "Wed", 
        amazon: 1000, 
        flipkart: 800, 
        webstore: 700 
    },
    { 
        name: "Thu", 
        amazon: 5000, 
        flipkart: 4000, 
        webstore: 3500 
    },
    { 
        name: "Fri", 
        amazon: 2000, 
        flipkart: 2200, 
        webstore: 2100 
    },
    { 
        name: "Sat", 
        amazon: 5900, 
        flipkart: 5500, 
        webstore: 5300 
    },
    { 
        name: "Sun", 
        amazon: 2500, 
        flipkart: 2200, 
        webstore: 2100 
    }
];

export const recentSalesData = [
    { id: 1, name: "Olivia Martin", email: "olivia.martin@email.com", image: ProfileImage, total: 1500 },
    { id: 2, name: "James Smith", email: "james.smith@email.com", image: ProfileImage, total: 2000 },
    { id: 3, name: "Sophia Brown", email: "sophia.brown@email.com", image: ProfileImage, total: 4000 },
    { id: 4, name: "Noah Wilson", email: "noah.wilson@email.com", image: ProfileImage, total: 3000 },
    { id: 5, name: "Emma Jones", email: "emma.jones@email.com", image: ProfileImage, total: 2500 },
    { id: 6, name: "William Taylor", email: "william.taylor@email.com", image: ProfileImage, total: 4500 },
    { id: 7, name: "Isabella Johnson", email: "isabella.johnson@email.com", image: ProfileImage, total: 5300 },
];

export const topProducts = [
    {
        number: 1,
        name: "Wireless Headphones",
        image: ProductImage,
        description: "High-quality noise-canceling wireless headphones.",
        price: 99.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Smartphone",
        image: ProductImage,
        description: "Latest 5G smartphone with excellent camera features.",
        price: 799.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "Gaming Laptop",
        image: ProductImage,
        description: "Powerful gaming laptop with high-end graphics.",
        price: 1299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Smartwatch",
        image: ProductImage,
        description: "Stylish smartwatch with fitness tracking features.",
        price: 199.99,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Bluetooth Speaker",
        image: ProductImage,
        description: "Portable Bluetooth speaker with deep bass sound.",
        price: 59.99,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "4K Monitor",
        image: ProductImage,
        description: "Ultra HD 4K monitor with stunning color accuracy.",
        price: 399.99,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Mechanical Keyboard",
        image: ProductImage,
        description: "Mechanical keyboard with customizable RGB lighting.",
        price: 89.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Wireless Mouse",
        image: ProductImage,
        description: "Ergonomic wireless mouse with precision tracking.",
        price: 49.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Action Camera",
        image: ProductImage,
        description: "Waterproof action camera with 4K video recording.",
        price: 249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "External Hard Drive",
        image: ProductImage,
        description: "Portable 2TB external hard drive for data storage.",
        price: 79.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];
