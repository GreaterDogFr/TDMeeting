//Todo :cookie de l'entrée dans le site

let searchContainer = document.getElementById("searchContainer")
let filter = document.getElementById("filters")
class personnage {

    constructor(id, pseudo, photo, age, sexe, recherche, departement, description) {
        this.id = id
        this.pseudo = pseudo
        this.photo = photo
        this.age = age
        this.sexe = sexe
        this.recherche = recherche
        this.departement = departement
        this.description = description

    }
}

let personne1 = new personnage('0', 'Timothée Thierry', 'asset/img/timotheeThierry.jpg', '30', 'homme', 'femme', '76', 'en temps voulut')
let personne2 = new personnage('1', 'Thomas Tompson', 'asset/img/thomasThompson.jpg', '40', 'homme', 'femme', '95', 'en temps voulut')
let personne3 = new personnage('2', 'Andrea Piacquadio', 'asset/img/andreaPiacquadio.jpg', '37', 'femme', 'homme', '27', 'en temps voulut')
let personne4 = new personnage('3', 'Ba Tik', 'asset/img/baTik.jpg', '29', 'homme', 'femme', '75', 'en temps voulut')
let personne5 = new personnage('4', 'Danielle Xavier', 'asset/img/danielleXavier.jpg', '25', 'femme', 'homme', '60', 'en temps voulut')
let personne6 = new personnage('5', 'Jay Rane', 'asset/img/JayRane.jpg', '30', 'homme', 'homme', '75', ' en temps voulut')
let personne7 = new personnage('6', 'Tender', 'asset/img/tender.jpg', '38', 'homme', 'homme', '75', ' en temps voulut')
let personne8 = new personnage('7', 'Spencer Selover', 'asset/img/spencerSelover.jpg', '30', 'homme', 'femme', '75', ' en temps voulut')
let personne9 = new personnage('8', 'Lou', 'asset/img/lou.jpg', '37', 'femme', 'homme', '75', ' en temps voulut')
let personne10 = new personnage( '9', 'Celine', 'asset/img/celine.jpg', '32', 'femme', 'homme', '75', ' en temps voulut')
let personne11 = new personnage('10', 'Sara', 'asset/img/sara.jpg', '24', 'femme', 'homme', '75', ' en temps voulut')
let personne12 = new personnage('11', 'Luna', 'asset/img/Luna.jpg', '20', 'femme', 'homme', '75', ' en temps voulut')
let personne13 = new personnage('12', 'marion', 'asset/img/adeleGomes.jpg', '30', 'femme', 'femme', '78', 'en temps voulut')
let personne14 = new personnage('13', 'Amadou', 'asset/img/amadou-Hassan.jpg', '31', 'homme', 'femme', '91', 'en temps voulut')
let personne15 = new personnage('14', 'Clem', 'asset/img/clementBarbosa.jpg', '34', 'homme', 'homme', '27', 'en temps voulut')
let personne16 = new personnage('15', 'Hug', 'asset/img/hugoYang.jpg', '29', 'homme', 'femme', '75', 'en temps voulut')
let personne17 = new personnage('16', 'Adiydoy', 'asset/img/jeanLouisAbdou.jpg', '25', 'homme', 'femme', '80', 'en temps voulut')
let personne18 = new personnage('17', 'Jessica', 'asset/img/jessicaMorvan.jpg', '36', 'femme', 'homme', '75', ' en temps voulut')
let personne19 = new personnage('18', 'kiki', 'asset/img/killianPicard.jpg', '38', 'homme', 'homme', '73', ' en temps voulut')
let personne20 = new personnage('19', 'Geraud', 'asset/img/liliGeraud.jpg', '30', 'homme', 'femme', '75', ' en temps voulut')
let personne21 = new personnage('20', 'Louna', 'asset/img/LounaDaCosta.jpg', '25', 'femme', 'homme', '75', ' en temps voulut')
let personne22 = new personnage('21', 'Yoyo', 'asset/img/yohannLolo.jpg', '32', 'homme', 'femme', '76', ' en temps voulut')
let personne23 = new personnage('22', 'Sam', 'asset/img/samiraPerrin.jpg', '24', 'femme', 'homme', '75', ' en temps voulut')
let personne24 = new personnage('24', 'Mimi', 'asset/img/marliesRiedl.jpg', '26', 'femme', 'homme', '73', ' en temps voulut')

let arrayPersonnes = [personne1, personne2, personne3, personne4, personne5, personne6, personne7, personne8, personne9, personne10, personne11, personne12,
    personne13, personne14, personne15, personne16, personne17, personne18, personne19, personne20, personne21, personne22, personne23, personne24]

let hommes = arrayPersonnes.filter((arrayPersonnes) => arrayPersonnes.sexe == "homme")
let femmes = arrayPersonnes.filter((arrayPersonnes) => arrayPersonnes.sexe == "femme")


function afficherPersonnes(gender) {
    //? On veut afficher tout le monde dans cette fonction
    for (let iteration = 0; iteration < gender.length; iteration++) {
        const newProfile = document.createElement("a")
        newProfile.setAttribute("id", gender[iteration].id)
        newProfile.setAttribute("class", "profileCards d-flex flex-column align-items-center rounded ")
        newProfile.setAttribute("href", "profil.html?index=" + gender[iteration].id)

        //? Afficher nom
        const divNom = document.createElement("div")
        divNom.setAttribute("class", "parentNomCartes w-100 position-relative")
        const nomCartes = document.createElement("p")
        nomCartes.setAttribute("class", "nomCartes w-100 position-absolute start-0")
        nomCartes.innerHTML = gender[iteration].pseudo
        //? Afficher Photo
        const photoCartes = document.createElement("img")
        photoCartes.setAttribute("src", gender[iteration].photo)
        photoCartes.setAttribute("class", "profilepics")
        //? On affiche tout
        searchContainer.appendChild(newProfile)
        newProfile.appendChild(photoCartes)
        newProfile.appendChild(divNom)
        divNom.appendChild(nomCartes)
    }
}

afficherPersonnes(arrayPersonnes)