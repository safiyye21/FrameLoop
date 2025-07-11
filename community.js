// Sample data for the community platform
const creators = [
    {
        id: 1,
        name: "Sarah Chen",
        location: "San Francisco, CA",
        country: "United States",
        coordinates: { lat: 37.7749, lng: -122.4194 },
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        followers: "12.5K",
        images: 89,
        bio: "Street photographer capturing urban life and human moments",
        social: {
            instagram: "@sarahchen.photo",
            vsco: "sarahchen"
        },
        gear: ["Sony A7III", "35mm f/1.4", "85mm f/1.8"],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        location: "New York, NY",
        country: "United States",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        followers: "8.2K",
        images: 156,
        bio: "Portrait photographer specializing in creative lighting",
        social: {
            instagram: "@marcusrodriguez",
            vsco: "marcusrodriguez"
        },
        gear: ["Canon R5", "24-70mm f/2.8", "Profoto B10"],
        images: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 3,
        name: "Emma Thompson",
        location: "London, UK",
        country: "United Kingdom",
        coordinates: { lat: 51.5074, lng: -0.1278 },
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        followers: "15.7K",
        images: 203,
        bio: "Landscape photographer exploring the world's natural wonders",
        social: {
            instagram: "@emmathompson.photo",
            vsco: "emmathompson"
        },
        gear: ["Nikon Z7", "14-24mm f/2.8", "DJI Mavic 3"],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 4,
        name: "David Kim",
        location: "Seoul, South Korea",
        country: "South Korea",
        coordinates: { lat: 37.5665, lng: 126.9780 },
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        followers: "22.1K",
        images: 342,
        bio: "Fashion and editorial photographer pushing creative boundaries",
        social: {
            instagram: "@davidkim.photo",
            vsco: "davidkim"
        },
        gear: ["Fujifilm GFX 100S", "110mm f/2", "Broncolor Para"],
        images: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 5,
        name: "Yuki Tanaka",
        location: "Tokyo, Japan",
        country: "Japan",
        coordinates: { lat: 35.6762, lng: 139.6503 },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        followers: "18.3K",
        images: 278,
        bio: "Street and documentary photographer capturing Tokyo's essence",
        social: {
            instagram: "@yukitanaka.photo",
            vsco: "yukitanaka"
        },
        gear: ["Fujifilm X-T4", "23mm f/1.4", "56mm f/1.2"],
        images: [
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 6,
        name: "Maria Santos",
        location: "São Paulo, Brazil",
        country: "Brazil",
        coordinates: { lat: -23.5505, lng: -46.6333 },
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        followers: "9.8K",
        images: 145,
        bio: "Portrait and fashion photographer with a passion for storytelling",
        social: {
            instagram: "@mariasantos.photo",
            vsco: "mariasantos"
        },
        gear: ["Canon EOS R6", "50mm f/1.2", "Godox AD600"],
        images: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 7,
        name: "Ahmed Hassan",
        location: "Cairo, Egypt",
        country: "Egypt",
        coordinates: { lat: 30.0444, lng: 31.2357 },
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        followers: "14.2K",
        images: 189,
        bio: "Documentary photographer capturing Middle Eastern culture and history",
        social: {
            instagram: "@ahmedhassan.photo",
            vsco: "ahmedhassan"
        },
        gear: ["Leica M10", "35mm f/1.4", "50mm f/2"],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
        ]
    },
    {
        id: 8,
        name: "Sophie Dubois",
        location: "Paris, France",
        country: "France",
        coordinates: { lat: 48.8566, lng: 2.3522 },
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        followers: "16.9K",
        images: 234,
        bio: "Fine art photographer inspired by Parisian architecture and light",
        social: {
            instagram: "@sophiedubois.art",
            vsco: "sophiedubois"
        },
        gear: ["Phase One IQ4", "80mm f/2.8", "Profoto Pro-10"],
        images: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop"
        ]
    }
];

const images = [
    {
        id: 1,
        title: "Urban Reflections",
        creator: "Sarah Chen",
        category: "street",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        likes: 234,
        gear: "Sony A7III, 35mm f/1.4"
    },
    {
        id: 2,
        title: "Mountain Serenity",
        creator: "Emma Thompson",
        category: "landscape",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
        likes: 567,
        gear: "Nikon Z7, 14-24mm f/2.8"
    },
    {
        id: 3,
        title: "Portrait in Light",
        creator: "Marcus Rodriguez",
        category: "portrait",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=700&fit=crop",
        likes: 189,
        gear: "Canon R5, 85mm f/1.2"
    },
    {
        id: 4,
        title: "Wildlife Moment",
        creator: "David Kim",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=550&fit=crop",
        likes: 432,
        gear: "Fujifilm GFX 100S, 250mm f/4"
    },
    {
        id: 5,
        title: "Street Life",
        creator: "Sarah Chen",
        category: "street",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=650&fit=crop",
        likes: 156,
        gear: "Sony A7III, 50mm f/1.8"
    },
    {
        id: 6,
        title: "Ocean Waves",
        creator: "Emma Thompson",
        category: "landscape",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
        likes: 298,
        gear: "Nikon Z7, 70-200mm f/2.8"
    },
    {
        id: 7,
        title: "Fashion Editorial",
        creator: "David Kim",
        category: "portrait",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=580&fit=crop",
        likes: 345,
        gear: "Fujifilm GFX 100S, 110mm f/2"
    },
    {
        id: 8,
        title: "City Lights",
        creator: "Marcus Rodriguez",
        category: "street",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=520&fit=crop",
        likes: 267,
        gear: "Canon R5, 24-70mm f/2.8"
    }
];

const opportunities = [
    {
        id: 1,
        type: "Photography Job",
        title: "Wedding Photographer Needed",
        description: "Looking for an experienced wedding photographer for a destination wedding in Bali. Must have portfolio and references.",
        location: "Bali, Indonesia",
        budget: "$2,500 - $3,500",
        posted: "2 days ago"
    },
    {
        id: 2,
        type: "Collaboration",
        title: "Fashion Brand Photoshoot",
        description: "Seeking a fashion photographer for a new clothing line campaign. Creative freedom encouraged.",
        location: "Los Angeles, CA",
        budget: "$1,500 - $2,000",
        posted: "1 week ago"
    },
    {
        id: 3,
        type: "Exhibition",
        title: "Gallery Exhibition Opportunity",
        description: "Local gallery seeking landscape photographers for a group exhibition. Theme: 'Natural Wonders'.",
        location: "Portland, OR",
        budget: "Commission-based",
        posted: "3 days ago"
    },
    {
        id: 4,
        type: "Teaching",
        title: "Photography Workshop Instructor",
        description: "Online platform looking for experienced photographers to teach workshops on portrait photography.",
        location: "Remote",
        budget: "$200 - $300 per session",
        posted: "5 days ago"
    }
];

// DOM Elements
const creatorsGrid = document.getElementById('creatorsGrid');
const imageMasonry = document.getElementById('imageMasonry');
const opportunitiesGrid = document.getElementById('opportunitiesGrid');
const authModal = document.getElementById('authModal');
const creatorModal = document.getElementById('creatorModal');
const imageModal = document.getElementById('imageModal');
const joinBtn = document.getElementById('joinBtn');
const loginBtn = document.getElementById('loginBtn');

// Location-based functionality
let userLocation = null;
let selectedLocation = null;
let locationFilter = 'worldwide'; // worldwide, nearby, country, city

// Get user's location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                updateLocationUI();
                loadNearbyCreators();
            },
            (error) => {
                console.log('Location access denied:', error);
                // Default to worldwide view
                loadCreators();
            }
        );
    } else {
        console.log('Geolocation not supported');
        loadCreators();
    }
}

// Calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Load creators based on location filter
function loadCreatorsByLocation(filter = 'worldwide') {
    let filteredCreators = [...creators];
    
    if (filter === 'nearby' && userLocation) {
        filteredCreators = creators.filter(creator => {
            const distance = calculateDistance(
                userLocation.lat, userLocation.lng,
                creator.coordinates.lat, creator.coordinates.lng
            );
            return distance <= 50; // Within 50km
        }).sort((a, b) => {
            const distA = calculateDistance(userLocation.lat, userLocation.lng, a.coordinates.lat, a.coordinates.lng);
            const distB = calculateDistance(userLocation.lat, userLocation.lng, b.coordinates.lat, b.coordinates.lng);
            return distA - distB;
        });
    } else if (filter === 'country' && selectedLocation) {
        filteredCreators = creators.filter(creator => 
            creator.country === selectedLocation
        );
    }
    
    displayCreators(filteredCreators);
}

// Display creators with location info
function displayCreators(creatorsToShow) {
    creatorsGrid.innerHTML = creatorsToShow.map(creator => {
        let distanceInfo = '';
        if (userLocation) {
            const distance = calculateDistance(
                userLocation.lat, userLocation.lng,
                creator.coordinates.lat, creator.coordinates.lng
            );
            distanceInfo = `<span class="creator-distance">${distance.toFixed(1)}km away</span>`;
        }
        // Defensive: Only render images if it's an array
        let imagesHtml = '';
        if (Array.isArray(creator.images)) {
            imagesHtml = creator.images.map(img => `
                <div class="creator-image" style="background-image: url('${img}')"></div>
            `).join('');
        }
        return `
            <div class="creator-card" onclick="openCreatorProfile(${creator.id})">
                <div class="creator-header">
                    <div class="creator-avatar" style="background-image: url('${creator.avatar}')"></div>
                    <h3 class="creator-name">${creator.name}</h3>
                    <p class="creator-location">${creator.location}, ${creator.country}</p>
                    ${distanceInfo}
                    <div class="creator-stats">
                        <span>${creator.followers} followers</span>
                        <span>${creator.images} images</span>
                    </div>
                </div>
                <div class="creator-images">
                    ${imagesHtml}
                </div>
            </div>
        `;
    }).join('');
}

// Update location UI
function updateLocationUI() {
    const locationIndicator = document.getElementById('locationIndicator');
    if (locationIndicator) {
        locationIndicator.innerHTML = `
            <i class="fas fa-map-marker-alt"></i>
            <span>Your location detected</span>
        `;
    }
}

// Load nearby creators
function loadNearbyCreators() {
    if (locationFilter === 'nearby') {
        loadCreatorsByLocation('nearby');
    }
}

// Setup location filters
function setupLocationFilters() {
    const locationFilters = document.getElementById('locationFilters');
    if (locationFilters) {
        locationFilters.innerHTML = `
            <button class="location-filter-btn active" data-filter="worldwide">
                <i class="fas fa-globe"></i> Worldwide
            </button>
            <button class="location-filter-btn" data-filter="nearby">
                <i class="fas fa-map-marker-alt"></i> Nearby
            </button>
            <button class="location-filter-btn" data-filter="country">
                <i class="fas fa-flag"></i> By Country
            </button>
        `;
        
        // Add event listeners
        document.querySelectorAll('.location-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.location-filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                locationFilter = e.target.dataset.filter;
                loadCreatorsByLocation(locationFilter);
            });
        });
    }
}

// Country selector
function setupCountrySelector() {
    const countries = [...new Set(creators.map(c => c.country))].sort();
    const countrySelector = document.getElementById('countrySelector');
    if (countrySelector) {
        countrySelector.innerHTML = `
            <select id="countrySelect" onchange="selectCountry(this.value)">
                <option value="">Select a country</option>
                ${countries.map(country => `<option value="${country}">${country}</option>`).join('')}
            </select>
        `;
    }
}

function selectCountry(country) {
    selectedLocation = country;
    if (country) {
        loadCreatorsByLocation('country');
    }
}

// Initialize the platform
document.addEventListener('DOMContentLoaded', function() {
    loadCreators();
    loadImages();
    loadOpportunities();
    setupEventListeners();
    setupFilterButtons();
    setupLocationFilters();
    setupCountrySelector();
    getUserLocation();
});

// Load creators
function loadCreators() {
    displayCreators(creators);
}

// Load images
function loadImages(filter = 'all') {
    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
    
    imageMasonry.innerHTML = filteredImages.map(img => `
        <div class="image-card" onclick="openImageDetail(${img.id})">
            <img src="${img.image}" alt="${img.title}">
            <div class="image-info">
                <h4 class="image-title">${img.title}</h4>
                <p class="image-creator">by ${img.creator}</p>
            </div>
        </div>
    `).join('');
}

// Load opportunities
function loadOpportunities() {
    opportunitiesGrid.innerHTML = opportunities.map(opp => `
        <div class="opportunity-card">
            <div class="opportunity-type">${opp.type}</div>
            <h3 class="opportunity-title">${opp.title}</h3>
            <p class="opportunity-description">${opp.description}</p>
            <div class="opportunity-meta">
                <span>📍 ${opp.location}</span>
                <span>💰 ${opp.budget}</span>
                <span>📅 ${opp.posted}</span>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Auth modal
    joinBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
    });
    
    loginBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
    });
    
    // Close modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Social auth buttons
    document.querySelector('.btn-instagram').addEventListener('click', () => {
        alert('Instagram integration would be implemented here');
    });
    
    document.querySelector('.btn-vsco').addEventListener('click', () => {
        alert('VSCO integration would be implemented here');
    });
    
    // Signup form
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Account creation would be implemented here');
        authModal.style.display = 'none';
    });
}

// Setup filter buttons
function setupFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            // Load filtered images
            loadImages(e.target.dataset.filter);
        });
    });
}

// Open creator profile modal
function openCreatorProfile(creatorId) {
    const creator = creators.find(c => c.id === creatorId);
    if (!creator) return;
    // Use default avatar if missing
    const avatarUrl = creator.avatar && creator.avatar.trim() !== ''
        ? creator.avatar
        : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="60" fill="%23f0f0f0"/><circle cx="60" cy="50" r="28" fill="%23ccc"/><ellipse cx="60" cy="95" rx="38" ry="22" fill="%23ccc"/></svg>';
    document.getElementById('creatorProfile').innerHTML = `
        <div class="creator-profile-content">
            <div class="creator-header-large">
                <div class="creator-avatar-large" style="background-image: url('${avatarUrl}')"></div>
                <button class="upload-avatar-btn" title="Upload Photo"><i class="fas fa-camera"></i></button>
                <h2>${creator.name}</h2>
                <p class="creator-location">${creator.location}, ${creator.country}</p>
                <p class="creator-bio">${creator.bio}</p>
                <div class="creator-social">
                    <a href="https://instagram.com/${creator.social.instagram.replace('@', '')}" target="_blank" class="social-icon instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://vsco.co/${creator.social.vsco}" target="_blank" class="social-icon vsco">
                        <i class="fas fa-camera"></i>
                    </a>
                </div>
            </div>
            <div class="creator-gear">
                <h3>Gear on Shelf</h3>
                <div class="gear-list">
                    ${creator.gear.map(item => `<span class="gear-item">${item}</span>`).join('')}
                </div>
            </div>
            <div class="creator-gallery">
                <h3>Recent Work</h3>
                <div class="gallery-grid">
                    ${Array.isArray(creator.images) ? creator.images.map(img => `
                        <div class="gallery-item" style="background-image: url('${img}')"></div>
                    `).join('') : ''}
                </div>
            </div>
        </div>
    `;
    creatorModal.style.display = 'block';
}

// Open image detail modal
function openImageDetail(imageId) {
    const image = images.find(img => img.id === imageId);
    if (!image) return;
    
    document.getElementById('imageDetail').innerHTML = `
        <div class="image-detail-content">
            <img src="${image.image}" alt="${image.title}" class="detail-image">
            <div class="image-detail-info">
                <h2>${image.title}</h2>
                <p class="detail-creator">by ${image.creator}</p>
                <p class="detail-gear"><strong>Gear:</strong> ${image.gear}</p>
                <div class="detail-actions">
                    <button class="btn-primary">❤️ ${image.likes}</button>
                    <button class="btn-secondary">💬 Comment</button>
                    <button class="btn-secondary">📤 Share</button>
                </div>
            </div>
        </div>
    `;
    
    imageModal.style.display = 'block';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some CSS for the new modal content
const additionalStyles = `
    .creator-profile-content {
        max-width: 100%;
    }
    
    .creator-header-large {
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .creator-avatar-large {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 0 auto 1rem;
        background-size: cover;
        background-position: center;
        border: 4px solid #f0f0f0;
    }
    
    .creator-bio {
        color: #666;
        margin: 1rem 0;
        line-height: 1.6;
    }
    
    .creator-social {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .creator-social {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .social-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 1.2rem;
    }
    
    .social-icon.instagram {
        background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        color: white;
    }
    
    .social-icon.instagram:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(220, 39, 67, 0.4);
    }
    
    .social-icon.vsco {
        background: #000;
        color: white;
    }
    
    .social-icon.vsco:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    }
    
    .creator-gear {
        margin: 2rem 0;
    }
    
    .gear-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .gear-item {
        background: #f5f5f5;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
    }
    
    .creator-gallery {
        margin: 2rem 0;
    }
    
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .gallery-item {
        aspect-ratio: 1;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
    }
    
    .image-detail-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: start;
    }
    
    .detail-image {
        width: 100%;
        height: auto;
        border-radius: 12px;
    }
    
    .image-detail-info h2 {
        margin-bottom: 0.5rem;
    }
    
    .detail-creator {
        color: #666;
        margin-bottom: 1rem;
    }
    
    .detail-gear {
        margin-bottom: 2rem;
        color: #666;
    }
    
    .detail-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
        .image-detail-content {
            grid-template-columns: 1fr;
        }
        
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

// Add the additional styles to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet); 