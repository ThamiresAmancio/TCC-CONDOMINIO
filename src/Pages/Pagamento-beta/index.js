import { useEffect, useRef, useState } from "react";

function PagamentoBeta() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  const product = {
    price: 850.0,
    description: "Mensalidade do Condomínio",
  };

  useEffect(() => {
    const script = document.createElement("script");
    const id =
      "ATNknUkD8XeNM9M2nmGcvhOwW9KRd2e-i1vaiUeUQWD51NA2GVEHhBRnhKGGuvXvycC86YXlnEhBzVao";
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;

    script.addEventListener("load", () => setLoaded(true));

    document.body.appendChild(script);

    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: "BRL",
                      value: product.price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();

                setPaid(true);

                console.log(order)
            },
          })
          .render(paypalRef);
      });
    }
  });

  return (
    <>
      {paid ? (
        <div>
          <h1>Obrigado por estar mais um mês morando com a gente! ❤🏢</h1>
        </div>
      ) : (
        <div>
          <h1>
            {product.description} por R${product.price}
          </h1>
          <div ref={v => (paypalRef = v)} />
        </div>
      )}
    </>
  );
}

export default PagamentoBeta;
