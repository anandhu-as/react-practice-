import React, { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import "../css/Home.css"
import { getPopularMovies, searchMovie } from '../api';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to load movies.");
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        try {
            setLoading(true);
            const searchResults = await searchMovie(searchQuery);
            setMovies(searchResults);
        } catch (err) {
            setError("Search failed. Please try again.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='home'>
            <form className="search-form" onSubmit={handleSearch}>
                <input 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    type="text" 
                    placeholder='Search for movies' 
                    className='search-input' 
                />
                <button type='submit' className='search-button'>Search</button>
            </form>

            {error && <div className="error">{error}</div>}

            {loading ? (
                <div className='loading'>Loading....</div>
            ) : (
                <div className="movies-grid">
                    {movies.length > 0 ? (
                        movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
                    ) : (
                        <div>No movies found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
