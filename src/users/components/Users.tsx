import { Stack, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import type { Schema } from "../types/schema";

export function Users() {
	const {
		register,
		formState: { errors },
	} = useFormContext<Schema>();

	return (
		<Stack sx={{ gap: 2 }}>
			<TextField
				{...register("name")}
				label="Name"
				error={!!errors.name}
				helperText={errors.name?.message}
			/>
			<TextField
				{...register("email")}
				label="Email"
				error={!!errors.email}
				helperText={errors.email?.message}
			/>
			<RHFAutocomplete<Schema>
				name="states"
				label="States"
				options={[
					{ id: "1", label: "California" },
					{ id: "2", label: "Texas" },
					{ id: "3", label: "Miami" },
				]}
			/>
		</Stack>
	);
}
