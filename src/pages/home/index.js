import { useState, useEffect } from "react";
import { Container, Movie, MovieList, Btn, Select, Nav, Logo, Footer } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const [genreFilter, setGenreFilter] = useState(null);
    const [genres, setGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hovered, setHovered] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const KEY = process.env.REACT_APP_KEY;

    const fetchMoviesByGenre = (genreId) => {
        if (searchTerm) return; 
        setIsLoading(true);
        setError(null);
        const genreParam = genreId ? `&with_genres=${genreId}` : "";
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR${genreParam}`
        )
            .then((response) => {
                if (!response.ok) throw new Error("Erro ao carregar os filmes.");
                return response.json();
            })
            .then((data) => setMovies(data.results))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    };

    const fetchGenres = () => {
        fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`
        )
            .then((res) => res.json())
            .then((data) => setGenres(data.genres))
            .catch((err) => setError(err.message));
    };

    const searchMovies = (query) => {
        if (!query) return;
        setIsLoading(true);
        setError(null);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(query)}`
        )
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchMovies(searchTerm);
        setGenreFilter(null);
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    useEffect(() => {
        if (!searchTerm) fetchMoviesByGenre(genreFilter);
    }, [genreFilter, searchTerm]);

    return (
        <Container>
            <Nav>
                <div className="logo-grupo">
                    <Logo src="/images/logo-site.png" alt="Logo" />
                    <h1>MovieSearch</h1>
                </div> 
                
                <Select
                    aria-label="Selecione o gênero"
                    onChange={(e) => setGenreFilter(e.target.value)}
                    value={genreFilter || ""}
                >
                    <option value="">Todos os Gêneros</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </Select>
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                        type="text"
                        placeholder="Buscar filme..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </form>                      
            </Nav>
            {!searchTerm && <h2>Filmes mais assistidos</h2>}

            {!isLoading && movies.length === 0 && (
                <h2>Nenhum filme encontrado</h2>
            )}

            <MovieList>
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        onMouseEnter={() => setHovered(movie.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                        <span>{movie.title}</span>

                        {hovered === movie.id && (
                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        )}
                    </Movie>
                ))}
            </MovieList>
            <Footer>
                <p>&copy; <span>MovieSearch</span> - O melhor guia de filmes da internet!</p>
            </Footer>
        </Container>    
    );
}

export default Home;
