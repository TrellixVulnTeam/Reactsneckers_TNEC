function Drawer () {
    return(
    <div style={{ display: 'none'}} className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина<img className="remove-btn cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>
        <div className="items">
            <div className="cart-Item d-flex align-center mb-20">
              <div className="cart-Item__img" style={{backgroundImage: 'url(/img/sneackers/2.jpg)'}}></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
             <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
           </div>

            <div className="cart-Item d-flex align-center mb-20">
              <div className="cart-Item__img" style={{backgroundImage: 'url(/img/sneackers/3.jpg)'}}></div>
             <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
               <b>12 999 руб.</b>
             </div>
             <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>

        </div>
        <div className="cart__total-blog">
          <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 298 руб.</b>
              </li>
              <li>
              <span>Налог 5:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="green-button">Оформить заказ<img src="/img/right-arrow.svg" alt="" /></button>
        </div>
      </div>
    </div>  
    );
}
 export default Drawer;