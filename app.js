const STORAGE_KEY = 'libraryBooks';
const DEFAULT_COVER = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop';

function getAllBooks() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveBooks(books) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function addBook(bookData) {
    const books = getAllBooks();
    const newBook = {
        id: generateId(),
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
        coverUrl: bookData.coverUrl || DEFAULT_COVER,
        rating: bookData.rating || 0,
        status: bookData.status || 'to-read',
        dateAdded: new Date().toISOString()
    };
    books.push(newBook);
    saveBooks(books);
    return newBook;
}

function updateBook(id, updates) {
    const books = getAllBooks();
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...updates };
        saveBooks(books);
        return books[index];
    }
    return null;
}

function deleteBook(id) {
    const books = getAllBooks();
    const filtered = books.filter(book => book.id !== id);
    saveBooks(filtered);
    return filtered;
}

function getBookById(id) {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getLibraryStats() {
    const books = getAllBooks();
    return {
        total: books.length,
        toRead: books.filter(b => b.status === 'to-read').length,
        reading: books.filter(b => b.status === 'reading').length,
        finished: books.filter(b => b.status === 'finished').length
    };
}

function searchBooks(query) {
    const books = getAllBooks();
    const lowerQuery = query.toLowerCase();
    return books.filter(book =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
}

function filterByCategory(category) {
    if (category === 'all') return getAllBooks();
    const books = getAllBooks();
    return books.filter(book => book.category === category);
}

function filterByStatus(status) {
    if (status === 'all') return getAllBooks();
    const books = getAllBooks();
    return books.filter(book => book.status === status);
}

function combineFilters(searchQuery, category, status) {
    let books = getAllBooks();

    if (searchQuery) {
        const lowerQuery = searchQuery.toLowerCase();
        books = books.filter(book =>
            book.title.toLowerCase().includes(lowerQuery) ||
            book.author.toLowerCase().includes(lowerQuery)
        );
    }

    if (category && category !== 'all') {
        books = books.filter(book => book.category === category);
    }

    if (status && status !== 'all') {
        books = books.filter(book => book.status === status);
    }

    return books;
}

function sortBooks(books, sortBy) {
    const sorted = [...books];

    switch (sortBy) {
        case 'title-asc':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'title-desc':
            return sorted.sort((a, b) => b.title.localeCompare(a.title));
        case 'rating-high':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'rating-low':
            return sorted.sort((a, b) => a.rating - b.rating);
        case 'date-new':
            return sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        case 'date-old':
            return sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        default:
            return sorted;
    }
}

function createStarRating(rating, interactive = false) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starClass = i <= rating ? 'star filled' : 'star empty';
        stars.push(`<span class="${starClass}" data-rating="${i}">${i <= rating ? '★' : '☆'}</span>`);
    }
    return `<div class="stars ${interactive ? 'interactive' : ''}">${stars.join('')}</div>`;
}

function getStatusBadgeClass(status) {
    switch (status) {
        case 'to-read': return 'badge-to-read';
        case 'reading': return 'badge-reading';
        case 'finished': return 'badge-finished';
        default: return 'badge-primary';
    }
}

function getStatusLabel(status) {
    switch (status) {
        case 'to-read': return 'To Read';
        case 'reading': return 'Currently Reading';
        case 'finished': return 'Finished';
        default: return status;
    }
}

function createBookCard(book, showActions = false) {
    return `
        <div class="book-card" data-id="${book.id}">
            <img src="${book.coverUrl}" alt="${book.title}" class="book-cover" onerror="this.src='${DEFAULT_COVER}'">
            <div class="book-info">
                <h3 class="book-title">${escapeHtml(book.title)}</h3>
                <p class="book-author">by ${escapeHtml(book.author)}</p>
                <div class="book-meta">
                    <span class="badge badge-primary">${escapeHtml(book.category)}</span>
                    <span class="badge ${getStatusBadgeClass(book.status)}">${getStatusLabel(book.status)}</span>
                </div>
                ${createStarRating(book.rating)}
                ${showActions ? `
                    <div class="mt-2 flex gap-2">
                        <button class="btn btn-sm btn-primary" onclick="editBook('${book.id}')">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="confirmDelete('${book.id}')">Delete</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function initializeSampleData() {
    const books = getAllBooks();
    if (books.length === 0) {
        const sampleBooks = [
            {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                category: 'Fiction',
                coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
                rating: 5,
                status: 'finished'
            },
            {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                category: 'Fiction',
                coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
                rating: 5,
                status: 'finished'
            },
            {
                title: 'Clean Code',
                author: 'Robert C. Martin',
                category: 'Technical',
                coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
                rating: 4,
                status: 'reading'
            },
            {
                title: 'Dune',
                author: 'Frank Herbert',
                category: 'Science Fiction',
                coverUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=600&fit=crop',
                rating: 5,
                status: 'to-read'
            },
            {
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                category: 'Fiction',
                coverUrl: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop',
                rating: 5,
                status: 'finished'
            },
            {
                title: 'Sapiens',
                author: 'Yuval Noah Harari',
                category: 'History',
                coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop',
                rating: 4,
                status: 'reading'
            }
        ];

        sampleBooks.forEach(book => addBook(book));
    }
}
