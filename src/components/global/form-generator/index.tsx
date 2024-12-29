import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  type?: "text" | "email" | "password" | "number";
  inputType: "select" | "input" | "textarea";
  options?: {
    value: string;
    label: string;
    id: string;
  }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
};

export default function FormGenerator({
  errors,
  inputType,
  name,
  placeholder,
  register,
  label,
  lines,
  options,
  type,
}: Props) {
  switch (inputType) {
    case "input":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label ? label : null}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            className="bg-themeBlack border-themeGray text-themeTextGray"
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "select":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`select-${label}`}>
          {label ? label : null}
          <select
            id={`select-${label}`}
            className="w-full bg-transparent border p-3 rounded-lg"
            {...register(name)}
          >
            {options?.length
              ? options.map((option) => (
                  <option
                    value={option.value}
                    key={option.id}
                    className="dark:bg-muted"
                  >
                    {option.label}
                  </option>
                ))
              : null}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label ? label : null}
          <Textarea
            id={`input-${label}`}
            placeholder={placeholder}
            rows={lines}
            className="bg-themeBlack border-themeGray text-themeTextGray"
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    default:
      return <></>;
  }
}
