import React from 'react'
import BarNav from './BarNav'
import { Link } from 'react-router-dom'
import "./styles/Home.css"
function Home() {
  return (
    <div className='bodyHome'>
        <BarNav/>
        <main className="main_welcome">
           <div className="contenu_welcome">
                <div className="text_welcome">
                    <div className="soustitre_welcome">
                        SO YOU WANT TO TRAVEL THROUGH
                    </div>
                    <div className="titre_welcome">
                       SPACE
                    </div>
                    <div className="corps_welcome">
                        Let's be objective; if you want to go into space, you can actually go into real space and not just hover on the edge of it. Well, sit back because we are going to give you a truly extraordinary experience!
                    </div>          
                 </div>
                 <Link to="/destination" className="bouton_lien">
                 <div className="bouton_welcome">
                          EXPLORE
                 </div>
                 </Link>
           </div>
        </main>
    </div>
  )
}

export default Home