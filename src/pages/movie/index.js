import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
            .then((response) => {
                if (!response.ok) throw new Error("Filme não encontrado.");
                return response.json();
            })
            .then((data) => setMovie(data))
            .catch((err) => setError(err.message));
    }, [id, KEY]);

    if (!movie) return <div className="container"><h2>Carregando...</h2></div>;

    return (
        <div>
            <nav>
                <img src="/images/logo-site.png" alt="Logo" className="logo" />
                <h1>MovieSearch</h1>
            </nav>

            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <img
                className="img_movie"
                src={`${imagePath}${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="container">
                <div className="descricao">
                    <h4>Sinopse:</h4>
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
                <footer>
                    <p>&copy; <span>MovieSearch</span> - O melhor guia de filmes da internet!</p>
                </footer>
        </div>
    );
};

export default Movie;
