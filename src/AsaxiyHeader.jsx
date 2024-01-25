function AsaxiyHeader() {
  return (
    <div className="headerBar">
    <div className="header">
      <div className="service">
        <img className="asaxiy" src="./asaxiy.svg" />
        <button className="kategoriyaBtn">Bo'limlar</button>
      </div>
      <div className="search">
        <input type="text" id="searchInp" placeholder="Qidirish..." />
      </div>
      <div className="menu">
          <div className="payment">
          <img className="svg" src="./payment.svg" alt="" />
          <p>To'lov</p>
          </div>
          <div className="tracker">
          <img className="svg" src="./tracker.svg" alt="" />
          <p>Trek</p>
          </div>
          <div className="cart">
          <img className="svg" src="./cart.svg" alt="" />
          <p>Savatcha</p>
          </div>
          <div className="heart">
          <img className="svg" src="./heart.svg" alt="" />
          <p>Sevimlilar</p>
          </div>
          <div className="leangue">
          <img className="svg" src="./russia.svg" alt="" />
          <p>Pyccкий</p>
          </div>
          <div className="accaunt">
          <img className="svg" src="./avatar.svg" alt="" />
          <p>Kirish</p>
          </div>
        </div>
    </div>
    <div className="hamburgerItem"></div>
  </div>
  ) 
}
export default AsaxiyHeader;
