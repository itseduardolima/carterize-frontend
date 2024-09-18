import { Card } from "@/types/Card";

export const cardsMock: Card[] = [
  {
    card_id: "43a13b31-2b68-4faf-939c-86f45c82d959",
    bank_name: "Banco do Brasil",
    last_four_digits: "1234",
    card_holder_name: "Eduardo Lima Castro",
    credit_limit: 1000,
    available_limit: 780,
    createdAt: "2024-08-30T20:10:33.000Z",
    updatedAt: "2024-09-16T20:54:51.000Z",
    user: {
      user_id: "29656cf0-c1f5-447a-8167-b9101702edae",
      user_name: "Eduardo Lima",
    },
  },
  {
    card_id: "51c7127d-5977-422c-ac09-a8f9a4d02a73",
    bank_name: "PicPay",
    last_four_digits: "1234",
    card_holder_name: "Eduardo Lima Castro",
    credit_limit: 2000,
    available_limit: 1770,
    createdAt: "2024-08-29T19:46:13.000Z",
    updatedAt: "2024-09-14T01:18:19.000Z",
    user: {
      user_id: "29656cf0-c1f5-447a-8167-b9101702edae",
      user_name: "Eduardo Lima",
    },
  },
  {
    card_id: "54d0e1cd-46bd-4afe-9acc-5dad4b85e7b1",
    bank_name: "Visa",
    last_four_digits: "9090",
    card_holder_name: "Karine",
    credit_limit: 3500,
    available_limit: 3430,
    createdAt: "2024-09-02T06:01:19.000Z",
    updatedAt: "2024-09-02T06:06:19.000Z",
    user: {
      user_id: "29656cf0-c1f5-447a-8167-b9101702edae",
      user_name: "Eduardo Lima",
    },
  },
  {
    card_id: "a6d6eddd-9a4e-4baf-b686-2636733e4fb7",
    bank_name: "Nubank",
    last_four_digits: "7344",
    card_holder_name: "Glaucia dos Santos",
    credit_limit: 2000,
    available_limit: 2000,
    createdAt: "2024-09-14T01:05:09.000Z",
    updatedAt: "2024-09-14T01:05:09.000Z",
    user: {
      user_id: "29656cf0-c1f5-447a-8167-b9101702edae",
      user_name: "Eduardo Lima",
    },
  },
];
