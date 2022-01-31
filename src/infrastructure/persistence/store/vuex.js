import store from '@/store'
class Store {
  constructor(repository) {
    this.repository = repository
  }
}

export default new Store(store)