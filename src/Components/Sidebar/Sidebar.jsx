import "./Sidebar.css";
import React from 'react'

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";
//react icons
import {AiFillDashboard} from 'react-icons/ai';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';

import {GiMusicalScore} from 'react-icons/gi';
import {SiYoutubemusic} from 'react-icons/si';
import {ImStatsBars} from 'react-icons/im';

import {AiOutlineNotification} from 'react-icons/ai';
import {MdOutlineReportGmailerrorred} from 'react-icons/md'; 
import {BiHistory} from 'react-icons/bi';
import {AiOutlineSetting} from 'react-icons/ai';
import {SiBlogger} from 'react-icons/si';
import {BsFillFileEarmarkPostFill} from 'react-icons/bs';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">K I N</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <AiFillDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineUsergroupAdd className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GiMusicalScore className="icon"/>
              <span>Artists</span>
            </li>
          </Link>
          <Link to="/musics" style={{ textDecoration: "none" }}>
            <li>
              <SiYoutubemusic className="icon"/>
              <span>Musics</span>
            </li>
          </Link>

          <p className="title">USEFUL</p>
          <li>
            <ImStatsBars className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <AiOutlineNotification className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MdOutlineReportGmailerrorred className="icon"/>
            <span>Report</span>
          </li>
          <li>
            <BiHistory className="icon"/>
            <span>History</span>
          </li>
          <li>
            <AiOutlineSetting className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">Pages</p>
          <li>
            <SiBlogger className="icon"/>
            <span>Blog</span>
          </li>
          <li>
            <BsFillFileEarmarkPostFill className="icon"/>
            <span>Post</span>
          </li>
         
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
