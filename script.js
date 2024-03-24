const nav = document.querySelector(".navDiv")
const hamburgerNav = document.querySelector(".hamburger-nav")
const fecharNav = document.querySelector(".fechar-nav")
const hamburgerLinks = document.querySelector(".hamburger-links")
const fecharLinks = document.querySelector(".fechar-links")
const links = document.querySelector(".navLinks")
const tecIcons = document.querySelector(".tec-icons")
const texto = document.querySelector(".tec-text p")

function cliqueiNoMenu() {
    nav.style.left = "0%"
    hamburgerNav.style.display = "none"
    fecharNav.style.display = "block"
    links.style.right = "-125%"
    fecharLinks.style.display = "none"
    hamburgerLinks.style.display = "block"
}

function cliqueiNoFechar() {
    nav.style.left = "-125%"
    fecharNav.style.display = "none"
    hamburgerNav.style.display = "block"

}

function cliqueiNoMenuLinks () {
    links.style.right = "0%"
    hamburgerLinks.style.display = "none"
    fecharLinks.style.display = "block"
    nav.style.left = "-125%"
    fecharNav.style.display = "none"
    hamburgerNav.style.display = "block"
}

function cliqueiNoFecharLinks () {
    links.style.right = "-125%"
    fecharLinks.style.display = "none"
    hamburgerLinks.style.display = "block"
}

function html() {
    texto.textContent = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo."
    tecIcons.style.border = "2px solid #f16529"
    texto.style.border = "2px solid #f16529"
}

function css() {
    texto.textContent = "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos."
    tecIcons.style.border = "2px solid #3E9DD7"
    texto.style.border = "2px solid #3E9DD7"
}

function js() {
    texto.textContent = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
    tecIcons.style.border = "2px solid #FFC44D"
    texto.style.border = "2px solid #FFC44D"
}