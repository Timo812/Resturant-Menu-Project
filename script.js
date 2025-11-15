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
// Current order
let currentOrder = [];

// DOM Elements
const menuGrid = document.querySelector('.menu-grid');
const menuTitle = document.querySelector('.menu-title');
const categoryItems = document.querySelectorAll('.category-item');
const orderCount = document.querySelector('.order-count');
const orderPageOverlay = document.getElementById('order-page-overlay');
const orderItemsContainer = document.querySelector('.order-items');
const totalAmountElement = document.querySelector('.total-amount');
const closeOrderBtn = document.getElementById('close-order-btn');
const viewOrderBtn = document.getElementById('view-order-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const notification = document.getElementById('notification');
const successMessage = document.getElementById('success-message');
const backToMenuBtn = document.getElementById('back-to-menu');
const checkoutBtn = document.querySelector('.checkout-btn');
const searchBar = document.getElementById('search-bar');
const successOverlay = document.getElementById('success-overlay');
const searchRecommendationsContainer = document.getElementById('search-recommendations');
const menuContainer = document.querySelector('.menu-container');
const mainHeader = document.querySelector('.main-header'); // Added

// Initialize the application
function init() {
    renderMenuItems('specials');
    setupEventListeners();
    updateOrderDisplay();
}

// Render menu items
function renderMenuItems(category) {
    menuGrid.innerHTML = '';
    let itemsToRender;

    if (category === 'specials') {
        itemsToRender = menuItems.filter(item => item.special);
        menuTitle.textContent = "Today's Specials";
    } else {
        itemsToRender = menuItems.filter(item => item.category === category);
        menuTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    }

    itemsToRender.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        menuGrid.appendChild(menuItemElement);
    });
}

function renderFilteredItems(filteredItems) {
    menuGrid.innerHTML = '';
    filteredItems.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        menuGrid.appendChild(menuItemElement);
    });
}

// Display search recommendations
function displayRecommendations(query) {
    searchRecommendationsContainer.innerHTML = '';
    const filteredItems = menuItems.filter(item => {
        return (
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    });

    if (filteredItems.length > 0) {
        searchRecommendationsContainer.style.display = 'block';
        // mainHeader.classList.add('blurred'); // Removed blurred class from mainHeader
        // menuContainer.classList.add('blurred'); // Removed blurred class from menuContainer
        menuTitle.classList.add('blurred'); // Add blurred class to menuTitle
        menuGrid.classList.add('blurred'); // Add blurred class to menuGrid
        filteredItems.forEach(item => {
            const recommendationItem = document.createElement('div');
            recommendationItem.className = 'recommendation-item';
            recommendationItem.dataset.id = item.id;
            recommendationItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="recommendation-item-image">
                <div class="recommendation-item-details">
                    <div class="recommendation-item-name">${item.name}</div>
                    <div class="recommendation-item-description">${item.description}</div>
                </div>
            `;
            recommendationItem.addEventListener('click', () => {
                openModal(item.id); // Open modal when recommendation is clicked
                hideRecommendations();
                searchBar.value = ''; // Clear search bar
            });
            searchRecommendationsContainer.appendChild(recommendationItem);
        });
    } else {
        hideRecommendations();
    }
}

// Hide search recommendations
function hideRecommendations() {
    searchRecommendationsContainer.innerHTML = '';
    searchRecommendationsContainer.style.display = 'none';
    // mainHeader.classList.remove('blurred'); // Removed blurred class from mainHeader
    // menuContainer.classList.remove('blurred'); // Removed blurred class from menuContainer
    menuTitle.classList.remove('blurred'); // Remove blurred class from menuTitle
    menuGrid.classList.remove('blurred'); // Remove blurred class from menuGrid
}

// Create a menu item element
function createMenuItemElement(item) {
    const menuItemElement = document.createElement('div');
    menuItemElement.className = 'menu-item';
    menuItemElement.dataset.id = item.id;
    menuItemElement.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-details">
            <h2 class="item-name">${item.name}</h2>
            <p class="item-description">${item.description}</p>
            <div class="item-footer">
                <span class="item-price">EGP ${item.price.toFixed(2)}</span>
                <button class="add-to-order" data-id="${item.id}">Add to Order</button>
            </div>
        </div>
    `;
    return menuItemElement;
}

// Setup event listeners
function setupEventListeners() {
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const category = item.dataset.category;
            renderMenuItems(category);
            hideRecommendations(); // Hide recommendations when category changes
        });
    });

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        if (searchString.length > 0) {
            displayRecommendations(searchString);
        } else {
            hideRecommendations();
            renderMenuItems('specials'); // Or the currently active category
        }
    });

    viewOrderBtn.addEventListener('click', () => {
        orderPageOverlay.style.display = 'flex';
    });

    closeOrderBtn.addEventListener('click', () => {
        orderPageOverlay.style.display = 'none';
    });

    menuGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-order')) {
            const itemId = parseInt(e.target.dataset.id);
            addToOrder(itemId);
        } else if (e.target.closest('.menu-item')) {
            const itemId = parseInt(e.target.closest('.menu-item').dataset.id);
            openModal(itemId);
        }
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (currentOrder.length === 0) {
            alert('Your order is empty. Please add items before checking out.');
        } else {
            orderPageOverlay.style.display = 'none';
            successOverlay.style.display = 'flex';
            successMessage.style.display = 'block';
        }
    });

    backToMenuBtn.addEventListener('click', () => {
        successOverlay.style.display = 'none';
        successMessage.style.display = 'none';
        currentOrder = [];
        updateOrderDisplay();
    });

    // Event delegation for remove and quantity change buttons in order pop-up
    orderItemsContainer.addEventListener('click', (e) => {
        const itemId = parseInt(e.target.dataset.id);
        if (e.target.classList.contains('remove-btn')) {
            removeFromOrder(itemId);
        } else if (e.target.classList.contains('increase-quantity')) {
            changeQuantity(itemId, 1);
        } else if (e.target.classList.contains('decrease-quantity')) {
            changeQuantity(itemId, -1);
        }
    });
}

// Add item to order
function addToOrder(itemId) {
    const menuItem = menuItems.find(item => item.id === itemId);
    const existingOrderItem = currentOrder.find(item => item.id === itemId);

    if (existingOrderItem) {
        existingOrderItem.quantity++;
    } else {
        currentOrder.push({ ...menuItem, quantity: 1 });
    }

    updateOrderDisplay();
    showNotification(`${menuItem.name} added to order!`);
}

// Remove item from order
function removeFromOrder(itemId) {
    currentOrder = currentOrder.filter(item => item.id !== itemId);
    updateOrderDisplay();
}

// Change item quantity in order
function changeQuantity(itemId, change) {
    const existingOrderItem = currentOrder.find(item => item.id === itemId);

    if (existingOrderItem) {
        existingOrderItem.quantity += change;
        if (existingOrderItem.quantity <= 0) {
            removeFromOrder(itemId);
        } else {
            updateOrderDisplay();
        }
    }
}

// Update order display
function updateOrderDisplay() {
    orderItemsContainer.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    if (currentOrder.length === 0) {
        orderItemsContainer.innerHTML = '<div class="empty-order">Your order is empty.</div>';
    } else {
        currentOrder.forEach(item => {
            const orderItemElement = document.createElement('div');
            orderItemElement.className = 'order-item';
            orderItemElement.innerHTML = `
                <div class="item-info">
                    <img src="${item.image}" alt="${item.name}" class="order-item-image">
                    <div class="item-details-order">
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">EGP ${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
                <div class="item-quantity">
                    <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </div>
            `;
            orderItemsContainer.appendChild(orderItemElement);
            total += item.price * item.quantity;
            totalItems += item.quantity;
        });
    }

    totalAmountElement.textContent = `EGP ${total.toFixed(2)}`;
    orderCount.textContent = totalItems;
}

// Open modal
function openModal(itemId) {
    const menuItem = menuItems.find(item => item.id === itemId);
    modal.innerHTML = `
        <div class="modal-image">
            <img src="${menuItem.image}" alt="${menuItem.name}">
        </div>
        <div class="modal-details">
            <h2 class="modal-name">${menuItem.name}</h2>
            <p class="modal-description">${menuItem.description}</p>
            <div class="modal-footer">
                <span class="modal-price">EGP ${menuItem.price.toFixed(2)}</span>
                <button class="add-to-order" data-id="${menuItem.id}">Add to Order</button>
            </div>
        </div>
        <button class="close-modal-btn" id="close-modal-btn">×</button>
    `;
    modalOverlay.style.display = 'flex';

    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.querySelector('#modal .add-to-order').addEventListener('click', (e) => {
        const itemId = parseInt(e.target.dataset.id);
        addToOrder(itemId);
        closeModal(); // Close modal after adding to order
    });
}

// Close modal
function closeModal() {
    modalOverlay.style.display = 'none';
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ===================== CHECKOUT ===================
// checkout process
// show success message
// reset order
