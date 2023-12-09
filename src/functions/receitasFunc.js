const Receita = require('../model/receita')
const {exceptions} = require('./functions/exceptions')


module.exports = {
    set: async (info) => {
        if (valueException(info).status) {
                await Receita.create(info)
            return true
        } else {
            return false
        }
    },

    searchId: async (id) => {
        const answ = await Receita.findOne({where: {id: id}})
        if (answ) {
            return {result: true, receita: answ}
        } else {
            return false
        }   
    },

    searchName: async (nome) => {
        const answ = await Receita.findOne({where: {nome: nome.toLowerCase()}})
        if (answ) {
            return {result: true, receita: answ}
        } else {
            return false
        }   
    },

    editPerId: async (id, newRcp) => {
        if (valueException(newRcp)) {
            await Receita.update(newRcp, {where: {id: id}})
            return true
        } else {
            return false
        }
    },
    editPerName: async (nome, newRcp) => {
        if (valueException(newRcp)) {
            await Receita.update(newRcp, {where: {nome: nome.toLowerCase()}})
            return true
        } else {
            return false
        }
    },

    deletePerId: async (id) => {
        await Receita.destroy({where: { id: id }})
        return true
    },
 
    deletePerName: async (nome) => {
        await Receita.destroy({where: { nome: nome.toLowerCase()}})
        return true
    },

}
