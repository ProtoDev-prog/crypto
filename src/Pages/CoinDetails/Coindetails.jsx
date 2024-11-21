import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Coindetails.css";
function Coindetails({ cdata }) {
  const { id } = useParams("id");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "vTHO7618+kqz0iC2Wk/may8KaOyegLH/ybUXuOn5xjU=",
      },
    };
    setLoading(true);
    fetch(
      `https://openapiv1.coinstats.app/coins/${id}?currency=${cdata}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: `${cdata.toUpperCase()}`,
  });
  return loading ? (
    <div className="loader"></div>
  ) : (
    <>
      <div className="coin-title">
        <img src={data.icon} alt="" />
        <h1>{data.name}</h1>
      </div>
      <div className="details">
        <div className="row">
          <p>Market Rank</p>
          <p>{data.rank}</p>
        </div>
        <div className="row">
          <p>Current Price</p>
          <p>{USDollar.format(data.price)}</p>
        </div>
        <div className="row">
          <p>Market cap</p>
          <p>{USDollar.format(data.marketCap)}</p>
        </div>
        <div className="row">
          <p>Price Change 24 Hour</p>
          <p>{USDollar.format(data.priceChange1d)}</p>
        </div>
        <div className="row">
          <p>Volume</p>
          <p>{USDollar.format(data.priceChange1d)}</p>
        </div>
      </div>
    </>
  );
}
export default Coindetails;
