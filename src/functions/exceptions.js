function valueException (answ) {
    if (answ == null) {
        return false
    } else {
        return true
    }
}

function perPageException (qtt, numb) {
    if (qtt != 5 && qtt != 10 && qtt != 30) {
        return false
    } else {
        if (!Number.isInteger(numb) && numb > 0) {
            return true
        } else {
            return false
        }
    

    }
    }


module.exports = {
    valueException,
    perPageException
}