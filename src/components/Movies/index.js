import { NavLink, Route, Switch } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((e, i) => {
          return <NavLink to={`/movies/${e.id}`} key={i}>{e.title} | </NavLink>;
        })}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
