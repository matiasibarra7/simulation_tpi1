import './App.css';
import  { useState } from 'react';

function App() {

  // variables rancias
  const [m, setM] = useState(0);
  const [n, setN] = useState(0);
  const [replicas, setReplicas] = useState(0);
  const [resultadoReplicas, setResultadoReplicas] = useState([])

  let arrayTTRs = []

  function getTTR() {
    // console.log("n vale: ", n,"m vale: ", m)


    //  <<< Inicialización de las variables >>>>

    let t = 0; 
    let tpsa = 0; // proxima llegada de auto
    let control = 0 // controlador del distribucion ciclica

    let tcb = 0 // Tiempo comprometido de la balsa
    let tsc = 0 // Tiempo de liberación de la balsa

    let tsd = 0 // Tiempo de liberación del puente
    let tcp = 0 // Tiempo comprometido del puente


    // tiempos en cada punto
    let time_at_a = 0
    let time_at_b = 0
    let time_at_c = 0
    let time_at_d = 0
    let time_at_e = 0
    let time_at_f = 0
    let time_at_g = 0
    let time_at_h = 0

    // tramos
    let t_ab = 0; 
    let t_bc = 0; 
    let t_bd = 0; 
    let t_df = 0; 
    let t_ce = 0; 
    let t_ec = 0; 
    let t_eg = 0; 
    let t_fg = 0; 
    let t_gh = 0; 

    // tiempo total
    let ttr = 0; 

    //  <<< Fin de Inicialización de las variables >>>>


    // nc representa a los autos
    for (let nc = 1; nc <= 10; nc++) {
  
      // Paso 1
      t = tpsa

      //Paso 2
      let is = generateIS()

      //Paso 3
      tpsa = t + is

      //Paso 4
      time_at_a = t

      //Paso 5
      // nc = nc + 1 (Esto lo hace el contador del for)

      //Paso 6 (Tramo AB -- media = 4 y desv = 0.5)
      t_ab = generateDistNorm(4, 0.5)

      //Paso 7
      time_at_b = time_at_a + t_ab

      //Paso 8
      if (control < m) {

        // Va por la balsa
        balsa_time()

      } else {
        // Paso 8.2.1 VEMOS SI CONTROL NO PASO DE LARGO
        if (control >= (m + n)) {
          // Paso 8.2.1.1
          // Se paso el control, reset y va por balsa
          control = 0

          // Paso 8.2.1.2
          // Va por la balsa
          balsa_time()

        } else {
          // Paso 8.2.2.1
          control++

          // Va por puente
          puente_time()

        }

      }

      // Paso 9 (Tramo GH -- media = 5 y desv = 0.5)
      t_gh = generateDistNorm(5, 0.5)

      // Paso 10 
      time_at_h = time_at_g + t_gh

      // Paso 11
      ttr = ttr + time_at_h - time_at_a


      // console.log(`Este auto tardó: ${time_at_h - time_at_a}`)
      // console.log(`ttr al ${nc} es: ${ttr}`)
    
      
    }

    return ttr

    //FUNCTIONS BALSA  -  PUENTE
    function balsa_time() {
      // Paso 8.1.1 VA POR LA BALSA
      control++
  
      // Diagrama de balsa
      // Paso 8.1.2 (Tramo BC -- media = 3 y desv = 0.4)
      t_bc = generateDistNorm(3, 0.4)
  
      // Paso 8.1.3
      time_at_c = time_at_b + t_bc
  
      // Consulta si hay que esperar para cruzar
      // Paso 8.1.4
      if (time_at_c < tcb) { // Se espera
        tsc = tcb
      } else { // No se espera
        tsc = time_at_c
      }
  
      // Paso 8.1.5 (Tramo CE -- media = 5.5 y desv = 0.6)
      // Ida de la balza
      t_ce = generateDistNorm(5.5, 0.6)
  
      // Paso 8.1.6 (Tramo EC -- media = 5.5 y desv = 0.6)
      // Regreso de la balza
      t_ec = generateDistNorm(4, 0.4)
  
      // Paso 8.1.7 
      time_at_e = tsc + t_ce
  
      // Paso 8.1.8
      tcb = time_at_e + t_ec
  
      // Paso 8.1.9 (Tramo EG -- media = 3 y desv = 0.4)
      t_eg = generateDistNorm(3, 0.4)
  
      // Paso 8.1.10
      time_at_g = time_at_e + t_eg
    } 

    function puente_time() {
      // Paso 8.2.2.2 (Tramo BD -- media = 5 y desv = 0.6)
      t_bd = generateDistNorm(5, 0.6)

      // Paso 8.2.2.3
      time_at_d = time_at_b + t_bd

      // Paso 8.2.2.4 Pregunto si puente ocupado
      if (time_at_d < tcp) { //Espera
        tsd = tcp
      } else { // No espera
        tsd = time_at_d
      }

      // Paso 8.2.2.5 (Tramo DF -- media = 3.5 y desv = 0.55)
      t_df = generateDistNorm(3.5, 0.55)

      // Paso 8.2.2.6
      time_at_f = tsd + t_df

      // Paso 8.2.2.7
      tcp = tsd + t_df

      // Paso 8.2.2.8 (Tramo FG -- media = 3 y desv = 0.6)
      t_fg = generateDistNorm(3, 0.6)

      // Paso 8.2.2.9
      time_at_g = time_at_f + t_fg
    }

    
  }

  function generateDistNorm(media, deviac) {
    let coseno = Math.cos(2 * Math.PI * Math.random())
    let raiz = Math.sqrt(-2 * Math.log10(1 - Math.random()))
    let res = (raiz * coseno) * deviac + media

    return res
  }

  function generateIS() {
    // Media de la distribución exponencia (1/λ)
    const media_distr_exp = 3

    let is = -media_distr_exp * Math.log10(1 - Math.random())
    return is
  }

  function getVariosTTR(amount) {
    arrayTTRs = []
    for (let i = 0; i < amount; i++) {
      arrayTTRs.push(getTTR())
    }
    setResultadoReplicas(arrayTTRs)
    console.log(arrayTTRs)
  }
  


  return (
    <div className="App">
      <header className="App-header">
        Salvanos
        <div>
          <label htmlFor="replicas">Cantidad de replicas: </label>
          <input type="number" name="" id="replicas" value={replicas} onChange={(e) => setReplicas(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="numer_m">m: </label>
          <input type="number" name="" id="numer_m" value={m} onChange={(e) => setM(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="numer_n">n: </label>
          <input type="number" name="" id="numer_n" value={n} onChange={(e) => setN(Number(e.target.value))}/>
        </div>
        <div>
          <div>Calcular</div>
          <div><button onClick={() => getVariosTTR(replicas)}>Calcular</button></div> 
        </div>

        <div>
          {resultadoReplicas.length? 
            resultadoReplicas.map((el, i) => {
              return <div key={el}>Replica {i + 1}: TTR{i + 1} {el}</div>
            })
            :
            <></>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
