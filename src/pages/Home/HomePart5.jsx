import { useContext, useRef } from "react";
import Container from "../../components/shared/Container";
import { BeersContext } from "../../components/context/beersContext";
import { Link } from "react-router-dom";

function HomePart5() {
  const {beers} = useContext (BeersContext); //meterla en el producto para hacer el map
  
  const productsRef = useRef()
  
  function handleLeft() {
    const carousel = productsRef.current
    const firstChild = carousel.firstElementChild;
    carousel.scrollLeft -= firstChild.offsetWidth;
  }
  
  function handleRight() {
    const carousel = productsRef.current
    const firstChild = carousel.firstElementChild;
    carousel.scrollLeft += firstChild.offsetWidth;
  }
  return (
    <Container>
      <div className="hs-caro">
        <div className="hs-carousel-1">
          <div className="hs-car-icons">
            <img src="/images/icon-detalle_6.png" alt="" />
            <img src="/images/icon-detalle_5.png" alt="" />
          </div>
          <h1>Descubre Nuestras Cervezas</h1>
          <p>
            Explora un mundo de sabor <span>con nuestras cervezas artesanales únicas. </span> Descubre la pasión y la calidad en cada sorbo, disponible ahora para tu disfrute.
          </p>
        </div>
        <div className={"h-carousel_container"}> {/*onMouseDown={handlerMOuseDown}*/}
          <div className={"hs-caro-controller"}>
            <button onClick={handleLeft}>
              <img src="/images/arrow-cervezas_4.png" alt="" />
            </button>
          </div>
          <div className={"h-carousel_products"} ref={productsRef}>
            {beers.map((item) => (
              <CarouselItem key={item._id} cerveza={item} />
            ))}
          </div>
          <div className={"hs-caro-controller"}>
            <button onClick={handleRight}>
              <img src="/images/arrow-cervezas_3.png" alt="" />
            </button>
          </div>
        </div>
        <div className="hs-carousel-2">
          <Link to = "/products"><button>Ver más cervezas</button></Link> 
        </div>
      </div>
    </Container>
  );
}

export default HomePart5;
function CarouselItem({ cerveza }) {
  return (
    <div className={"h-carousel_item"}>
      <div className="h-car-item-cont">
        <Link to = {"/product/"+ cerveza._id} className="h-car-item-cont-img">
          <img src={cerveza.picture} alt="image 1" />
        </Link>
        <div className="h-car-item-desc">
          <h4>{cerveza.nombre}</h4>
          <p>
            {cerveza.graduacion}% | {cerveza.fermentacion} | {cerveza.color}
          </p>
        </div>
      </div>
    </div>
  );
}
