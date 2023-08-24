
import {Component} from "react"
import MovieCard from "./Moviecard";
class MovieList extends Component{
    render(){
        // const {title,plot,price,rating,stars,fav,cart} = this.state;
        const {movies,addstars, removestars, togglefav,togglecart}=this.props;
        
        return(
          <>
          {movies.map((mov) => <MovieCard movie={mov} 
                                addstars={addstars} 
                                removestars={removestars}
                                 togglefav={togglefav}
                                 togglecart={togglecart}
                                                      />)}
         
          
          </>
        )
    }
}

export default MovieList;