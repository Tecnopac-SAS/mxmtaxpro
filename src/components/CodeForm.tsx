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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import { Card, CardFooter } from "./ui/card";
import { NavLink } from "react-router-dom";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Tu código debe tener 4 caracteres",
  }),
});

export default function Code() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
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
    <Card className="mx-auto max-w-lg border-0 pt-40">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 m-auto"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Escribe el codigo</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={4}
                    {...field}
                  >
                    <InputOTPGroup className="m-auto">
                      <InputOTPSlot index={0} />
                      <InputOTPSeparator />
                      <InputOTPSlot index={1} />
                      <InputOTPSeparator />
                      <InputOTPSlot index={2} />
                      <InputOTPSeparator />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="text-black">
                  Hemos enviado un código de 4 dígitos al número de telefono
                  registrado
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-redp text-white rounded-full flex justify-center hover:bg-red-500"
          >
            <NavLink to="/client">Continuar</NavLink>
          </Button>
        </form>
      </Form>
      <CardFooter className="text-sm flex flex-col mt-6">
        Quiero que el código me llegue al correo electrónico
        <a
          href="#"
          className="text-red-700 border-b hover:border-b-red-700 pl-2 mt-2 "
        >
          Cambiar aquí
        </a>
      </CardFooter>
    </Card>
  );
}
