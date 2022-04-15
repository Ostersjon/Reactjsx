import React from 'react'

function Header() {
  return (
        <div id='header'>

                <div className='ft'>
                <img className='logo' src={require("./logo.png")}  alt=''/>
                <div className='srrr'>
                <i class="fa-solid fa-magnifying-glass fa-customize1"></i>
                <input type={"text"} placeholder={"Search Facebook"} />
                </div>
                </div>

<div className='cntr'>
<div><a href='#1' className='linkz'><i class="fa-solid fa-house fa-customize"></i></a></div>
<div><a href='#2' className='linkz'><i class="fa-solid fa-user-group fa-customize"></i></a></div>
<div><a href='#3' className='linkz'><i class="fa-solid fa-tv fa-customize"></i></a></div>
<div><a href='#4' className='linkz'><i class="fa-solid fa-store fa-customize" ></i></a></div>
<div><a href='#5' className='linkz'><i class="fa-solid fa-users fa-customize"></i></a></div>
</div>


<div className='rt'>
    <div  className="fpp"><img src={require("./pp.jpg")} alt=""/><span>Niccolò</span></div>
    <div className='icon'>
    <div><i class="fa-solid fa-grip fa-customize2"></i></div>
    <div><i class="fa-brands fa-facebook-messenger fa-customize2"></i></div>
    <div><i class="fa-solid fa-bell fa-customize2"></i></div>
    <div><i class="fa-solid fa-caret-down fa-customize2"></i></div>
    </div>
</div>



</div>

  )
}

export default Header