import { z } from "zod";
import { patterns } from "../../constants";

export const schema = z.object({
	name: z.string().min(1, { message: "The name is required!" }),
	email: z
		.string()
		.min(1, { message: "The email isn't less than 1 character!" })
		.refine((text) => patterns.email.test(text), {
			message: "The email is invalid!",
		}),
	states: z.array(z.string()).min(1).max(2),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
	email: "",
	name: "",
	states: [],
};
