
```dataviewjs

dv.span("**Devocional**")

const calendarData = {
	colors: { // (optional) defaults to green
		blue: ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
		green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
		red: ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
		orange: ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
		pink: ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
		orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
	},
	showCurrentDayBorder: true, // (optional) defaults to true
	defaultEntryIntensity: 4, // (optional) defaults to 4
	intensityScaleStart: 10, // (optional) defaults to lowest value passed to entries.intensity
	intensityScaleEnd: 100, // (optional) defaults to highest value passed to entries.intensity
	entries: [], // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"Devocional"').where(p => p.writing)) {

	calendarData.entries.push({
		date: page.file.name,
		intensity: 4,
		content: "🔗"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
### 2023 Concluir 4 cursos

```text-progress-bar
RocketSeat: Node.js: 11/182
English in Brazil: 0/0
Curso de Figma: 0/0
Curso dev: 0/0
React Avançado: 0/0
Testes em Javascript: 0/0
Whatsapp Marketing: 0/0

transition:📖
fill:📘
empty:📕
length:10
```

### 2023 Ler 12 livros

```text-progress-bar
Lidere em Tempos Difíceis: 142/142
Cinco Votos: 41/41
Ultra Aprendizado: 184/308
Eloquent Javascript: 0/0
Como fazer amigos e Influenciar Pessoas: 0/0
Craking the Coding Interview: 0/0
Responsabilidade Extrema: 0/0
Javascript: The Definitive Guide: 0/0
Enviesados: 0/0

transition:📖
fill:📘
empty:📕
length:10
```
### 2023 Séries

```text-progress-bar
Boruto: 0/142

transition:📖
fill:📘
empty:📕
length:10
```
