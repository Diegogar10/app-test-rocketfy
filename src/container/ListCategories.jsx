import "./ListCategories.scss";

//contenedor que nos va servir para darle estilo propioa movile y desktop
const ListCategories = ({children, title}) => {
  return <div className='list__categories'>
    <div className="list__title">
      <h2>{title}</h2>
    </div>
    <div className='list__container'>
      {children}
    </div>
  </div>
};

export default ListCategories;