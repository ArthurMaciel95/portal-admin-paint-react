import dayjs from 'dayjs';

export const formatDate = (date) => {
    if (!date) return undefined;
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
}

export const formatCpf = (cpf) => {
    if (!cpf) return undefined;
    const regExp = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
    if (!cpf.test(cpf)) return 'CPF invalid'
    return cpf.replace(cpf, regExp)
}
