import React, { useState } from 'react';
import Container from '../container/Container';
import produtos from '../../dados/produtos';
import {pt, bt} from './api.css';


export default function Arquivo() {
    const [p, setP] = useState([...produtos])
    const [min, setMin] = useState(Number.NEGATIVE_INFINITY)
    const [max, setMax] = useState(Number.POSITIVE_INFINITY)

    function filtro() {
        const prods = p.filter(produto => {
            return produto.price >= min && produto.price <= max
        })
        if (prods.length > 0) {
            setP([...prods])
        }else{
            alert('Não existe produtos nessa faixa de preço.')
        }
    };
    function limpar() {
        setP([...produtos])
        setMin(Number.NEGATIVE_INFINITY)
        setMax(Number.POSITIVE_INFINITY)
    }
    return (          
        <div>
            <input className='pt' placeholder='R$' value={min} type='Number' onChange={e => setMin(e.target.value)}/>
            <input className='pt' placeholder='R$' value={max} type='Number' onChange={e => setMax(e.target.value)}/>
            <button className='bt' onClick={filtro}>Filtrar</button>
            <button className='bt' onClick={limpar}>Limpar</button>

            <h1>Produtos</h1>  
            <div>       
            {p.map(item => (
                <div key={item.id}>
                    <Container
                    imagem={item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    count={item.count} />
                        
                </div>
            ))}
            </div> 
        </div>        
    );
}

