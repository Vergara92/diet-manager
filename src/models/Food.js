class Food {
  constructor (data) {
    this.name = data.name
    this.kcal = Number(data.kcal)
    this.hydrates = Number(data.hydrates)
    this.proteins = Number(data.proteins)
    this.fats = Number(data.fats)
    this.select = data.unity
  }

  getObject () {
    const object = {
      name: this.name,
      kcal: this.kcal,
      hydrates: this.hydrates,
      proteins: this.proteins,
      fats: this.fats,
      select: this.select
    }

    return object
  }
}

export default Food
