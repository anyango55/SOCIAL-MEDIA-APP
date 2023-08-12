// import React from 'react'
import "./stories.scss"
// import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  // TEMPORARY DATA
const stories = [
  {
    id: 1,
    name: "John Doe",
    img:"https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336687.jpg?w=360&t=st=1691837029~exp=1691837629~hmac=aea8d30a780487bd1b992a6297a75849fa8119131f4b28549f26785ca37bdbbd"
  },
  {
    id: 2,
    name: "John Doe",
    img:"https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336687.jpg?w=360&t=st=1691837029~exp=1691837629~hmac=aea8d30a780487bd1b992a6297a75849fa8119131f4b28549f26785ca37bdbbd"
  },
  {
    id: 3,
    name: "John Doe",
    img:"https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336687.jpg?w=360&t=st=1691837029~exp=1691837629~hmac=aea8d30a780487bd1b992a6297a75849fa8119131f4b28549f26785ca37bdbbd"
  },
  {
    id: 4,
    name: "John Doe",
    img:"https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336687.jpg?w=360&t=st=1691837029~exp=1691837629~hmac=aea8d30a780487bd1b992a6297a75849fa8119131f4b28549f26785ca37bdbbd"
  },
];

return (
  <div className='stories'>
    {stories.map(story=>(
      <div className='story'>
        <img src={currentUser.profilePic} alt=''/>
          <span>{currentUser.name}</span>
      </div>
    )
      )}
  
  </div>
)
  }


export default Stories
