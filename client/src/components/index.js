// Our index file. This file imports all of our components, combines them into an item, then exports them. The purpose of this is to allow an external file to import the entire collections folder. 

import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import BGWithCurve from './BGWithCurve/BGWithCurve'
import InfoCard from './InfoCard/InfoCard'
import InfoCardCollection from './InfoCardCollection/InfoCardCollection'
import Testimonial from './Testimonial/Testimonial'

export { Nav, Hero, BGWithCurve, InfoCard, InfoCardCollection, Testimonial }