let customers = [
    {
      id: 1,
      name: "John Smith",
      email: "johnsmith@example.com",
    },
  ];
  
  let orders = [{ order: "mobile", customerId: 1, creationDate: "2022-02-02" }];
  
  function getCustomer(id) {
    const customer = customers.find((x) => (x.id = id));
    return new Promise((resolve, _reject) => {
      resolve(customer);
    });
  }
  
  function getOrder(email) {
    const customer = customers.find((x) => (x.email = email));
    const order = orders.find((x) => (x.customerId = customer.id));
    return new Promise((resolve, _reject) => {
      resolve(order);
    });
  }
  
  const customer = getCustomer(1)
  .then(customer => console.log(customer))
  
  const order = getOrder("johnsmith@example.com")
  .then(order => console.log(order))