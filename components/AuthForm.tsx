import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordField } from "./PasswordField";
import { Input } from "./ui/input";

interface AuthFormProps {
  schema: any;
  defaultValues: any;
  onSubmit: (data: any) => void;
  fields: Array<{
    name: string;
    type: string;
    placeholder: string;
    label: string;
  }>;
  buttonText: string;
  buttonIcon: React.ReactNode;
}

export const AuthForm = ({
  schema,
  defaultValues,
  onSubmit,
  fields,
  buttonText,
  buttonIcon,
}: AuthFormProps) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field, index) => (
          <FormField
            key={index}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel className="text-gray-300">{field.label}</FormLabel>
                <FormControl>
                  {field.type === "password" ? (
                    <PasswordField
                      field={formField}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <Input
                      {...formField}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  )}
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          {buttonIcon} {buttonText}
        </Button>
      </form>
    </Form>
  );
};
