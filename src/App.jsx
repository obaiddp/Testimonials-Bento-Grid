import React from 'react'
import TestimonialCard from './components/TestimonialCard'

const testimonials = [
    {
      "image": "/images/image-daniel.jpg",
      "name": "Daniel Clifford",
      "status": "Verified Graduate",
      "message1": "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      "message2": "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
    },
    {
      "image": "/images/image-jonathan.jpg",
      "name": "Jonathan Walters",
      "status": "Verified Graduate",
      "message1": "The team was very supportive and kept me motivated.",
      "message2": "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
    },
    {
      "image": "/images/image-kira.jpg",
      "name": "Kira Whittle",
      "status": "Verified Graduate",
      "message1": "Such a life-changing experience. Highly recommended!", 
      "message2": "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
    },
    {
      "image": "/images/image-jeanette.jpg",
      "name": "Jeanette Harmon",
      "status": "Verified Graduate",
      "message1": "An overall wonderful and rewarding experience.",
      "message2": "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
    },
    {
      "image": "/images/image-patrick.jpg",
      "name": "Patrick Abrams",
      "status": "Verified Graduate",
      "message1": "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      "message2": "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
    }
]


const App = () => {
  return (
    <div className='
        bg-[#F5F5F5]
        min-h-screen
        flex justify-center items-center
        px-15 md:px-65
        py-10
      '>
  
      <div className="grid 
                      grid-cols-1
                      md:grid-cols-4 md:grid-rows-2 gap-8">
          
          <div className="
            md:col-span-2 
            order-1 md:order-none
            bg-[#733FC8] rounded-lg shadow-[8px_8px_15px_rgba(0,0,0,0.5)]">
            <TestimonialCard {...testimonials[0]} isWhite={true}/>
          </div>

          <div className="
            md:col-start-3
            order-2 md:order-none 
            bg-[#49556B] rounded-lg shadow-[8px_8px_15px_rgba(0,0,0,0.5)]">
            <TestimonialCard {...testimonials[1]} isWhite={true}/>
          </div>
          
          <div className="
            md:row-span-2 md:col-start-4 
            order-5 md:order-none
            bg-white rounded-lg shadow-[8px_8px_15px_rgba(0,0,0,0.5)]">
            <TestimonialCard {...testimonials[2]} isWhite={false}/>
          </div>
          
          <div className="
            md:row-start-2 
            order-3 md:order-none
            bg-white rounded-lg shadow-[8px_8px_15px_rgba(0,0,0,0.5)]">
            <TestimonialCard {...testimonials[3]} isWhite={false}/>
          </div>
          
          <div className="
            md:col-span-2 md:row-start-2 
            order-4 md:order-none
            bg-[#191F2D] rounded-lg shadow-[8px_8px_15px_rgba(0,0,0,0.5)]">
            <TestimonialCard {...testimonials[4]} isWhite={true}/>
          </div>

      </div>
      

    </div>
  )
}

export default App