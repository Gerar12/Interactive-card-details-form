import { useContext } from "react";
import { FormContext } from "../../Context/ContextApp";

const HeaderCard = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("MiComponente debe estar dentro de un FormProvider");
  }

  const { inputName, inputCard, inputCvv, inputMes, inputYear } = context;

  return (
    <>
      {/* Main Desckop! */}
      <div className="hidden lg:block">
        <div className="imagenDesckop">
          <div className="cardBack-d">
            <div className="flex justify-end  mr-16 mt-26 text-xl">
              <p className="text-white">{inputCvv > 0 ? inputCvv : "000"}</p>
            </div>
          </div>
          <div className="mainFont-d">
            <div className="p-4">
              <img src="./images/card-logo.svg" alt="" width={54} height={30} />
              <p className=" mt-16 text-xl text-gray-200 font-bold separated-text ">
                {inputCard.length > 0 ? inputCard : "0000 0000 0000 0000"}
              </p>
              <div className="flex mt-12 justify-between">
                <p className="text-white  font-extralight text-xl">
                  {inputName.length > 0 ? inputName : "Gerar Arevalo"}
                </p>
                <p className="text-white font-extralight text-xl">
                  {inputMes.length ? inputMes : "00"}/
                  {inputYear > 0 ? inputYear : "0000"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main mobile and tablets */}
      <div className="imagen lg:hidden ">
        <div className="cardBack">
          <div className="flex justify-end  mr-10 mt-16">
            <p className="text-white">{inputCvv > 0 ? inputCvv : "000"}</p>
          </div>
        </div>
        <div className="mainFont">
          <div className="p-4">
            <img src="./images/card-logo.svg" alt="" width={54} height={30} />
            <p className="mt-9 text-gray-200 font-bold separated-text ">
              {inputCard.length > 0 ? inputCard : "0000 0000 0000 0000"}
            </p>
            <div className="flex mt-2 justify-between">
              <p className="text-white  font-extralight">
                {" "}
                {inputName.length > 0 ? inputName : "Gerar Arevalo"}
              </p>
              <p className="text-white font-extralight">
                {" "}
                {inputMes.length ? inputMes : "00"}/
                {inputYear > 0 ? inputYear : "0000"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
