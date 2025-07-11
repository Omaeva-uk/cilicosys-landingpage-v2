import React from 'react'

const SectionTag = ({text}) => {
  return (
    <div>
      {/* <div className='bg-primaryLight max-w-fit text-primary py-3 px-5'>{text}</div> */}
      <div className='text-primary max-w-fit uppercase tracking-wide'>{text}</div>
    </div>
  )
}

export default SectionTag;