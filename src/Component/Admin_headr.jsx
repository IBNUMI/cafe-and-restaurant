import React from "react";
import "./Admin-headr.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSearch } from "@fortawesome/free-solid-svg-icons";






function Admin_headr() {
  return (
    <div className="admin_header">
      <div className="admin_tittel">
        <h2>update price of Menu</h2>
      </div>
      <div className="admin_search">
        <input
          type="text"
          placeholder="Search"
          className="search_input focus:outline-none"
        />
        <FontAwesomeIcon icon={faSearch} className="text-color" />
      </div>
      <div className="admin_butten">
        <h3 className="add_butten">
          <span>
            <FontAwesomeIcon icon={faAdd} className="text-yellow-600" /> ADD NEW
            FOOD
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Admin_headr;
