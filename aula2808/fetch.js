function obterDadosUsuario(nomeUsuario){
    const url = `https://api.github.com/users/${nomeUsuario}`
    return fetch(url)
        .then(function(response){
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Erro ao obter dados do usuário. Cheque o nome do usuário")
            }
        })
        .then(function(dados){
            return dados
        })
        .catch(function(erro){
            console.log("Error: " + erro)
        })
}

obterDadosUsuario('maromo71')
    .then(function(usuario){
        exibirDadosDoUsuario(usuario)
    })

function exibirDadosDoUsuario(usuario){
    const tableBody = document.querySelector("#dados-table tbody")

    const row = document.createElement('tr')
    const nomeCell = document.createElement('td')
    const reposCell = document.createElement('td')
    const seguidoresCell = document.createElement('td')

    nomeCell.textContent =  usuario.name
    reposCell.textContent = usuario.public_repos
    seguidoresCell.textContent = usuario.followers

    row.appendChild(nomeCell)
    row.appendChild(reposCell)
    row.appendChild(seguidoresCell)
    
    tableBody.appendChild(row)
}