import { router } from "react-query-kit";

const exampleRouter = router("example", {
  greet: router.mutation({
    mutationFn: async (v: { name: string }) => {
      return `Hello ${v.name}`;
    },
  }),
});

export default exampleRouter;
