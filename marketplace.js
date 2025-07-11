let cart = [];
// Manual product data for FrameLoop marketplace
// Realistic photography gear from various international sources
const gearData = [
  {
    "id": 1,
    "title": "Canon EOS R6 Mark II Body",
    "price": 2299,
    "image": "https://picsum.photos/400/300?random=1",
    "url": "https://www.canon.com/cameras/eos-r6-mark-ii",
    "description": "Full-frame mirrorless camera with 24.2MP sensor, 4K60p video, and advanced autofocus. Perfect for professional photography and videography.",
    "category": "camera",
    "condition": "new",
    "seller": "Canon Store",
    "rating": 5,
    "reviews": 42
  },
  {
    "id": 2,
    "title": "Sony FE 24-70mm F2.8 GM II Lens",
    "price": 2099,
    "image": "https://picsum.photos/400/300?random=2",
    "url": "https://electronics.sony.com/imaging/lenses/c/e-mount-lenses",
    "description": "Professional standard zoom lens for Sony E-mount, fast F2.8 aperture, lightweight design. Ideal for portraits and events.",
    "category": "lens",
    "condition": "new",
    "seller": "Sony Store",
    "rating": 5,
    "reviews": 35
  },
  {
    "id": 3,
    "title": "Nikon Z9 Body",
    "price": 5499,
    "image": "https://picsum.photos/400/300?random=3",
    "url": "https://www.nikon.com/cameras/z9",
    "description": "Flagship full-frame mirrorless camera with 45.7MP sensor, 8K video, and pro build. The ultimate camera for professionals.",
    "category": "camera",
    "condition": "new",
    "seller": "Nikon Store",
    "rating": 5,
    "reviews": 18
  },
  {
    "id": 4,
    "title": "Fujifilm X-T5 Body Black",
    "price": 1699,
    "image": "https://picsum.photos/400/300?random=4",
    "url": "https://fujifilm-x.com/cameras/x-t5",
    "description": "APS-C mirrorless camera with 40MP sensor, classic design, and advanced features. Perfect for street and documentary photography.",
    "category": "camera",
    "condition": "new",
    "seller": "Fujifilm Store",
    "rating": 4,
    "reviews": 27
  },
  {
    "id": 5,
    "title": "DJI Air 3 Drone",
    "price": 1099,
    "image": "https://picsum.photos/400/300?random=5",
    "url": "https://www.dji.com/air-3",
    "description": "Advanced drone with dual cameras, 46-minute flight time, and 4K video. Perfect for aerial photography and videography.",
    "category": "drone",
    "condition": "new",
    "seller": "DJI Store",
    "rating": 4,
    "reviews": 89
  },
  {
    "id": 6,
    "title": "Canon RF 70-200mm F2.8L IS USM",
    "price": 2699,
    "image": "https://picsum.photos/400/300?random=6",
    "url": "https://www.canon.com/lenses/rf-70-200mm-f2-8l-is-usm",
    "description": "Professional telephoto zoom lens with F2.8 aperture and image stabilization. Ideal for sports and wildlife photography.",
    "category": "lens",
    "condition": "new",
    "seller": "Canon Store",
    "rating": 5,
    "reviews": 23
  },
  {
    "id": 7,
    "title": "Godox AD600 Pro Flash",
    "price": 599,
    "image": "https://picsum.photos/400/300?random=7",
    "url": "https://www.godox.com/AD600Pro.html",
    "description": "Professional battery-powered strobe with 600Ws output, TTL, and HSS. Perfect for studio and location photography.",
    "category": "lighting",
    "condition": "new",
    "seller": "Godox Store",
    "rating": 4,
    "reviews": 156
  },
  {
    "id": 8,
    "title": "Manfrotto MT055XPRO3 Tripod",
    "price": 449,
    "image": "https://picsum.photos/400/300?random=8",
    "url": "https://www.manfrotto.com/mt055xpro3",
    "description": "Professional aluminum tripod with 90-degree column and 3-section legs. Supports up to 20kg load capacity.",
    "category": "tripod",
    "condition": "new",
    "seller": "Manfrotto Store",
    "rating": 4,
    "reviews": 67
  },
  {
    "id": 9,
    "title": "Sony A7 IV Body",
    "price": 2499,
    "image": "https://picsum.photos/400/300?random=9",
    "url": "https://electronics.sony.com/imaging/interchangeable-lens-cameras/ilce-7m4",
    "description": "Full-frame mirrorless camera with 33MP sensor, 4K60p video, and advanced autofocus. Great for hybrid shooters.",
    "category": "camera",
    "condition": "new",
    "seller": "Sony Store",
    "rating": 5,
    "reviews": 94
  },
  {
    "id": 10,
    "title": "Sigma 24-70mm F2.8 DG DN Art",
    "price": 1099,
    "image": "https://picsum.photos/400/300?random=10",
    "url": "https://www.sigma-global.com/en/lenses/cas/product/art/a047_24_70_28/",
    "description": "Professional standard zoom lens for Sony E-mount and L-mount. Sharp optics and fast F2.8 aperture throughout zoom range.",
    "category": "lens",
    "condition": "new",
    "seller": "Sigma Store",
    "rating": 4,
    "reviews": 78
  },
  {
    "id": 11,
    "title": "Canon EOS R7 Body",
    "price": 1499,
    "image": "https://picsum.photos/400/300?random=11",
    "url": "https://www.canon.com/cameras/eos-r7",
    "description": "APS-C mirrorless camera with 32.5MP sensor and 30fps burst shooting. Perfect for sports and wildlife photography.",
    "category": "camera",
    "condition": "new",
    "seller": "Canon Store",
    "rating": 4,
    "reviews": 45
  },
  {
    "id": 12,
    "title": "Profoto B10 Plus Flash",
    "price": 1999,
    "image": "https://picsum.photos/400/300?random=12",
    "url": "https://profoto.com/b10-plus",
    "description": "Professional battery-powered strobe with 250Ws output and built-in modeling light. Industry standard for fashion photography.",
    "category": "lighting",
    "condition": "new",
    "seller": "Profoto Store",
    "rating": 5,
    "reviews": 34
  }
];

// Modal functionality
function openSellModal() {
    document.getElementById('sellModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSellModal() {
    document.getElementById('sellModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openSignIn() {
    document.getElementById('signInModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openJoinNow() {
    document.getElementById('joinModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeJoinModal() {
    document.getElementById('joinModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchToJoin() {
    closeSignInModal();
    openJoinNow();
}

function switchToSignIn() {
    closeJoinModal();
    openSignIn();
}

// Close modals when clicking outside
window.onclick = function(event) {
    const sellModal = document.getElementById('sellModal');
    const signInModal = document.getElementById('signInModal');
    const joinModal = document.getElementById('joinModal');
    
    if (event.target === sellModal) {
        closeSellModal();
    }
    if (event.target === signInModal) {
        closeSignInModal();
    }
    if (event.target === joinModal) {
        closeJoinModal();
    }
}

// Form handling
document.getElementById('sellForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        title: document.getElementById('itemTitle').value,
        category: document.getElementById('itemCategory').value,
        price: parseFloat(document.getElementById('itemPrice').value),
        condition: document.getElementById('itemCondition').value,
        description: document.getElementById('itemDescription').value
    };
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Listing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Your item has been listed successfully!');
        closeSellModal();
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    
    // Simulate sign in
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Signing In...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Welcome back! You have been signed in successfully.');
        closeSignInModal();
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('joinName').value;
    const email = document.getElementById('joinEmail').value;
    const password = document.getElementById('joinPassword').value;
    const confirmPassword = document.getElementById('joinConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Simulate account creation
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Creating Account...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Welcome to FrameLoop! Your account has been created successfully.');
        closeJoinModal();
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// --- Cart Logic ---
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function openCartModal() {
    document.getElementById('cartModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    renderCartItems();
}
function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
function openCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function addToCart(itemId) {
    const item = gearData.find(i => i.id === itemId);
    if (!item) return;
    cart.push(item);
    updateCartCount();
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCartItems();
}
function renderCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div style="text-align:center;color:#888;">Your cart is empty.</div>';
        cartTotalSpan.textContent = '';
        return;
    }
    cart.forEach((item, idx) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img" style="background-image: url('${item.image}');"></div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${idx})">&times;</button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });
    cartTotalSpan.textContent = `Total: $${total.toLocaleString()}`;
}
// --- End Cart Logic ---

// --- Checkout Logic ---
// This will be moved inside DOMContentLoaded

// Render gear items
function renderGearItems(items = gearData) {
    console.log('renderGearItems called with items:', items);
    const gearGrid = document.getElementById('gearGrid');
    const productCount = document.getElementById('productCount');
    console.log('gearGrid element:', gearGrid);
    console.log('productCount element:', productCount);
    
    gearGrid.innerHTML = '';
    if (productCount) {
        productCount.textContent = `Showing ${items.length} product${items.length !== 1 ? 's' : ''}`;
    }
    if (items.length === 0) {
        gearGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #888;">No products found.</div>';
        return;
    }
    items.forEach((item, index) => {
        console.log(`Rendering item ${index + 1}:`, item);
        const gearItem = document.createElement('div');
        gearItem.className = 'gear-item';
        gearItem.innerHTML = `
            <div class="gear-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
            <div class="gear-info">
                <h4>${item.title}</h4>
                <p class="gear-price">$${item.price.toLocaleString()}</p>
                <p class="gear-seller">by ${item.seller}</p>
                <div class="gear-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(item.rating)}
                    <span>(${item.reviews} reviews)</span>
                </div>
                <div class="gear-meta">
                    <span class="gear-category">${item.category}</span>
                    <span class="gear-condition">${item.condition}</span>
                </div>
                <div class="gear-actions">
                    <button class="btn-primary btn-small" onclick="addToCart(${item.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        gearGrid.appendChild(gearItem);
        console.log(`Item ${index + 1} added to DOM`);
    });
    console.log('renderGearItems completed');
}

// Render Trade Nearby section (simulate 2 random items)
function renderTradeNearby() {
    const nearbyGrid = document.getElementById('nearbyGrid');
    if (!nearbyGrid) return;
    // For demo, pick 2 random items
    let shuffled = [...gearData].sort(() => 0.5 - Math.random());
    let nearbyItems = shuffled.slice(0, 2);
    nearbyGrid.innerHTML = '';
    nearbyItems.forEach(item => {
        const gearItem = document.createElement('div');
        gearItem.className = 'gear-item';
        gearItem.innerHTML = `
            <div class="gear-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
            <div class="gear-info">
                <h4>${item.title}</h4>
                <p class="gear-price">$${item.price.toLocaleString()}</p>
                <p class="gear-seller">by ${item.seller}</p>
                <div class="gear-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(item.rating)}
                    <span>(${item.reviews} reviews)</span>
                </div>
                <div class="gear-meta">
                    <span class="gear-category">${item.category}</span>
                    <span class="gear-condition">${item.condition}</span>
                </div>
                <div class="gear-actions">
                    <button class="btn-primary btn-small" onclick="addToCart(${item.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        nearbyGrid.appendChild(gearItem);
    });
}

// Search and filter functionality (updated for new filter IDs)
function filterGear() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('category').value;
    const condition = document.getElementById('condition').value;
    const priceRange = document.getElementById('priceRange').value;
    let minPrice = 0, maxPrice = 5000;
    if (priceRange) {
        minPrice = 0;
        maxPrice = parseInt(priceRange);
    }
    let filteredItems = gearData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                             item.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || item.category === category;
        const matchesCondition = !condition || item.condition === condition;
        const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
        return matchesSearch && matchesCategory && matchesPrice && matchesCondition;
    });
    renderGearItems(filteredItems);
}

// Item actions
function viewItem(itemId) {
    const item = gearData.find(i => i.id === itemId);
    if (item) {
        alert(`Viewing details for: ${item.title}\n\nPrice: $${item.price}\nSeller: ${item.seller}\nCondition: ${item.condition}\n\nDescription: ${item.description}`);
    }
}

function contactSeller(itemId) {
    const item = gearData.find(i => i.id === itemId);
    if (item) {
        alert(`Contacting seller for: ${item.title}\n\nYou can reach ${item.seller} through our messaging system.`);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    console.log('gearData length:', gearData.length);
    console.log('gearData:', gearData);
    
    const gearGrid = document.getElementById('gearGrid');
    console.log('gearGrid element:', gearGrid);
    
    renderGearItems();
    renderTradeNearby();
    
    // Checkout form event listener
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate order placement
            const name = document.getElementById('checkoutName').value;
            const email = document.getElementById('checkoutEmail').value;
            const address = document.getElementById('checkoutAddress').value;
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            // Simulate order confirmation
            alert(`Thank you, ${name}! Your order for ${cart.length} item(s) has been received.\n\nA confirmation has been sent to ${email}.\n\n(You will need to place the order with MapCamera manually for now.)`);
            cart = [];
            updateCartCount();
            closeCheckoutModal();
            closeCartModal();
            this.reset();
        });
    }
    
    // Search and filter event listeners
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterGear);
    }
    
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        categorySelect.addEventListener('change', filterGear);
    }
    
    const conditionSelect = document.getElementById('condition');
    if (conditionSelect) {
        conditionSelect.addEventListener('change', filterGear);
    }
    
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            const priceValue = document.getElementById('priceValue');
            if (priceValue) {
                priceValue.textContent = `$0 - $${this.value}`;
            }
            filterGear();
        });
    }
    
    updateCartCount();
    console.log('Marketplace initialization complete');
});

console.log('FrameLoop Marketplace loaded successfully! 🛍️'); 