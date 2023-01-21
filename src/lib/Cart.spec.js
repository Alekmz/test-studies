import Cart from "./Cart";

describe("Cart test", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should return 0 when getTotal() is executed in a newly created instance", () => {
    const cart = new Cart();

    expect(cart.getTotal()).toEqual(0);
  });

  it("should multiply the quantity of products by the price and return the total", () => {
    const itemProduct = {
      product: {
        title: "Nike shoes",
        price: 45054,
      },
      quantity: 2, // total 90108
    };

    cart.add(itemProduct);

    expect(cart.getTotal()).toEqual(90108);
  });
});
