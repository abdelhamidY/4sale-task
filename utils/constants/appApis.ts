export const AppApis = {
  auth: {
    login: "/api/v1/user/login",
    request_verfication: "/api/v1/user/request-verification",
    verify_otp: "/api/v1/user/verify-otp",
  },
  accountant: {
    accountant: "/api/v1/dashboard/accountant",
    invoices: "/api/v1/dashboard/accountant/invoices",
    receipts: "/api/v1/dashboard/accountant/receipts",
    inventory: "/api/v1/dashboard/accountant/inventory",
    graphs: "/api/v1/dashboard/accountant/pl-graph",
  },
};
