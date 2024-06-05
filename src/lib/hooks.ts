import { useRef, useEffect } from "react";
import { State } from "./action";

type FormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

const useFormReset = (formState: State) => {
  const formRef = useRef<HTMLFormElement>(null);
  const prevTimestamp = useRef(formState.timestamp);

  useEffect(() => {
    if (!formRef.current) return;
    if (
      formState.status === "SUCCESS" &&
      formState.timestamp !== prevTimestamp.current
    ) {
      formRef.current.reset();

      prevTimestamp.current = formState.timestamp;
    }
  }, [formState.status, formState.timestamp]);

  return formRef;
};

export { useFormReset };
