// mockData.ts
import { Expense } from "@/types/Expense";

export const expensesMock: Expense[] = [
  {
    expense_id: "638e84f5-d594-4b61-ab79-e8e9f61fc259",
    amount: 10,
    is_third_party: true,
    createdAt: "2024-06-29T22:46:41.000Z",
    status: false,
    credit_card: {
      card_id: "51c7127d-5977-422c-ac09-a8f9a4d02a73",
      bank_name: "PicPay",
      last_four_digits: "1234",
    },
    category: {
      category_id: 2,
      category_name: "Transporte",
    },
    third_party: {
      third_party_id: "cde6f0cb-b1ca-4df3-b764-11b7e182ca19",
      third_party_name: "Mãe",
    },
  },
  {
    expense_id: "86a64fdd-0211-4cd3-97b1-c6887df458b9",
    amount: 10,
    is_third_party: false,
    createdAt: "2024-08-30T19:32:27.000Z",
    status: false,
    credit_card: {
      card_id: "51c7127d-5977-422c-ac09-a8f9a4d02a73",
      bank_name: "PicPay",
      last_four_digits: "1234",
    },
    category: {
      category_id: 1,
      category_name: "Alimentação",
    },
    third_party: null,
  },
  {
    expense_id: "8a1d9840-f4e7-4477-bb79-7039c77531d4",
    amount: 20,
    is_third_party: false,
    createdAt: "2024-09-16T16:53:00.000Z",
    status: false,
    credit_card: {
      card_id: "43a13b31-2b68-4faf-939c-86f45c82d959",
      bank_name: "Banco do Brasil",
      last_four_digits: "1234",
    },
    category: {
      category_id: 1,
      category_name: "Alimentação",
    },
    third_party: null,
  },
  {
    expense_id: "926a18f4-c856-4243-83ae-84e7c4017646",
    amount: 200,
    is_third_party: false,
    createdAt: "2024-08-30T20:18:09.000Z",
    status: false,
    credit_card: {
      card_id: "51c7127d-5977-422c-ac09-a8f9a4d02a73",
      bank_name: "PicPay",
      last_four_digits: "1234",
    },
    category: {
      category_id: 1,
      category_name: "Alimentação",
    },
    third_party: null,
  },
  {
    expense_id: "bb0389e1-9172-45a5-8817-82f254c0bcfa",
    amount: 200,
    is_third_party: true,
    createdAt: "2024-09-16T19:40:09.000Z",
    status: false,
    credit_card: {
      card_id: "43a13b31-2b68-4faf-939c-86f45c82d959",
      bank_name: "Banco do Brasil",
      last_four_digits: "1234",
    },
    category: {
      category_id: 1,
      category_name: "Alimentação",
    },
    third_party: {
      third_party_id: "cde6f0cb-b1ca-4df3-b764-11b7e182ca19",
      third_party_name: "Mãe",
    },
  },
  {
    expense_id: "d3a8e3f0-1e2f-4e55-b5eb-11348f760739",
    amount: 150,
    is_third_party: false,
    createdAt: "2024-09-17T14:20:10.000Z",
    status: true,
    credit_card: {
      card_id: "51c7127d-5977-422c-ac09-a8f9a4d02a73",
      bank_name: "PicPay",
      last_four_digits: "1234",
    },
    category: {
      category_id: 3,
      category_name: "Compras",
    },
    third_party: null,
  },
  {
    expense_id: "e1b25c0a-cb3d-4e61-94a3-7586c412e3c7",
    amount: 50,
    is_third_party: false,
    createdAt: "2024-09-18T11:05:45.000Z",
    status: true,
    credit_card: {
      card_id: "43a13b31-2b68-4faf-939c-86f45c82d959",
      bank_name: "Banco do Brasil",
      last_four_digits: "1234",
    },
    category: {
      category_id: 4,
      category_name: "Lazer",
    },
    third_party: null,
  },
  {
    expense_id: "f2c8931d-4169-4b21-9e92-6c3a8e78976e",
    amount: 75,
    is_third_party: true,
    createdAt: "2024-09-18T18:15:30.000Z",
    status: false,
    credit_card: {
      card_id: "54d0e1cd-46bd-4afe-9acc-5dad4b85e7b1",
      bank_name: "Visa",
      last_four_digits: "9090",
    },
    category: {
      category_id: 5,
      category_name: "Saúde",
    },
    third_party: {
      third_party_id: "a6d7e90b-4f4e-4b68-8d6a-8178e1234b56",
      third_party_name: "Amigo",
    },
  },
];
