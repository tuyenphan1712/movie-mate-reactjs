export const fetchDashboardData = async () => {
  return {
    totalUsers: 2,
    totalMovies: 32,
    totalOrders: 2,
    totalRevenue: 630000,
    recentOrders: [
      {
        id: 1,
        order_code: "MM0001",
        total_amount: 200000,
        order_date: "2026-05-07",
        user: { name: "MovieMate User" },
      },
      {
        id: 2,
        order_code: "MM0002",
        total_amount: 430000,
        order_date: "2026-05-07",
        user: { name: "MovieMate Admin" },
      },
    ],
  };
};
