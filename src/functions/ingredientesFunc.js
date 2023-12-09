const Ingrediente = require('../model/ingrediente')
const {exceptions} = require('./functions/exceptions')


module.exports = {
    set: async (info) => {
        if (valueException(info).status) {
                await Ingrediente.create(info)
            return true
        } else {
            return false
        }
    },

    searchId: async (id) => {
        const answ = await Ingrediente.findOne({where: {id: id}})
        if (answ) {
            return {result: true, ingrediente: answ}
        } else {
            return false
        }   
    },

    searchName: async (nome) => {
        const answ = await Ingrediente.findOne({where: {nome: nome.toLowerCase()}})
        if (answ) {
            return {result: true, ingrediente: answ}
        } else {
            return false
        }   
    },

    editPerId: async (id, newIng) => {
        if (valueException(newIng)) {
            await Ingrediente.update(newIng, {where: {id: id}})
            return true
        } else {
            return false
        }
    },
    editPerName: async (nome, newIng) => {
        if (valueException(newIng)) {
            await Ingrediente.update(newIng, {where: {nome: nome.toLowerCase()}})
            return true
        } else {
            return false
        }
    },

    deletePerId: async (id) => {
        await Ingrediente.destroy({where: { id: id }})
        return true
    },
 
    deletePerName: async (nome) => {
        await Ingrediente.destroy({where: { nome: nome.toLowerCase()}})
        return true
    },

}
