<script lang="ts">
  import {  hrze} from "../hrze_lib/hrze.ts";
  let weight = 70
  let isoniazid_recommend_dose = 150

  $:result = hrze({weight,isoniazid_recommend_dose})
</script>

<main>
  <h1>HRZE</h1>
  <div>
    <p> poids (kg): </p>
    <input  bind:value={weight}/>
  </div>
  <div>
    <p> dose recomondé INH (mg): </p>
    <input  bind:value={isoniazid_recommend_dose}/>
  </div>

  <h2>Resultat: </h2>
  <ul>
    <li> HRZE: {result.hrze_number} cp </li>
    <br>
    <li> Rifampicine: {result.rifampicin_number} cp</li>
    <li> Dose totale de Rifampicine : {result.rifampicin_final_dose} mg</li>
    <br>
    <li> Pyrazinamide: {result.pyrazinamide_number} cp</li>
    <li> Dose totale de Pyrazinamide : {result.pyrazinamide_final_dose} mg</li>
    <br>
    <li> Ethambutol: {result.ethambutol_number} cp</li>
    <li> Dose totale de Ethambutol : {result.ethambutol_final_dose} mg</li>
  </ul>
</main>


  <style>
  ul {
    text-align: left;
    list-style-type: none;
    color: #0000ff;
  }
  * {
    font-size: 1.2rem;
  }
  h1 {
    font-size: 2rem;
  }
</style>
