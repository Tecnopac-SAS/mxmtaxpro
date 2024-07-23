"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const FormSchema = z.object({
  year: z
    .string({
      required_error: "Por favor selecciona un año fiscal para mostrar",
    })
    .min(1, "Debes seleccionar un año fiscal"),
});

export function FiscalYearForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card className="mx-auto max-w-[363px] flex flex-col justify-center items-center border-0">
      <CardHeader>
        <CardTitle>
          Seleccione el año fiscal que desea <br /> consultar
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Año fiscal</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2019">Año - 2019</SelectItem>
                    <SelectItem value="2020">Año - 2020</SelectItem>
                    <SelectItem value="2021">Año - 2021</SelectItem>
                    <SelectItem value="2022">Año - 2022</SelectItem>
                    <SelectItem value="2023">Año - 2023</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-redp text-white rounded-md flex justify-center hover:bg-red-500"
          >
            Consultar
          </Button>
        </form>
      </Form>
    </Card>
  );
}
