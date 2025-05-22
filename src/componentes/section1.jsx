import { useState } from "react";
import '../App.css'
import Icon from "./iconos";

function Section1 ({id}){
    return(
        <>
            <section className="Section1" id={id} >

                <div className="contenedorSobreMi">
                    <h2>Sobre mi</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, esse. Placeat laboriosam nisi blanditiis delectus molestias, accusantium quas possimus cumque dolores! Rerum sint ex reiciendis id totam natus nisi blanditiis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sed labore repellendus harum, culpa minima maiores corporis incidunt aliquam, adipisci eligendi consequuntur? Corrupti facilis incidunt ratione, magni omnis error id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, porro blanditiis? Sint impedit soluta natus perspiciatis recusandae, aspernatur tempore porro assumenda hic eveniet sed, cum, inventore eaque reiciendis laborum corporis!</p>
                </div>

                <div className="contenedorHabilidades">
                    <h2>HABILIDADES</h2>
                    <Icon name="html5" className="iconos"/>
                    <Icon name="css" className="iconos"/>
                    <Icon name="sass" className="iconos"/>
                    <Icon name="js" className="iconos"/>
                    <Icon name="react" className="iconos"/>
                    <Icon name="node"className="iconos"/>
                </div>
            </section>
        </>
    )
}
export default Section1;