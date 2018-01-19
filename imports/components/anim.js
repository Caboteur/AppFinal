import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation from '../both//animation.json'

const Anim = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }

  return (
    <div>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}

export default Anim
