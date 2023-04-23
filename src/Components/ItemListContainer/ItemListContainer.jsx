import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { category } = useParams()
  useEffect(() => {

    if (category) {
      fetch('../Data/productos.json')
        .then(response => response.json())
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
          setProductos(productosFiltrados)

        })
    } else {
      fetch('./Data/productos.json')
        .then(response => response.json())
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0)
          setProductos(productosFiltrados)

        })

    }


  }, [category])

  return (
    <div className="row">
      <h1>Lista General de Productos</h1>
      {<ItemList productos={productos} />}
    </div>
  )
}