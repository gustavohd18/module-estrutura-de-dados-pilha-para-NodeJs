module.exports =  class Pilha {
    constructor(length) {
        this.size = 0
        this.lengthAux = length
        this.structure = new Array()
    }

    push (element) {
        if (this.isParameter) {
            if (this.size === this.lengthAux) {
                return 
            } else {
                this.structure.unshift(element)
                this.size++
            }
        } else {
            this.structure.unshift(element)
            this.size++
        }
    }

    pop () {
        let last = this.structure.shift()
        this.size--
        return last
    }

    isEmpty() {
        return this.size === 0
    }

    isFull() {
        if (this.isParameter) {
            return this.size === this.structure.length
        }
    }

    length() {
        return this.size
    }
    // método que valida caso o tamanho seja passado por parametro
    isParameter() {
        return this.lengthAux !== undefined
    }

    top () {
        if (this.size !== 0) {
            return this.structure[0]
        } else {
            return undefined
        }
    }
    
    show() {
        this.structure.map((element) => {
            console.log(element)
        })
    }
}