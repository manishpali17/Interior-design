import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "@/lib/action";
import { useFormReset } from "@/lib/hooks";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Contact() {
  const initialState = {
    errors: {},
    message: "",
    timestamp: Date.now(),
    status: "UNSET",
  };
  const { pending } = useFormStatus();
  const [state, dispatch] = useFormState(createContact, initialState);
  const formRef = useFormReset(state);
  useEffect(() => {
    if (state.message) {
      if (state.status === "SUCCESS") {
        toast(state.message);
      }
    }
  });
  return (
    <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-[#333]">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e88e5]">
            Get in Touch
          </h2>
          <p className="max-w-[600px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#ccc]">
            Fill out the form below to schedule a consultation and learn more
            about our interior design services.
          </p>
        </div>
        <form
          id="contact"
          ref={formRef}
          className="space-y-4"
          action={dispatch}
        >
          <div className="grid grid-cols-2 gap-4 ">
            <Input
              type="text"
              placeholder="Name"
              name="fullName"
              className="max-w-lg flex-1 bg-[#f2f2f2] border-[#ddd] dark:bg-[#444] dark:border-[#666] focus:ring-[#1e88e5] focus:border-[#1e88e5]"
              aria-describedby="fullName-error"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              aria-describedby="email-error"
              className="max-w-lg flex-1 bg-[#f2f2f2] border-[#ddd] dark:bg-[#444] dark:border-[#666] focus:ring-[#1e88e5] focus:border-[#1e88e5]"
            />
            <div id="fullName-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.fullName &&
                state?.errors?.fullName.map((error) => (
                  <p className="animate-pulse text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>

            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.email &&
                state?.errors?.email.map((error) => (
                  <p className="animate-pulse text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <Input
            type="text"
            placeholder="Project Description"
            name="description"
            className="max-w-full flex-1 bg-[#f2f2f2] border-[#ddd] dark:bg-[#444] dark:border-[#666] focus:ring-[#1e88e5] focus:border-[#1e88e5]"
            aria-describedby="description-error"
          />
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.description &&
              state?.errors?.description.map((error) => (
                <p className="animate-pulse text-sm text-red-500 " key={error}>
                  {error}
                </p>
              ))}
          </div>
          <Textarea
            placeholder="Additional Details"
            name="additionalDetails"
            className="max-w-full flex-1 bg-[#f2f2f2] border-[#ddd] dark:bg-[#444] dark:border-[#666] focus:ring-[#1e88e5] focus:border-[#1e88e5]"
          />
          <Button
            type="submit"
            disabled={pending}
            className="w-full max-w-full bg-[#1e88e5] text-white hover:bg-[#1565c0] focus:ring-[#1e88e5] dark:bg-[#ccc] dark:text-[#333] dark:hover:bg-[#bbb]"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
