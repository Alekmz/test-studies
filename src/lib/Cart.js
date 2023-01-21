import find from "lodash/find";
import remove from "lodash/remove";

export default class Cart {
  items = [];

  add(item) {
    const itemToFindOrRemove = { product: item.product };
    if (find(this.items, itemToFindOrRemove)) {
      remove(this.items, itemToFindOrRemove);
    }
    this.items.push(item);
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  sumary() {
    const total = this.getTotal();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const { total, items } = this.sumary();

    this.items = [];
    return {
      total,
      items,
    };
  }
}
