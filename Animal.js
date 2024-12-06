class Animal{
    #age
    constructor(name, food, height, canReproduce){
        this.name = name;
        this.food = food;
        this.canReproduce = canReproduce;
        this.height = height;
        this.#age = 20
    }
    //Tell don't ask
    isAdult(){
        return this.#age > 22
    }
}
export default Animal;