"use client";

import Image from "next/image";
import styles from './pokemon.module.css';
import { useState, useEffect } from "react";

export function Pokemon() {
    const [poke, setPoke] = useState("/vercel.svg");
    const [nombre, setNombre] = useState("nombre");
    const [numid, setNumid] = useState("ID");
    const url = "https://pokeapi.co/api/v2/pokemon/100";

    const [type, setType] = useState("type");
    const [height, setHeight] = useState("height");
    const [weight, setWeight] = useState("weight");
    const [abilities, setAbilities] = useState("abilitie");

     const [hp, setHp] = useState("hp");
     const [attack, setAttack] = useState("attack");
     const [Defense, setDefense] = useState("defense");
     const [speed, setSpeed] = useState("speed");



    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPoke(data.sprites.front_default),
                    setNombre(data.species.name),
                    setNumid(data.id),
                    setType(data.types[0].type.name),
                    setHeight(data.height),
                    setWeight(data.weight),
                    setAbilities(data.moves[0,1,2].move.name),
                    setHp(data.stats[0].base_stat),
                    setAttack(data.stats[1].base_stat),
                    setDefense(data.stats[2].base_stat),
                    setSpeed(data.stats[3].base_stat)

            })
    }, []);
    return (
        <div className={styles.principal}>
            <div className={styles.conteiner1}>
                <h1 className={styles.title}>My Pokemon</h1>
                <h1 className={styles.name}>{nombre}</h1>
                <h2 className={styles.id}>#{numid}</h2>
                <Image src={poke} width={325} height={325} />
            </div>

            <div className={styles.container2}>
                <h1 className={styles.title}>About</h1>
                <div className={styles.about}>
                    <h2 className={styles.type}>Type</h2>
                    <h3 className={styles.type2}>{type}</h3>
                    <h2 className={styles.type}>Height</h2>
                    <h3 className={styles.type2}>{height/100}m</h3>
                    <h2 className={styles.type}>Weight</h2>
                    <h3 className={styles.type2}>{weight/100}kg</h3>
                    <h2 className={styles.type}>Abilities</h2>
                    <h3 className={styles.type2}>{[abilities]}</h3>
                </div>
            </div>

            <div className={styles.container3}>
                <h1 className={styles.title}>Stats</h1>
                <div className={styles.about}>
                    <h2 className={styles.type}>Hp</h2>
                    <h3 className={styles.type2}>{hp}</h3>
                    <h2 className={styles.type}>Attack</h2>
                    <h3 className={styles.type2}>{attack}</h3>
                    <h2 className={styles.type}>Deffence</h2>
                    <h3 className={styles.type2}>{Defense}</h3>
                    <h2 className={styles.type}>Speed</h2>
                    <h3 className={styles.type2}>{speed}</h3>
                </div> 
            </div> 
        </div >
    )
}