//npx tailwindcss -i ./input.css -o ./output.css --watch

// DOM FUNCTIONS. ID VIENE DE URL, SUPOUESTA QUERY, 
const locationSearch = location.search
const params = new URLSearchParams(locationSearch)
const id = params.get("id")
const cargador = cargadores.find(cargador=> cargador.id == id)
console.log(cargadores)
const cargadores1 = document.getElementById("cargadores")

if(id==15)
{
Array.from(cargadores).map(cargador=>{
  cargadores1.innerHTML+=`<div 
class="flex flex-col align-center relative  w-full h-fit dark:bg-gradient-to-b from-slate-950 to-black roboto border border-slate-800 shadow-md  rounded-xl p-2 mt-8 ">
<h1 class="text-white text-6xl p-2 border border-white text-center">
  Modelo: ${cargador.titulo}
</h1>
<div class="flex pt-8">
<img src="./img/D_NQ_NP_727230-MLA49925494290_052022-O-removebg-preview.png" alt="" class="rounded-xl"
  width="500" />
<div class="pt-8">
<p class="text-white">Caragador de batería usado en maquinarias de limpieza y autoelevadores.
</p>
<p class="text-white">
Tiene un punto de flote que no permite que estas al dejarlas conectadas se decarguen como ocurre con otros cargadores.
Tiene una recarga automática que detecta el nivel de tu batetía y se activa para mantenerla siempre cargada, con esto se evíta la sulfatación por falta del uso.
Como beneficio podras obtener un buen rendimiento en la batería y a la vez darle una larga vida útil a la misma.
</p>
<p class="text-white">
Cargador de Batería:
${cargador.volt} Volt
${cargador.amp} Amp
Tensión fija.
</p>
<p class="text-white">
Material de fabricción: Metal
Peso: 11.4 Kg
Medidas: ${cargador.medidas}
</p>
<p class="text-white">
Garantía del vendedor: 5 años</p>
</div>
</div>

<div class="mt-3 flex absolute border border-white bottom-0 flex-col text-sm p-3">
  <h3 class="text-white text-xl p-3">Caracteristicas</h3>
  <ul class="flex flex-wrap gap-3">
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
    ${cargador.volt} Volt</li>
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
    ${cargador.amp} Amp</li>
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
      ${cargador.tension}.</li>
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
      Medidas: ${cargador.medidas}</li>
  </ul>
</div>
</div>`
console.log(cargador)
})
}else{
  cargadores1.innerHTML = `
<div 
class="flex flex-col align-center relative  w-full h-screen dark:bg-gradient-to-b from-slate-950 to-black  roboto border border-slate-800 shadow-md  rounded-xl p-2 mt-8 ">
<h1 class="text-white text-6xl p-2 border border-white text-center">
  Modelo: ${cargador.titulo}
</h1>
<div class="flex pt-8">
<img src="./img/D_NQ_NP_727230-MLA49925494290_052022-O-removebg-preview.png" alt="" class="rounded-xl"
  width="500" />
<div class="pt-8">
<p class="text-white">Caragador de batería usado en maquinarias de limpieza y autoelevadores.
</p>
<p class="text-white">
Tiene un punto de flote que no permite que estas al dejarlas conectadas se decarguen como ocurre con otros cargadores.
Tiene una recarga automática que detecta el nivel de tu batetía y se activa para mantenerla siempre cargada, con esto se evíta la sulfatación por falta del uso.
Como beneficio podras obtener un buen rendimiento en la batería y a la vez darle una larga vida útil a la misma.
</p>
<p class="text-white">
Cargador de Batería:
${cargador.volt} Volt
${cargador.amp} Amp
Tensión fija.
</p>
<p class="text-white">
Material de fabricción: Metal
Peso: 11.4 Kg
Medidas: ${cargador.medidas}
</p>
<p class="text-white">
Garantía del vendedor: 5 años</p>
</div>
</div>

<div class="mt-3 flex absolute border border-white bottom-0 flex-col text-sm p-3">
  <h3 class="text-white text-xl p-3">Caracteristicas</h3>
  <ul class="flex flex-wrap gap-3">
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
    ${cargador.volt} Volt</li>
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
    ${cargador.amp} Amp</li>
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
      ${cargador.tension}.</li>
    <li class="border rounded-xl border border-slate-700 text-white w-fit p-1 shadow shadow-md ">
      Medidas: ${cargador.medidas}</li>
  </ul>
</div>
</div>`
}
