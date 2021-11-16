export const mascaraCep = (cep) => {
    return cep
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")
}


export const mascaraCel = (cell) => {
    return cell
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1")
}

export const mascaraCpf = (cpf) => {
    return cpf
   .replace(/\D/g, '') 
   .replace(/(\d{3})(\d)/, '$1.$2') 
   .replace(/(\d{3})(\d)/, '$1.$2')
   .replace(/(\d{3})(\d{1,2})/, '$1-$2')
   .replace(/(-\d{2})\d+?$/, '$1') 

}

export const mascaraCnpj = (cnpj) =>{
    return cnpj
    .replace(/\D/g,"")                           //Remove tudo o que não é dígito
    .replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    .replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    .replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
    .replace(/(\d{4})(\d)/,"$1-$2") 
}


export const mascaraRg = (rg) =>{
    return rg
   .replace(/\D/g,"")
   .replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/,'$1.$2.$3-$4');

}