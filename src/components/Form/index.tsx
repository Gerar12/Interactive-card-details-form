import { useContext } from "react";
import { FormContext } from "../../Context/ContextApp";
import ClipLoader from "react-spinners/ClipLoader";

const Form = () => {
  function formatCardNumber(value: string): string {
    // Elimina todos los caracteres que no sean dígitos
    const onlyNumbers = value.replace(/\D+/g, "");

    // Divide en grupos de 4 y une con espacios
    return onlyNumbers.match(/.{1,4}/g)?.join(" ") || "";
  }

  const context = useContext(FormContext);

  if (!context) {
    throw new Error("MiComponente debe estar dentro de un FormProvider");
  }

  const {
    setInputName,
    setInputCvv,
    setInputMes,
    setInputYear,
    setinputCard,
    inputCard,
    validForm,
    errorName,
    errorNumberCard,
    errorMonth,
    errorYear,
    errorCvv,
    payProcess,
    spiner,
  } = context;

  return (
    <>
      {!payProcess ? (
        <>
          <div className="lg:mr-96 mb-60 flex flex-col gap-5 justify-center items-center">
            <img
              src="./images/icon-complete.svg"
              className="mt-20"
              width={80}
              height={80}
              alt=""
            />
            <p className="text-2xl text-morado-oscuro ">Thanks you!</p>
            <p>We've added your card detalls</p>
            <button
              type="button"
              className="p-2 mt-2 w-full  bg-morado-oscuro  text-gray-200 rounded-md"
            >
              Confirm
            </button>
          </div>
        </>
      ) : (
        <form
          action=""
          onSubmit={validForm}
          className=" p-5 py-16 w-96 lg:w-1/4 flex flex-col  lg:p-5 lg-py-20  lg:h-96 lg:mr-96 lg:mb-44 lg:gap-10 "
        >
          <div className="flex flex-col mt-5">
            <label
              htmlFor="cardHolderName"
              className="my-2 text-morado-oscuro font-bold"
            >
              CARD HOLDER NAME
            </label>
            <input
              type="text"
              id="cardHolderName"
              maxLength={24}
              name="name"
              placeholder="e.g. Gerar Arevalo"
              className={`p-2 border ${
                errorName ? "border-red-400" : ""
              } rounded-md`}
              onChange={(e) => setInputName(e.target.value)}
            />

            {errorName ? (
              <p className="mt-1   text-red-400">The name is required.</p>
            ) : null}

            <label
              htmlFor="cardNumber"
              className="my-2 text-morado-oscuro font-bold"
            >
              CARD NUMBER
            </label>
            <input
              type="text"
              id="cardNumber"
              maxLength={19}
              placeholder="e.g. 1234 5678 9123 0000"
              className={`p-2 border ${
                errorNumberCard ? "border-red-400" : ""
              } rounded-md`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                const formattedValue = formatCardNumber(value);
                setinputCard(formattedValue);
              }}
              value={inputCard} // Asegúrate de que el valor mostrado sea el valor formateado
            />
            {errorNumberCard ? (
              <p className="mt-1   text-red-400">Number not valid</p>
            ) : null}

            <div className="flex mt-5">
              <div>
                <label
                  htmlFor="expMonth"
                  className="my-2 text-morado-oscuro font-bold"
                >
                  EXP MONTH
                </label>
                <input
                  type="number"
                  id="expMonth"
                  maxLength={2}
                  min="1"
                  max="12"
                  placeholder="MM"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 2) {
                      setInputMes(value);
                    }
                  }}
                  className={`p-1 border ${
                    errorMonth ? "border-red-400" : ""
                  } rounded-md`}
                />
                {errorMonth ? (
                  <p className="mt-1   text-red-400">Month not valid</p>
                ) : null}
              </div>
              <div className="ml-2">
                <label
                  htmlFor="expYear"
                  className="my-2 text-morado-oscuro font-bold"
                >
                  EXP YEAR
                </label>
                <input
                  type="number"
                  id="expYear"
                  maxLength={4}
                  min="2023"
                  max="2040"
                  placeholder="AAAA"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 4) {
                      setInputYear(Number(value));
                    }
                  }}
                  className={`p-1 border ${
                    errorYear ? "border-red-400" : ""
                  } rounded-md`}
                />
                {errorYear ? (
                  <p className="   text-red-400">Year not valid</p>
                ) : null}
              </div>
              <div className="ml-2">
                <label
                  htmlFor="cvv"
                  className="my-2 text-morado-oscuro font-bold"
                >
                  CVV
                </label>
                <input
                  type="number"
                  id="cvv"
                  min="100"
                  max="999"
                  placeholder="CVV"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 3) {
                      setInputCvv(Number(value));
                    }
                  }}
                  className={`p-1 border ${
                    errorCvv ? "border-red-400" : ""
                  } rounded-md`}
                />
                {errorCvv ? (
                  <p className="   text-red-400">CVV not valid</p>
                ) : null}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`p-2 mt-5 text-gray-200 rounded-md ${
              spiner ? "bg-gray-500 cursor-not-allowed" : "bg-morado-oscuro"
            }`}
            disabled={spiner}
          >
            Confirm
          </button>
          {spiner ? (
            <div className="flex justify-center mt-10">
              <ClipLoader />
            </div>
          ) : null}
        </form>
      )}
    </>
  );
};

export default Form;
