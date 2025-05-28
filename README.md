# Movie Search App 🎬

A React application for searching movies using TMDB API with debounce optimization and clean architecture.

## 🚀 Features

- Real-time movie search
- Debounced API calls
- Loading states
- Error handling
- Responsive design
- Movie details display

## 🛠️ Technologies

- React 18
- React Hooks
- React-use (for debounce)
- TMDB API
- Tailwind CSS

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/        # Search interface
│   ├── MovieList/     # Movie grid and states
│   ├── MovieCard/     # Individual movie card
│   └── Spinner/       # Loading component
├── hooks/
│   └── useMovieSearch.js  # Search logic & state management
└── services/
    └── api.js         # TMDB API configuration
```

## 🔧 Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Create .env file and add your TMDB API key
VITE_TMDB_API_KEY=your_api_key_here

# Start the development server
npm run dev
```

## 💡 Implementation Highlights

### Custom Hook: useMovieSearch

```javascript
const { searchTerm, setSearchTerm, movieList, isLoading, errorMessage } =
  useMovieSearch();
```

### Performance Optimizations

- Debounced search to prevent API spam
- Conditional rendering
- Error boundary implementation
- Proper state management

## 🔍 Key Features Explained

### Search Debouncing

```javascript
useDebounce(
  () => {
    setDebouncedSearchTerm(searchTerm);
  },
  1000,
  [searchTerm]
);
```

### Error Handling

```javascript
try {
  const movies = await fetchMoviesAPI(debouncedSearchTerm);
  setMovieList(movies || []);
} catch (error) {
  setErrorMessage(error.message || "Failed to fetch movies");
}
```

## 👨‍💻 Development Practices

- Clean Code principles
- Component separation
- Custom hooks for logic separation
- Proper error handling
- Loading states for better UX
- Responsive design
- TypeScript ready

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- TMDB API for movie data
- React-use for debounce functionality
- Tailwind CSS for styling

---

Built with ❤️ by Vinicius
