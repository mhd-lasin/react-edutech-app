import React from 'react'
import "./Plans.css"
const Plans = () => {
    const pricingData = [
        {
            title: "Regular Member",
            price: "$0",
            duration: "/month",
            color: "#f8f9fa",
            features: [
                "Unlimited access to courses",
                "Customer support",
                "Personal mentor",
                "Standard options",
                "5 Classes per week"
            ]
        },
        {
            title: "Premium Member",
            price: "$100",
            duration: "/month",
            color: "#6f55f2",
            features: [
                "Unlimited access to courses",
                "Customer support",
                "Personal mentor",
                "Standard options",
                "5 Classes per week"
            ]
        },
        {
            title: "Standard Member",
            price: "$10",
            duration: "/month",
            color: "#f8f9fa",
            features: [
                "Unlimited access to courses",
                "Customer support",
                "Personal mentor",
                "Standard options",
                "5 Classes per week"
            ]
        }
    ];
  return (
    <div className="container">
        <div className="pricing_top">
        <h2 className="section_title">
            Premium Pricing plan
        </h2>
        <p>Unlick elite tech with our premium pricing plan and sour ahead of the competition</p>
        </div>
        <div className="pricing_wrapper">
        {pricingData.map((pricingItem,index)=>(
            <div className="pricing_item" key={index}>
                <div className="pricing_card-top" style={{background:pricingItem.color}}>
                    <h2 className="section_title">
                        {pricingItem.price} <span>{pricingItem.duration}</span>
                    </h2>

                </div>
                <div className="services">
                    <ul>
                        {pricingItem.features.map((feature,index)=>(
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <button className='register-btn'>Join</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Plans