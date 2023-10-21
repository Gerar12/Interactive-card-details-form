import { createContext, useState } from "react";

interface IFormContext {
  inputName: string;
  setInputName: (value: string) => void;
  inputCard: string;
  setinputCard: (value: string) => void;
  inputMes: string;
  setInputMes: (value: string) => void;
  inputYear: number;
  setInputYear: (value: number) => void;
  inputCvv: number;
  setInputCvv: (value: number) => void;
  validForm: (e: React.FormEvent<HTMLFormElement>) => void;
  errorName: boolean;
  errorNumberCard: boolean;
  errorMonth: boolean;
  errorYear: boolean;
  errorCvv: boolean;
  payProcess: boolean;
  spiner: boolean;
}

interface FormProviderProps {
  children: React.ReactNode;
}

const FormContext = createContext<IFormContext | undefined>(undefined);

const FormProvider: React.FunctionComponent<FormProviderProps> = ({
  children,
}) => {
  const [inputName, setInputName] = useState("");
  const [inputCard, setinputCard] = useState("");
  const [inputMes, setInputMes] = useState("");
  const [inputYear, setInputYear] = useState(0);
  const [inputCvv, setInputCvv] = useState(0);
  const [errorName, setErrorName] = useState(false);
  const [errorNumberCard, setErrorNumberCard] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [errorCvv, setErrorCvv] = useState(false);
  const [payProcess, setPayProcess] = useState(true);
  const [spiner, setSpiner] = useState(false);

  const validForm = (e: React.FormEvent<HTMLFormElement>) => {
    const cardPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    e.preventDefault();
    console.log("Validando...");
    let isFormValid = true;

    // Función auxiliar para manejar la validación y establecer errores
    const handleValidation = (
      condition: boolean,
      setError: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      if (condition) {
        setError(true);
        isFormValid = false;
      } else {
        setError(false);
      }
    };

    handleValidation(inputName === "", setErrorName);
    handleValidation(!cardPattern.test(inputCard), setErrorNumberCard);
    handleValidation(
      !inputMes.match(/^0[1-9]$|^[1-9]$|^1[0-2]$/),
      setErrorMonth
    );
    handleValidation(isNaN(inputYear) || inputYear <= 0, setErrorYear);
    handleValidation(isNaN(inputCvv) || inputCvv <= 0, setErrorCvv);

    if (isFormValid) {
      console.log("Formulario válido!");
      setSpiner(true);
      console.log(payProcess);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setPayProcess(false);
      }, 3000);
    }
  };

  return (
    <FormContext.Provider
      value={{
        inputName,
        setInputName,
        inputCard,
        setinputCard,
        inputMes,
        setInputMes,
        inputYear,
        setInputYear,
        inputCvv,
        setInputCvv,
        validForm,
        errorName,
        errorNumberCard,
        errorMonth,
        errorYear,
        errorCvv,
        payProcess,
        spiner,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
