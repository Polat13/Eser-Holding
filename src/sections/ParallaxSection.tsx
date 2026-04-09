"use client"

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection(){
useEffect(()=>{
gsap.to(".parallax-image",{ y:-120, scrollTrigger:{ trigger:".parallax-section", start:"top bottom", end:"bottom top", scrub:true } })
},[])

return(
<section className="parallax-section w-full h-[600px] relative overflow-hidden">
<img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" className="parallax-image absolute w-full h-[120%] object-cover"/>
<div className="absolute inset-0 bg-black/40 flex items-center">
<div className="container-custom">
<h2 className="text-5xl font-semibold text-white max-w-2xl">
Geleceğe Daha Yakın
</h2>
</div>
</div>
</section>
)
}