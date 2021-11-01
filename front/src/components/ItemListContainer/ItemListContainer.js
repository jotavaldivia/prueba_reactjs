import React ,{useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList.js'

function ItemListContainer() {
    const [producto, setProductos] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
  .then(response => response.json())
 .then(data => {
     console.log(data);
    return setProductos(data)
 }
     )
    },[]);
    return (
        <>
            <ItemList prod={producto}></ItemList>
        </>
    )
}

export default ItemListContainer
