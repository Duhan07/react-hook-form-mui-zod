import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { type Schema, defaultValues, schema } from "../types/schema";
import { Users } from "./Users";

export function UsersProvier() {
	const methods = useForm<Schema>({
		mode: "all",
		resolver: zodResolver(schema),
		defaultValues
	});

	return (
		<FormProvider {...methods}>
			<Users />
		</FormProvider>
	);
}
