const orders = [
  {
    id: 1,
    order_code: "MM0001",
    order_date: "2026-05-07",
    total_amount: 200000,
    user_id: 1,
    user: { id: 1, name: "MovieMate User" },
  },
  {
    id: 2,
    order_code: "MM0002",
    order_date: "2026-05-07",
    total_amount: 430000,
    user_id: 2,
    user: { id: 2, name: "MovieMate Admin" },
  },
];

export const getOrder = async () => {
  return orders;
};

export const getOrderById = async (id) => {
  return orders.find((order) => String(order.id) === String(id)) || orders[0];
};

export const createOrder = async ({ order_code, order_date, total_amount, user_id }) => {
  return {
    id: `local-${Date.now()}`,
    order_code: order_code || `MM${Date.now()}`,
    order_date: order_date || new Date().toISOString().slice(0, 10),
    total_amount: total_amount || 0,
    user_id: user_id || 1,
    user: { id: user_id || 1, name: "MovieMate User" },
  };
};
