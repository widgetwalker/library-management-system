# 📚 Library Management System

A modern, feature-rich web application for managing your personal book library. Built with vanilla HTML, CSS, and JavaScript with a beautiful glassmorphism design.

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 📖 Book Management
- **Add Books** - Create new entries with title, author, category, cover image, rating, and reading status
- **Edit Books** - Modify any book information
- **Delete Books** - Remove books with confirmation dialog
- **Auto-save** - All data persists in browser localStorage

### 🔍 Discovery & Organization
- **Advanced Search** - Search books by title or author in real-time
- **Category Filter** - Filter by 8 categories (Fiction, Non-Fiction, Technical, Science Fiction, Mystery, Biography, Self-Help, History)
- **Status Filter** - Filter by reading status (To Read, Currently Reading, Finished)
- **Multiple Sort Options** - Sort by title (A-Z, Z-A), rating, or date added

### ⭐ Reading Progress
- **Status Tracking** - Track reading progress with three statuses
- **5-Star Rating System** - Interactive rating for each book
- **Statistics Dashboard** - View total books, books to read, currently reading, and finished
- **Reading Timeline** - See recently added books and current reads

### 🎨 Modern Design
- **Glassmorphism UI** - Beautiful glass-effect cards with backdrop blur
- **Dark Theme** - Eye-friendly dark mode with vibrant gradients
- **Smooth Animations** - Engaging micro-interactions and transitions
- **Responsive** - Fully responsive design for mobile, tablet, and desktop
- **Custom Color System** - Carefully crafted color palette with CSS variables

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

### Usage

1. **Home Page** (`index.html`)
   - View library statistics
   - See currently reading books
   - Browse recently added books

2. **Browse Books** (`books.html`)
   - Search and filter your collection
   - Sort books by various criteria
   - View all books in a grid layout

3. **Admin Panel** (`admin.html`)
   - Add new books to your library
   - Edit existing book information
   - Delete books from collection

## 📁 Project Structure

```
library-management-system/
├── index.html       # Home page with statistics
├── books.html       # Browse and search books
├── admin.html       # Admin panel for book management
├── styles.css       # Global styles and design system
├── app.js           # Core JavaScript functionality
└── README.md        # This file
```

## 🎯 Book Categories

The system supports the following book categories:
- Fiction
- Non-Fiction
- Technical
- Science Fiction
- Mystery
- Biography
- Self-Help
- History

## 📊 Data Storage

All book data is stored in your browser's localStorage under the key `libraryBooks`. Each book has the following structure:

```javascript
{
  id: "unique-id",
  title: "Book Title",
  author: "Author Name",
  category: "Fiction",
  coverUrl: "https://...",
  rating: 5,
  status: "finished",
  dateAdded: "ISO date string"
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Accent**: Green (#10b981)
- **Background**: Dark slate (#0f172a)

### Features
- CSS Custom Properties for easy theming
- Glassmorphism effects with backdrop blur
- Gradient backgrounds and buttons
- Smooth transitions (0.2s - 0.5s)
- Responsive grid system

## 🖼️ Book Covers

Book covers can be added in two ways:

1. **Custom URL** - Paste any image URL in the cover field
2. **Default Cover** - Leave empty to use the beautiful default cover

Recommended image sources:
- [Unsplash](https://unsplash.com/s/photos/book) - Free high-quality images
- [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers) - Use ISBN to fetch covers

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **localStorage API** - Client-side data persistence
- **Google Fonts** - Inter font family

## 🌟 Key Highlights

- ✅ Zero dependencies
- ✅ No build process required
- ✅ Works offline after first load
- ✅ Fast and lightweight
- ✅ Clean, readable code
- ✅ Mobile-friendly interface

## 📝 Sample Data

The application comes with 6 pre-loaded sample books on first run:
- The Great Gatsby
- To Kill a Mockingbird
- Clean Code
- Dune
- The Hobbit
- Sapiens

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Built with ❤️ by widgetwalker

---

**Made with HTML, CSS, and JavaScript** ⚡
