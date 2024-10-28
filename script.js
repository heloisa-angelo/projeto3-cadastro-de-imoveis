let property = []
let propertyData = {

}


do {
    const menu = prompt(`Opções:
     Quantiadade de imóveis cadastrados: ${property.length}
    1. Salvar novo imóvel
    2. Listar imóveis salvos
    3. Sair
    `)
    switch(menu){
        case '1':
            let newProperty = prompt('Adicione um novo imóvel:')
            property.push(newProperty)

        case '2':
            
           
    }
}while(menu !== 3)
