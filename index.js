// const padlOrel = true
// const padlOrel = false
const padlOrel = Math.random() < 0.5

const prvekVysledek = document.querySelector(".vysledek")

if (padlOrel) {
    prvekVysledek.content = "Padl Orel"
} else {
    prvekVysledek.content = "Padla panna"
}