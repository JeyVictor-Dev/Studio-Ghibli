function pesquisar() {
    const termoPesquisa = document.getElementById('campo-pesquisa').value;
    if (termoPesquisa.trim() !== '') {
      // Lógica para realizar a pesquisa
      console.log('Pesquisando por:', termoPesquisa);
    }
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada
    if (campoPesquisa.trim() === "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";

    //par cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        tags = dado.tags.toLowerCase()
       //se titulo includes campoPesquisa
       if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href=${dado.trailer} onclick="window.open(this.href, '_blank'); return false;">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.sinopse}
            </p>
                <p class="descricao-meta">${dado.ano}
                </p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `
       }
         //então, faça ....
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um filme do studio ghibli</p>"
    }

    section.innerHTML = resultados
}
