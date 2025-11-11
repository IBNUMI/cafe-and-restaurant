import React from 'react'
import "./Admin-liset.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";





function Admin_liset() {
  return (
    <BrowserRouter>
      <div>
        <div className="list_tittel">
          <ul className="first_ul inline-grid grid-cols-3 gap-4">
            <li>Foods</li>
            <li className="pr-so">Price</li>
            <li className="pr-so">Total Sold</li>
          </ul>
        </div>
        <div className="list_item">
          <ul className="item_ul flex grid grid-cols-5 gap-4">
            <li className="inline-flex items-baseline gap-2">
              <img src="" alt="" className="w-5 h-7 self-center product-img" />
              <span className="text-gray">Burger</span>
            </li>
            <li className="pe-2">$ 2540.58</li>
            <li className="pe-l text-gray">150 Products</li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faEdit} />
            </li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faTrash} />
            </li>
          </ul>
          <ul className="item_ul flex grid grid-cols-5 gap-4">
            <li className="inline-flex items-baseline gap-2">
              <img src="" alt="" className="w-5 h-7 self-center product-img" />
              <span className="text-gray">Burger</span>
            </li>
            <li className="pe-2">$ 2540.58</li>
            <li className="pe-l text-gray">150 Products</li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faEdit} />
            </li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faTrash} />
            </li>
          </ul>
          <ul className="item_ul flex grid grid-cols-5 gap-4">
            <li className="inline-flex items-baseline gap-2">
              <img src="" alt="" className="w-5 h-7 self-center product-img" />
              <span className="text-gray">Burger</span>
            </li>
            <li className="pe-2">$ 2540.58</li>
            <li className="pe-l text-gray">150 Products</li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faEdit} />
            </li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faTrash} />
            </li>
          </ul>
          <ul className="item_ul flex grid grid-cols-5 gap-4">
            <li className="inline-flex items-baseline gap-2">
              <img
                src=""
                alt=""
                className="mx-1 size-5 self-center rounded-full"
              />
              <span className="text-gray">Burger</span>
            </li>
            <li className="pe-2">$ 2540.58</li>
            <li className="pe-l text-gray">150 Products</li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faEdit} />
            </li>
            <li className="pe-l text-bluee">
              <FontAwesomeIcon icon={faTrash} />
            </li>
          </ul>
        </div>
        <div className="button-div">
          <button className="button">DONE</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin_liset;
