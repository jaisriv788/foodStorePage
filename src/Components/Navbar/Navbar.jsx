import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WindowIcon from "@mui/icons-material/Window";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {

  const [home,setHome] = useState("bg-white text-blue-950 rounded-l-lg")
  const [window,setWindow] = useState("")
  const [signal,setSignal] = useState("")
  const [setting,setSetting] = useState("")
  const [logout,setLogout] = useState("")

  function handleHome(){
    setWindow("")
    setSignal("")
    setSetting("")
    setLogout("")
    setHome("bg-white text-blue-950 rounded-l-lg")
  }

  function handleWindow(){
    setHome("")
    setSignal("")
    setSetting("")
    setLogout("")
    setWindow("bg-white text-blue-950 rounded-l-lg")
  }

  function handleSignal(){
    setHome("")
    setSetting("")
    setWindow("")
    setLogout("")
    setSignal("bg-white text-blue-950 rounded-l-lg")
  }

  function handleSetting(){
    setHome("")
    setSignal("")
    setWindow("")
    setLogout("")
    setSetting("bg-white text-blue-950 rounded-l-lg")
  }
  function handleLogout(){
    setHome("")
    setSignal("")
    setWindow("")
    setSetting("")
    setLogout("bg-white text-blue-950 rounded-l-lg")
  }

  return (
    <div className="flex flex-col justify-between  h-4/6 mt-14">
      <div className="flex flex-col justify-evenly h-2/5">
        <HomeOutlinedIcon className={home} fontSize="large" onClick={handleHome}/>
        <WindowIcon className={window} fontSize="large" onClick={handleWindow}/>
        <SignalCellularAltIcon className={signal} fontSize="large" onClick={handleSignal} />
        <SettingsOutlinedIcon className={setting} fontSize="large" onClick={handleSetting} />
      </div>
      <div>
        <LogoutIcon className={logout} fontSize="large" onClick={handleLogout}/>
      </div>
    </div>
  );
}

export default Navbar;
