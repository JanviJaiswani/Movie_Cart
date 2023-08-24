import {Component} from "react"
class MovieCard extends Component{
  
    
    render(){
        const { movie, togglefav, togglecart} = this.props;
        const {title,plot,price,rating,stars,fav,cart} = this.props.movie;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                     <img alt="Poster" src="./images/pos1.jpg"></img>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs {price}</div>
                    
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                     <img  className="str-btn" alt="decrease" src="./images/minus.png" onClick={()=>this.props.removestars(this.props.movie)}/>
                                     <img  className="stars" alt="stars" src="./images/stars.png"/>
                                     <img  className="str-btn" alt="increase" src="./images/plus.png" onClick={()=>this.props.addstars(this.props.movie)}/>
                                     <span>{stars}</span>
                            </div>
                             <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=> {togglefav(movie)} }>{fav?"Un-favourite":"favourite"}</button>
                           
                            <button className= {cart?"Remove-cart":"cart-btn" } onClick={()=> {togglecart(movie)}}>{cart?"Remove form cart":"Add to card"}</button>
                        
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default MovieCard;