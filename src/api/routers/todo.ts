import { router } from "react-query-kit";
import $fetch from "../client";

const todoRouter = router("todo", {
  allTodo: router.query({
    fetcher: async () => {
      const { data, error } = await $fetch("/todos");

      if (error) {
        throw new Error(error.message);
      }

      return { todos: data };
    },
  }),
  todo: router.query({
    fetcher: async (input: { id: string }) => {
      const { data, error } = await $fetch("/todo", {
        body: {
          id: input.id,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      return { todo: data, error };
    },
  }),
});

export default todoRouter;
