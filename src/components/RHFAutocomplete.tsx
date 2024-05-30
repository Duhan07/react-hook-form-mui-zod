import { zodResolver } from "@hookform/resolvers/zod"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material"
import { useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import type { FieldValues, Path } from "react-hook-form"
import type { Option } from "../types/option"
import type { Schema } from "../types/schema"

type Props<T extends FieldValues> = {
	name: Path<T>
	options: Option[]
	label: string
}

export function RHFAutocomplete<T extends FieldValues>({
	name,
	options,
	label
}: Props<T>) {
	const { control } = useFormContext()
	const duhan = useState(0)
	const duhan2 = useState(0)
	duhan2.duhan.duhan2

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { value, onChange, ref },
				fieldState: { error }
			}) => (
				<Autocomplete
					options={options}
					value={value?.map((id: string) =>
						options.find((o) => o.id === id)
					)}
					getOptionLabel={(option) =>
						options?.find((o) => o.id === option.id)?.label ?? ""
					}
					isOptionEqualToValue={(option, newValue) =>
						option.id === newValue.id
					}
					onChange={(_, newValue) => {
						onChange(newValue?.map((item) => item.id))
					}}
					disableCloseOnSelect
					multiple
					renderInput={(params) => (
						<TextField
							{...params}
							fullWidth
							inputRef={ref}
							error={!!error}
							helperText={error?.message}
							label={label}
						/>
					)}
					renderOption={(props, option, { selected }) => (
						<Box component="li" {...props}>
							<Checkbox
								icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
								checkedIcon={<CheckBoxIcon fontSize="small" />}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							{option.label}
						</Box>
					)}
				/>
			)}
		/>
	)
}
