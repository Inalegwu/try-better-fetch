import { createFetch, createSchema } from "@better-fetch/fetch";
import { Env } from "@env";
import z from "zod";

const todoOutput = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  isCompleted: z.boolean(),
});

const todoInput = z.object({
  id: z.string(),
});

const schema = createSchema({
  "/todos": {
    output: todoOutput,
  },
  "/todo": {
    input: todoInput,
    output: todoOutput,
  },
});

const $fetch = createFetch({
  baseURL: Env.EXPO_PUBLIC_API_URL,
  schema,
  retry: {
    type: "exponential",
    attempts: 3,
    baseDelay: 2500,
    maxDelay: 5000,
  },
});

export default $fetch;
