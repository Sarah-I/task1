let customers = [{
    id: 1,
    name: "John Smith",
    email: "johnsmith@example.com"
  }];
  
  let orders = [
    {order: "mobile",
      customerId: 1,
      creationDate: "2022-02-02",
    }
  ];
  
  function getCustomer(id) {
    const customer = customers.find((x) => (x.id = id));
    console.log("retrieving customer..");
    setTimeout(() => {
      console.log(customer);
    }, 1000);
  }
  
  function getOrder(email) {
    const customer = customers.find((x) => (x.email = email));
    console.log("retrieving order..");
    setTimeout(() => {
        console.log(orders.find((x) => (x.customerId = customer.id)));
      }, 1000);
  }
  
  getCustomer(1);
  getOrder("johnsmith@example.com")
  
  export default {customers, orders}