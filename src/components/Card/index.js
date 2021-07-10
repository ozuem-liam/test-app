import React from 'react';
import Rating from '../Rating/index';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CardWrapper = styled.div`
.card {
    display: grid;
    grid-template-columns: 280px;
    grid-template-rows: 230px 150px 80px;
    grid-template-areas: "image" "text" "stats";

    font-family: sans-serif;
    border-top-right-radius: 18px;
    border-bottom-left-radius: 18px;
    background: var(--mainWhite);
    box-shadow: 5px 5px 15px rgba(0,0,0,0.7);
    text-align: center;
    margin: 20px;
}
.card-image {
    grid-area: image;
    position: relative;
}
.card-image img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
}
.card-price {
    display:flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
}
.card-price .title {
    font-size: 20px;
    margin: 0 0 0 13px;
}
.card-price .cost {
    font-size: 20px;
    margin: 0 13px 0 0;
}
.card-text {
    grid-area: text;
    text-align: left;
    margin-top: 20px;
}
.card-text .dir {
    font-size: 15px;
    color: var(--mainGrey);
    padding: 13px 0 0 13px;
    margin: 5px 0 0 0;
}
.card-text .dist {
    text-align: left;
    color: var(--mainGrey);
    padding:13px;
    margin: 0;
}
.card-stats {
    grid-area: stats;
    display:flex;
    position: relative;
    justify-content: space-between;
    width: 100%;
}
.card-stats .star {
    width: 80px;
    height: 40px; 
    position: absolute;
    bottom: 5px;
    left: 13px;
}
.card-stats .add {
    width: 80px;
    height: 60px;
    border: none;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 60px;
    border-top-left-radius: 0.3em; 
    color: white;
    background: var(--mainYellow);
}
`;

function Card(props) {
    //const { strMeal, strMealThumb, price, description } = this.props;
        return (
            <React.Fragment> 
            <CardWrapper>
                <div className="card"> 
                        <div className="card-image">
                            <img src={props.strMealThumb} alt="product" />
                        </div>  
                        <div className="card-text"> 
                        <div className="card-price">
                            <h6 className="title">
                                    {props.strMeal}
                            </h6>
                            <h6 className="cost">
                                    {props.price}
                            </h6>
                        </div>
                        <p className="dir">Serve with french fries + drink</p>
                        <p className="dist">{props.description.substring(0, 100)}...</p>
                        </div>
                        <div className="card-stats">
                            <div className="star"><Rating /></div>
                            <button className="add">+</button>
                        </div>  
                </div>    
            </CardWrapper>
            </React.Fragment>
        );
}

export default Card;
// Card.propTypes = {
//     meal:PropTypes.shape({
//         id: PropTypes.number,
//         strMealThumb: PropTypes.string,
//         title: PropTypes.string,
//         price: PropTypes.number
//     }).isRequired
// };

