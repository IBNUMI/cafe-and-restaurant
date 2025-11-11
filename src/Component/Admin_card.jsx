import React from "react";
import "./Admin-card.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faCartShopping,
  faArrowsUpDownLeftRight,
  faReceipt,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

function Admin_card() {
  return (
    <BrowserRouter>
      <div>
        <div className="card-div grid grid-cols-3 gap-3">
          <div className="card inline-grid grid-cols-2 gap-4">
            <div className="viwe-card">
              <span className="text-gray">Product sold</span>
              <h1>25.1k</h1>
              <span className="text-green-500 inline-flex pero-so">
                <FontAwesomeIcon icon={faArrowUpRightDots} className="arrow" />
                +15%
              </span>
            </div>
            <div className="viwe-card2">
              <span className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <p>
                <Link to="/Admin_headr" className="link-more text-blue-500">
                  View Report
                </Link>
              </p>
            </div>
          </div>
          <div className="card inline-grid grid-cols-2 gap-4">
            <div className="viwe-card">
              <span className="text-gray">Product sold</span>
              <h1>25.1k</h1>
              <span className="text-orange-300 inline-flex pero-so">
                <FontAwesomeIcon
                  icon={faArrowsUpDownLeftRight}
                  className="arrow"
                />
                -3.5%
              </span>
            </div>
            <div className="viwe-card2">
              <span className="cart">
                <FontAwesomeIcon icon={faArrowTrendUp} />
              </span>
              <p>
                <Link to="/Admin_headr" className="link-more text-blue-500">
                  View Report
                </Link>
              </p>
            </div>
          </div>
          <div className="card inline-grid grid-cols-2 gap-4">
            <div className="viwe-card">
              <span className="text-gray">Product sold</span>
              <h1>25.1k</h1>
              <span className="text-green-500 inline-flex pero-so">
                <FontAwesomeIcon icon={faArrowUpRightDots} className="arrow" />
                +15%
              </span>
            </div>
            <div className="viwe-card2">
              <span className="cart">
                <FontAwesomeIcon icon={faReceipt} />
              </span>
              <p>
                <Link to="/Admin_headr" className="link-more text-blue-500">
                  View More
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="name-devloper">
          <h1>Developed by Lemon Technologies</h1>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin_card;
