import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faUsers,
  faRocket,
  faBolt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./HamsterKombat.css";
import i1 from "../src/assets/i1.png";
import i2 from "../src/assets/i2.png";
import i3 from "../src/assets/i3.png";
import i4 from "../src/assets/i4.png";
import i5 from "../src/assets/i5.png";
import i6 from "../src/assets/i6.png";

const HamsterKombat = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  const [coins, setCoins] = useState(0);

  // Faqat bitta coin qo'shish
  const handleHamsterClick = () => {
    setCoins(coins + 1);
  };

  return (
    <div className="hamster-main-bg">
      <div className="hamster-container dark">
        <h1 className="screen-title">Hamster Kombat</h1>
        <div className="stats-row">
          <button
            className="stat-btn active"
            onClick={() => setShowPopup(true)}
            tabIndex={0}
          >
            <span className="stat-label gold">Earn per tap</span>
            <span className="stat-value">
              <FontAwesomeIcon icon={faCoins} className="stat-ico" />
              +1
            </span>
          </button>
          <button className="stat-btn">
            <span className="stat-label blue">Coins to level up</span>
            <span className="stat-value">10 M</span>
          </button>
          <button className="stat-btn">
            <span className="stat-label green">Profit per hour</span>
            <span className="stat-value">
              <FontAwesomeIcon icon={faCoins} className="stat-ico" />
              +636
            </span>
          </button>
        </div>

        <div className="money-row">
          <FontAwesomeIcon icon={faCoins} className="money-ico" />
          <span className="money-amount">{coins}</span>
        </div>

        <div className="hamster-img-wrap" style={{ position: "relative" }}>
          <img
            src={i1}
            alt="Hamster"
            className="hamster-img"
            style={{ cursor: "pointer" }}
            onClick={handleHamsterClick}
          />
        </div>

        <div className="progress-row">
          <FontAwesomeIcon icon={faBolt} className="bolt-ico" />
          <span className="progress-txt">6500 / 6500</span>
          <span className="boost-txt">Boost</span>
        </div>

        <div className="nav-bar">
          <button
            className={`nav-btn${showExchange ? " active" : ""}`}
            onClick={() => setShowExchange(true)}
          >
            <img src={i2} alt="Exchange" className="nav-ico" />
            <span>Exchange</span>
          </button>
          <button className="nav-btn">
            <span className="nav-ico gray">
              <svg width="20" height="20">
                <line
                  x1="5"
                  y1="15"
                  x2="15"
                  y2="5"
                  stroke="#888"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span>Mine</span>
          </button>
          <button className="nav-btn">
            <FontAwesomeIcon icon={faUsers} className="nav-ico gray" />
            <span>Friends</span>
          </button>
          <button className="nav-btn">
            <FontAwesomeIcon icon={faCoins} className="nav-ico gray" />
            <span>Earn</span>
          </button>
          <button className="nav-btn">
            <img src={i3} alt="Airdrop" className="nav-ico" />
            <span>Airdrop</span>
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="custom-popup" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="popup-row">
              <span className="popup-lvl">M1</span>
              <span className="popup-plus gold">
                +2 <FontAwesomeIcon icon={faCoins} />
              </span>
              <span className="popup-minus">
                -1000 <FontAwesomeIcon icon={faCoins} />
              </span>
            </div>
            <div className="popup-row">
              <span className="popup-lvl">M2</span>
              <span className="popup-plus gold">
                +3 <FontAwesomeIcon icon={faCoins} />
              </span>
              <span className="popup-minus">
                -2500 <FontAwesomeIcon icon={faCoins} />
              </span>
            </div>
            <div className="popup-row">
              <span className="popup-lvl">M3</span>
              <span className="popup-plus gold">
                +4 <FontAwesomeIcon icon={faCoins} />
              </span>
              <span className="popup-minus">
                -6000 <FontAwesomeIcon icon={faCoins} />
              </span>
            </div>
          </div>
        </div>
      )}
      {showExchange && (
        <div className="custom-popup" onClick={() => setShowExchange(false)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
            style={{ gap: "18px", minWidth: 320 }}
          >
            <button
              className="close-btn"
              onClick={() => setShowExchange(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="exchange-popup-row">
              <img
                src={i4}
                alt="Top 10 cmc pairs"
                className="exchange-popup-img"
              />
              <div className="exchange-popup-info">
                <div className="exchange-popup-title">Top 10 cmc pairs</div>
                <div className="exchange-popup-sub">Profit per hour</div>
                <div className="exchange-popup-coins">
                  <FontAwesomeIcon icon={faCoins} className="stat-ico" /> 120
                </div>
                <div className="exchange-popup-level">lvl 1</div>
                <div className="exchange-popup-cost">
                  <FontAwesomeIcon icon={faCoins} className="stat-ico" /> 192
                </div>
              </div>
            </div>
            <div className="exchange-popup-row">
              <img src={i5} alt="Meme coins" className="exchange-popup-img" />
              <div className="exchange-popup-info">
                <div className="exchange-popup-title">Meme coins</div>
                <div className="exchange-popup-sub">Profit per hour</div>
                <div className="exchange-popup-coins">
                  <FontAwesomeIcon icon={faCoins} className="stat-ico" /> 376
                </div>
                <div className="exchange-popup-level">lvl 1</div>
                <div className="exchange-popup-cost">
                  <FontAwesomeIcon icon={faCoins} className="stat-ico" /> 2.3K
                </div>
              </div>
            </div>
            <div className="exchange-popup-row">
              <img
                src={i6}
                alt="Margin trading x10"
                className="exchange-popup-img"
              />
              <div className="exchange-popup-info">
                <div className="exchange-popup-title">Margin trading x10</div>
                <div className="exchange-popup-sub">Profit per hour</div>
                <div className="exchange-popup-coins">
                  <FontAwesomeIcon icon={faCoins} className="stat-ico" /> 997
                </div>
                <div className="exchange-popup-level">lvl 1</div>
                <div className="exchange-popup-cost">
                  <FontAwesomeIcon icon={faCoins} className="stat-ico" /> 11.2K
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamsterKombat;
  