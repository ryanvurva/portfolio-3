import { observable, computed } from 'mobx'

class Store {
  @observable hue = 226
  @observable saturation = 23
  @observable lightness = 36
  @observable alpha = 1
  @observable drops = []

  @computed
  get color () {
    if (this.alpha < 1) {
      return `hsla(${store.hue}, ${store.saturation}%, ${store.lightness}%, ${store.alpha})`
    } else {
      return `hsl(${store.hue}, ${store.saturation}%, ${store.lightness}%)`
    }
  }
}
const store = new Store()

window.store = store

export default store
