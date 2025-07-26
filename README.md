# Luxury Hotel Booking App

A modern, responsive hotel booking application built with HTML, CSS, and JavaScript. This app provides a complete booking experience with search functionality, hotel listings, and booking management.

## 🌟 Features

### Core Functionality
- **Hotel Search & Filtering**: Search hotels by destination or hotel name
- **Interactive Hotel Cards**: Beautiful cards with hotel information, ratings, and pricing
- **Booking System**: Complete booking form with guest details and room selection
- **Date Selection**: Smart date picker with validation (check-out must be after check-in)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Modal Windows**: Elegant booking and confirmation modals
- **Local Storage**: Bookings are saved locally in the browser
- **Smooth Scrolling**: Navigation links smoothly scroll to sections

### Technical Features
- **Responsive Grid Layout**: CSS Grid for flexible hotel card layouts
- **CSS Animations**: Hover effects and smooth transitions
- **Form Validation**: Client-side validation for booking forms
- **Keyboard Navigation**: ESC key to close modals
- **Cross-browser Compatible**: Works on all modern browsers

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The app will load immediately - no server setup required!

### File Structure
```
hotel-booking-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 📱 How to Use

### 1. Search for Hotels
- Use the search form on the homepage
- Enter a destination (city, state, or hotel name)
- Select check-in and check-out dates
- Choose number of guests
- Click "Search" to filter results

### 2. Browse Hotel Listings
- View featured hotels in the grid layout
- Each card shows:
  - Hotel image
  - Hotel name and location
  - Star rating
  - Price per night
  - "Book Now" button

### 3. Make a Booking
- Click "Book Now" on any hotel card
- Fill out the booking form:
  - Guest information (name, email, phone)
  - Room type selection
  - Special requests (optional)
- Click "Confirm Booking" to complete

### 4. Booking Confirmation
- Success modal appears with confirmation
- Booking is automatically saved to local storage
- You can make multiple bookings

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #3498db (buttons, links)
- **Accent Red**: #e74c3c (search button)
- **Success Green**: #27ae60 (booking confirmation)
- **Dark Gray**: #2c3e50 (text, headers)
- **Light Gray**: #f8f9fa (backgrounds)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Responsive**: Font sizes adjust for different screen sizes

### Animations
- **Hover Effects**: Cards lift on hover
- **Modal Animations**: Smooth slide-in effects
- **Button Transitions**: Color and transform changes
- **Loading States**: Spinner animation for search

## 🔧 Customization

### Adding New Hotels
Edit the `hotels` array in `script.js`:

```javascript
const hotels = [
    {
        id: 7,
        name: "Your Hotel Name",
        location: "City, State",
        rating: 4.5,
        price: 250,
        image: "your-image-url.jpg",
        description: "Hotel description"
    }
    // ... more hotels
];
```

### Changing Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3498db;
    --accent-color: #e74c3c;
    --success-color: #27ae60;
    --dark-color: #2c3e50;
    --light-color: #f8f9fa;
}
```

### Adding Features
The modular JavaScript structure makes it easy to add new features:
- Add new search filters
- Implement user accounts
- Add payment processing
- Create booking history page

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🛠️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📊 Data Storage

The app uses **localStorage** to persist booking data:
- Bookings are saved automatically
- Data persists between browser sessions
- No server required
- Data is stored locally on user's device

## 🚀 Future Enhancements

Potential features to add:
- **User Authentication**: Login/signup system
- **Payment Integration**: Stripe or PayPal
- **Booking Management**: View/edit/cancel bookings
- **Reviews & Ratings**: User reviews system
- **Map Integration**: Google Maps for hotel locations
- **Email Notifications**: Booking confirmations
- **Admin Panel**: Hotel management interface

## 🤝 Contributing

Feel free to contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Check the documentation
- Review the code comments

---

**Enjoy your hotel booking experience! 🏨✨** 