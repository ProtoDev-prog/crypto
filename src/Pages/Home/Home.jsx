import { useEffect, useRef } from "react";
import "./Home.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Home({ cdata }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  console.log(cdata);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "vTHO7618+kqz0iC2Wk/may8KaOyegLH/ybUXuOn5xjU=",
      },
    };

    fetch(
      `https://openapiv1.coinstats.app/coins?limit=10&currency=${cdata}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.result))
      .catch((err) => console.error(err));
  }, [cdata]);
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: `${cdata.toUpperCase()}`,
  });
  function newData() {
    navigate(`/coin/${input.toLowerCase()}`);
  }
  return (
    <div className="main">
      <div className="top">
        <h1>
          Largest <br />
          Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. <br /> Sign
          up to explore more about cryptos.
        </p>
        <form>
          <input
            type="text"
            placeholder="Search Crypto..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={newData}>Search</button>
        </form>
      </div>
      <div className="table-layout">
        <div className="row">
          <a>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p>24H Change</p>
            <p className="market">Market Cap</p>
          </a>
          {data.map((ele, ind) => {
            return (
              <Link key={ind} to={"/coin/" + ele.id}>
                <p>{ele.rank}</p>
                <p>
                  <img src={ele.icon} alt="" />
                  <p>{ele.name}</p>
                </p>
                <p>{ele.price.toFixed(2)}</p>
                <p className={ele.priceChange1d >= 0 ? "green" : "red"}>
                  {ele.priceChange1d}
                </p>
                <p className="market">{USDollar.format(ele.marketCap)}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;
