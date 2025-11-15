// =============================================
// ============== JAVASCRIPT TEMPLATE ==========
// ============== Assigned to: Temosi ==========
// =============================================

const menuItems = [
    // Appetizers
    {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 449.50,
        category: "appetizers",
        special: true,
        image: "https://www.moltofood.it/wp-content/uploads/2024/07/Bruschetta.jpg"
    },
    {
        id: 2,
        name: "Calamari",
        description: "Crispy fried squid served with marinara sauce",
        price: 649.50,
        category: "appetizers",
        special: true,
        image: "https://th.bing.com/th/id/R.2daa8cb9bb7c88987f0d7d02781c5478?rik=fR5LfGdNgmhBig&pid=ImgRaw&r=0"
    },
    {
        id: 3,
        name: "Stuffed Mushrooms",
        description: "Mushroom caps filled with herbed cream cheese and breadcrumbs",
        price: 549.50,
        category: "appetizers",
        image: "https://img.freepik.com/premium-photo/stuffed-mushrooms_155656-507.jpg"
    },
    {
        id: 13,
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter and herbs",
        price: 299.50,
        category: "appetizers",
        image: "https://img.freepik.com/premium-photo/photo-garlic-bread_933496-16028.jpg"
    },
    {
        id: 16,
        name: "Caprese Skewers",
        description: "Cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze",
        price: 399.50,
        category: "appetizers",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_TOHD24_123345_EricKleinberg_6.jpg"
    },
    {
        id: 17,
        name: "Shrimp Cocktail",
        description: "Chilled shrimp served with a tangy cocktail sauce",
        price: 799.50,
        category: "appetizers",
        image: "https://tse3.mm.bing.net/th/id/OIP.oyQDmrcxDVejGX-qIenLlAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    
    // Main Courses
    {
        id: 4,
        name: "Grilled Salmon",
        description: "Fresh salmon fillet with lemon butter sauce and seasonal vegetables",
        price: 1249.50,
        category: "mains",
        image:  "https://img.food.com/img/upload/editorial/2016-07-23+-+bb06+-+grill+salmon/1+Grilled+Salmon.jpg"
    },
    {
        id: 5,
        name: "Filet Mignon",
        description: "8oz tender beef filet with red wine reduction and mashed potatoes",
        price: 1649.50,
        category: "mains",
        special: true,
        image: "https://static.emerils.com/filet%20and%20potatoes.jpg"
    },
    {
        id: 6,
        name: "Mushroom Risotto",
        description: "Creamy arborio rice with wild mushrooms and parmesan",
        price: 949.50,
        category: "mains",
        image: "https://tse1.mm.bing.net/th/id/OIP.fL1tLqHt6SZRMntz6IDWAAAAAA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 14,
        name: "Chicken Alfredo",
        description: "Fettuccine pasta with creamy alfredo sauce and grilled chicken",
        price: 899.50,
        category: "mains",
        image: "https://www.billyparisi.com/wp-content/uploads/2025/03/chicken-alfredo-2.jpg"
    },
    {
        id: 18,
        name: "Lamb Chops",
        description: "Grilled lamb chops with a mint reduction and roasted potatoes",
        price: 1899.50,
        category: "mains",
        image: "https://www.canesbarandgrill.com/wp-content/uploads/Grilled-lamp-chops.jpg"
    },
    {
        id: 19,
        name: "Vegetable Lasagna",
        description: "Layers of pasta, rich tomato sauce, and seasonal vegetables with béchamel",
        price: 799.50,
        category: "mains",
        image: "https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/7536_4k.jpg"
    },
    
    // Desserts
    {
        id: 7,
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: 449.50,
        category: "desserts",
        image: "https://www.rouses.com/wp-content/uploads/2018/03/Tiramisu-585178794.jpg"
    },
    {
        id: 8,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        price: 499.50,
        category: "desserts",
        special: true,
        image: "https://simplyhomecooked.com/wp-content/uploads/2015/02/Chocolate-lava-cake-14.jpg"
    },
    {
        id: 15,
        name: "Cheesecake",
        description: "Creamy New York style cheesecake with a graham cracker crust",
        price: 479.50,
        category: "desserts",
        image: "https://tse3.mm.bing.net/th/id/OIP.JmLsDOCOkGm58RAWn6fRBQHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 20,
        name: "Apple Crumble",
        description: "Warm apple crumble with a buttery oat topping, served with custard",
        price: 399.50,
        category: "desserts",
        image: "https://img.freepik.com/premium-photo/apple-crumble-kitchen-background-with-apples-generative-ai_87561-12084.jpg"
    },
    {
        id: 21,
        name: "Panna Cotta",
        description: "Silky smooth Italian cream dessert with berry compote",
        price: 379.50,
        category: "desserts",
        image: "https://www.alfavita.gr/sites/default/files/styles/og_image/public/2024-06/panakota.png?itok=P8OO7AMm"
    },
    
    // Drinks
    {
        id: 9,
        name: "Orange Juice",
        description: "Freshly squeezed orange juice",
        price: 249.50,
        category: "drinks",
        image: "https://img.freepik.com/premium-photo/orange-juice-hd-8k-wallpaper-stock-photographic-image_890746-19062.jpg"
    },
    {
        id: 10,
        name: "Cola",
        description: "Classic Coca-Cola",
        price: 149.50,
        category: "drinks",
        image: "https://static.vecteezy.com/system/resources/previews/030/657/744/large_2x/cola-with-white-background-high-quality-ultra-hd-free-photo.jpg"
    },
    {
        id: 11,
        name: "Sprite",
        description: "Lemon-lime soda",
        price: 149.50,
        category: "drinks",
        image: "https://www.tacobueno.com/assets/food/beverages/Sprite.png?v=1"
    },
    {
        id: 12,
        name: "Fresh Lemonade",
        description: "Homemade lemonade with mint and a hint of ginger",
        price: 249.50,
        category: "drinks",
        image: "https://media.istockphoto.com/photos/lemonade-picture-id181856842?k=20&m=181856842&s=612x612&w=0&h=lh97KFv_MKZGrSrWkrSvKYgv_esgbCiAJp_LkAuDkcI="
    },
    {
        id: 22,
        name: "Iced Tea",
        description: "Refreshing iced tea with a hint of lemon",
        price: 179.50,
        category: "drinks",
        special: true,
        image: "https://realfood.tesco.com/media/images/RFO-1400x919-IcedTea-8e156836-69f4-4433-8bae-c42e174212c1-0-1400x919.jpg"
    },
    {
        id: 23,
        name: "Sparkling Water",
        description: "Premium sparkling mineral water",
        price: 129.50,
        category: "drinks",
        image: "https://static.toiimg.com/photo/84647497.cms"
    },
    {
        id: 24,
        name: "Coffee",
        description: "Freshly brewed hot coffee",
        price: 199.50,
        category: "drinks",
        image: "https://tse2.mm.bing.net/th/id/OIP.TeMA2xXzHAQ79hlnIH3nUAHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 25,
        name: "Tea",
        description: "Selection of herbal and black teas",
        price: 179.50,
        category: "drinks",
        image: "https://static.vecteezy.com/system/resources/previews/030/182/885/non_2x/a-cup-of-tea-on-a-wooden-table-ai-generated-free-photo.jpg"
    }
];
// ===================== GLOBAL VARIABLES ==========
// References to DOM elements (menu grid, search bar, overlays, popups)

// ===================== INITIALIZATION ============
// init()
// - load default category
// - setup all event listeners
// - update order counter

// ===================== RENDER FUNCTIONS ==========
// renderMenuItems(category)
// - display menu items based on selected category

// createMenuItemElement(item)
// - generate HTML elements for each menu item

// displayRecommendations(query)
// - show live search suggestions

// hideRecommendations()
// - hide the dropdown list

// ===================== ORDER MANAGEMENT ==========
// addToOrder(itemId)
// - add/update item in current order

// removeFromOrder(itemId)
// - delete item from cart

// changeQuantity(itemId, amount)
// - increase/decrease quantity of an item

// updateOrderDisplay()
// - refresh cart UI and total price

// ===================== MODAL ======================
// openModal(itemId)
// - show item details

// closeModal()
// - close modal popup

// ===================== NOTIFICATIONS ==============
// showNotification(message)
// - small toast at bottom

// ===================== CHECKOUT ===================
// checkout process
// show success message
// reset order
