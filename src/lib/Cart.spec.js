import Cart from "./Cart";

describe("Cart test", () => {
  let cart;

  let product = {
    title: "Nike shoes",
    price: 45054,
  };

  let product2 = {
    title: "Adidas shoes",
    price: 55060,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe("getTotal()", () => {
    it("should return 0 when getTotal() is executed in a newly created instance", () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it("should multiply the quantity of products by the price and return the total", () => {
      const itemProduct = {
        product,
        quantity: 2, // total 90108
      };

      cart.add(itemProduct);

      expect(cart.getTotal()).toEqual(90108);
    });

    it("should ensure no more than on prodcut exists at a time", () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product,
        quantity: 2,
      });

      expect(cart.getTotal()).toEqual(90108);
    });

    it("should update total when a product gets indluded and then removed", () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(55060);
    });
  });

  describe("checkout()", () => {
    it("should return an object with the total price and the list of product item", () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 2,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it("should return an object with the total price and the list of product item when sumary() is called", () => {
      cart.add({
        product,
        quantity: 3,
      });
      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.sumary()).toMatchSnapshot();
      expect(cart.getTotal()).toBeGreaterThan(0);
    });

    it("should return getTotal equals 0 after checkout() to have been called", () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.checkout();

      expect(cart.getTotal()).toEqual(0);
    });
  });
});
