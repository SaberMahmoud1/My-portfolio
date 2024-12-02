import React from 'react'
import Botnavitem from './Botnavitem'
import gm from '../Images/gm.png'
import fc from '../Images/fc.png'
import gh from '../Images/gh.png'
import ln from '../Images/ln.png'
export default function Botnav(props) {
    

    return (
        <div className='botnav'>
    
            <div className='botit'>
            <Botnavitem tit1={"E-mail"} img1={gm} sh={true}/>
            <Botnavitem tit2={"Facebook"} img2={fc} sh={false} linka={"https://www.facebook.com/saberm2024/"}/>
            <Botnavitem tit2={"LinkedIn"} img2={ln} sh={false} linka={"https://www.linkedin.com/in/saber-mahmoud-2450b0246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"}/>
            <Botnavitem tit2={"GitHub"} img2={gh} sh={false} linka={"https://github.com/SaberMahmoud1/"}/>
            </div>
        </div>
    )
}
