import React from 'react'
import Image from 'next/image'

const TreatmentCard = ({image,imageAlt , label, title, description}  ) => {
  return (
    <div className='my-5'>
                    <div className="relative w-full rounded-xl">
                      <Image
                        className="rounded-xl static w-full h-full object-cover"
                        src={image} 
                        alt={imageAlt}
                        // fill={true}
                        style={{objectFit: "cover"}}
                        height={500}
                        width={800}
                      />
                      {
                        label ? <p className='absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg'>{label}</p> : null
                      }
                      {/* <p className='absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg'>{label}</p> */}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-bold">{title}</h3>
                      <p className="mt-2 text-sm">{description}</p>
                    </div>
                  </div>
  )
}

export default TreatmentCard;