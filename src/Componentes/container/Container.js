import React from 'react';
import {container, box} from './container.css';

export default function Container(props) {
    return(
        <div className='container'>
            <div className='box'>
                <div className='content'>
                    <img src={props.imagem} />
                    <h3>{props.title}</h3>
                    <p>${props.price}</p>
                    <p>{props.description}</p>
                    <p>Categoria: {props.category}</p>
                    <p>{props.rating}</p>
                    <p>{props.rate}</p>
                    <p>{props.count}</p>
                </div>
            </div>
        </div>
    )
}