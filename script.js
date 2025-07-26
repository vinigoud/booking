// Hotel Data
const hotels = [
    {
        id: 1,
        name: "Grand Plaza Hotel",
        location: "New York, NY",
        rating: 4.8,
        price: 299,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Luxury hotel in the heart of Manhattan with stunning city views."
    },
    {
        id: 2,
        name: "Oceanview Resort",
        location: "Miami Beach, FL",
        rating: 4.6,
        price: 399,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
        description: "Beachfront resort with private access to pristine beaches."
    },
    {
        id: 3,
        name: "Mountain Lodge",
        location: "Aspen, CO",
        rating: 4.9,
        price: 599,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Cozy mountain retreat with panoramic views of the Rockies."
    },
    {
        id: 4,
        name: "Desert Oasis",
        location: "Phoenix, AZ",
        rating: 4.5,
        price: 199,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Modern desert resort with world-class spa facilities."
    },
    {
        id: 5,
        name: "Historic Inn",
        location: "Charleston, SC",
        rating: 4.7,
        price: 349,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Charming historic inn with southern hospitality."
    },
    {
        id: 6,
        name: "Urban Boutique",
        location: "San Francisco, CA",
        rating: 4.4,
        price: 449,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Trendy boutique hotel in the heart of the city."
    }
];

// Global Variables
let currentHotel = null;
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchBtn = document.getElementById('search-btn');
const hotelsGrid = document.getElementById('hotels-grid');
const bookingModal = document.getElementById('booking-modal');
const successModal = document.getElementById('success-modal');
const bookingForm = document.getElementById('booking-form');
const closeButtons = document.querySelectorAll('.close');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set minimum dates for check-in and check-out
    setDateConstraints();
    
    // Load hotels
    displayHotels();
    
    // Add event listeners
    addEventListeners();
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
}

function setDateConstraints() {
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    checkInInput.min = today;
    checkOutInput.min = today;
    
    // Update check-out minimum date when check-in changes
    checkInInput.addEventListener('change', function() {
        checkOutInput.min = this.value;
        if (checkOutInput.value && checkOutInput.value <= this.value) {
            checkOutInput.value = '';
        }
    });
}

function displayHotels() {
    hotelsGrid.innerHTML = '';
    
    hotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        hotelsGrid.appendChild(hotelCard);
    });
}

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    
    const stars = '★'.repeat(Math.floor(hotel.rating)) + '☆'.repeat(5 - Math.floor(hotel.rating));
    
    card.innerHTML = `
        <div class="hotel-image">
            <img src="${hotel.image}" alt="${hotel.name}" onerror="this.style.background='linear-gradient(45deg, #667eea, #764ba2)'">
        </div>
        <div class="hotel-info">
            <h3 class="hotel-name">${hotel.name}</h3>
            <p class="hotel-location">
                <i class="fas fa-map-marker-alt"></i>
                ${hotel.location}
            </p>
            <div class="hotel-rating">
                <span class="stars">${stars}</span>
                <span>${hotel.rating}/5</span>
            </div>
            <p class="price">$${hotel.price}/night</p>
            <button class="book-now-btn" onclick="openBookingModal(${hotel.id})">
                Book Now
            </button>
        </div>
    `;
    
    return card;
}

function addEventListeners() {
    // Mobile navigation
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    
    // Modal close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            bookingModal.style.display = 'none';
            successModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    // Booking form submission
    bookingForm.addEventListener('submit', handleBookingSubmission);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

function setupSmoothScrolling() {
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
}

function performSearch() {
    const destination = document.getElementById('destination').value.toLowerCase();
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    
    // Simple search functionality - filter hotels by destination
    const filteredHotels = hotels.filter(hotel => 
        hotel.location.toLowerCase().includes(destination) ||
        hotel.name.toLowerCase().includes(destination)
    );
    
    // Display filtered results
    displayFilteredHotels(filteredHotels);
    
    // Scroll to hotels section
    document.getElementById('hotels').scrollIntoView({ behavior: 'smooth' });
}

function displayFilteredHotels(filteredHotels) {
    hotelsGrid.innerHTML = '';
    
    if (filteredHotels.length === 0) {
        hotelsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <h3>No hotels found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }
    
    filteredHotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        hotelsGrid.appendChild(hotelCard);
    });
}

function openBookingModal(hotelId) {
    currentHotel = hotels.find(hotel => hotel.id === hotelId);
    
    if (!currentHotel) return;
    
    // Pre-fill form with hotel information
    document.getElementById('room-type').innerHTML = `
        <option value="">Select Room Type</option>
        <option value="standard">Standard Room - $${currentHotel.price}</option>
        <option value="deluxe">Deluxe Room - $${currentHotel.price + 100}</option>
        <option value="suite">Suite - $${currentHotel.price + 200}</option>
    `;
    
    bookingModal.style.display = 'block';
}

function handleBookingSubmission(e) {
    e.preventDefault();
    
    if (!currentHotel) return;
    
    const formData = new FormData(bookingForm);
    const booking = {
        id: Date.now(),
        hotelId: currentHotel.id,
        hotelName: currentHotel.name,
        guestName: document.getElementById('guest-name').value,
        guestEmail: document.getElementById('guest-email').value,
        guestPhone: document.getElementById('guest-phone').value,
        roomType: document.getElementById('room-type').value,
        specialRequests: document.getElementById('special-requests').value,
        checkIn: document.getElementById('check-in').value,
        checkOut: document.getElementById('check-out').value,
        guests: document.getElementById('guests').value,
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
    };
    
    // Add to bookings array
    bookings.push(booking);
    
    // Save to localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Close booking modal
    bookingModal.style.display = 'none';
    
    // Show success modal
    successModal.style.display = 'block';
    
    // Reset form
    bookingForm.reset();
    
    // Clear current hotel
    currentHotel = null;
}

function closeSuccessModal() {
    successModal.style.display = 'none';
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add loading animation to search button
    searchBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-search"></i> Search';
        }, 1000);
    });
    
    // Add hover effects to hotel cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.hotel-card')) {
            e.target.closest('.hotel-card').style.transform = 'translateY(-10px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.hotel-card')) {
            e.target.closest('.hotel-card').style.transform = 'translateY(0)';
        }
    });
}

// Initialize interactive features
addInteractiveFeatures();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        bookingModal.style.display = 'none';
        successModal.style.display = 'none';
    }
});

// Add some sample data for demonstration
function addSampleBookings() {
    if (bookings.length === 0) {
        const sampleBooking = {
            id: 1,
            hotelId: 1,
            hotelName: "Grand Plaza Hotel",
            guestName: "John Doe",
            guestEmail: "john@example.com",
            guestPhone: "+1-555-0123",
            roomType: "deluxe",
            specialRequests: "Late check-in preferred",
            checkIn: "2024-02-15",
            checkOut: "2024-02-18",
            guests: "2",
            bookingDate: "2024-01-15T10:30:00.000Z",
            status: "confirmed"
        };
        
        bookings.push(sampleBooking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }
}

// Initialize sample data
addSampleBookings(); 