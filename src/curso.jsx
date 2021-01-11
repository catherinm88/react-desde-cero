import React from 'react';
import PropTypes from 'prop-types';
//const Curso = props => (
const Curso = ({title, image, price}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {title}
            </h3>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="/">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
) 

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontró título",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Taipei_Skyline_2015.jpg/1200px-Taipei_Skyline_2015.jpg",
    price: "Gratis"
}

export default Curso;