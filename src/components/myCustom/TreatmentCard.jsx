import React from 'react'
import Image from 'next/image'

const TreatmentCard = ({image,imageAlt , label, title, description}  ) => {
  return (
    <div className='my-5'>
                    <div className="relative min-h-80 min-w-48 rounded-xl">
                      <Image
                        className="rounded-xl static"
                        src={image} 
                        alt={imageAlt}
                        fill={true}
                        style={{objectFit: "cover"}}
                      />
                      <p className='absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg'>{label}</p>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-bold">{title}</h3>
                      <p className="mt-2 text-sm">{description}</p>
                    </div>
                  </div>
  )
}

export default TreatmentCard;