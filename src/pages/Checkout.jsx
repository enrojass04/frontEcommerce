import React from "react";
import FooterMyAccount from "../components/Footers/FooterMyAccount";
//assets
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <div>
      <section className="banner-page d-flex align-items-center justify-content-center">
        <div>
          <img src={imagenes.logo} alt="logo ecoommerce" />
          <h1>Checkout</h1>
          <div className="d-flex justify-content-center">
            <Link to="/">Home </Link> /<p> Checkout</p>
          </div>
        </div>
      </section>
      <div className="row container-intern">
        <div className="col-md-6">
          <div className="form-section">
            <h1 className="h3 text-start">Checkout</h1>
            <form>
              <div className="d-flex justify-content-between">
                <div className="form-group col-md-5 text-start mb-4">
                  <label for="firstName">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                  ></input>
                </div>
                <div className="form-group col-md-5 text-start mb-2">
                  <label for="lastName">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <label for="address">Nombre de la Empresa (Opcional)</label>
                <input
                  type="text"
                  className="form-control"
                  id="Company"
                  placeholder="Nombre de la empresa"
                ></input>
              </div>
              <div className="form-group col-md-12">
                <label for="country">País</label>
                <select
                  id="country"
                  className="form-control custom-select-icon"
                >
                  <option selected>Elige un país...</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="mx">Mexico</option>
                  <option value="gb">United Kingdom</option>
                  <option value="co">Colombia</option>
                </select>
              </div>
              <div className="form-group">
                <label for="address">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                ></input>
              </div>
              <div className="form-group col-md-12">
                <label for="country">Departamento</label>
                <select
                  id="country"
                  className="form-control custom-select-icon"
                >
                  <option selected>Elige un Departamento...</option>
                  <option value="cun">Cundinamarca</option>
                  <option value="boj">Boyaca</option>
                  <option value="ant">Antioquia</option>
                  <option value="atl">Atlántico</option>
                  <option value="cal">Caldas</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label for="city">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Eje. New York"
                ></input>
              </div>
              <div className="form-group col-md-12">
                <label for="zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                ></input>
              </div>
              <div className="form-group">
                <label for="phone">Telofono / Celular</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                ></input>
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email"></input>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 sticky-sidebar">
          <div className="order-summary mb-4">
            <div className="d-flex justify-content-between">
              <span className="fw-bold fs-5">Producto</span>
              <span className="fw-bold fs-5">Subtotal</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <span>Iphone Xr</span>
                <p>x1</p>
              </div>
              <span>$909.00</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <span>Iphone 15 Pro</span>
                <p>x2</p>
              </div>
              <span>$1005.00</span>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between font-weight-bold">
              <span className="fw-bold fs-4">Total</span>
              <span className="fs-4 fw-semibold color-total">$104.00</span>
            </div>
          </div>
          <div className="payment-method">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="creditCard"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="creditCard">
                Transferencia Bancaria
              </label>
            </div>
            <p className="text-start mt-2">
              Haz tu pago directamente en nuestra cuenta bancaria. Por favor,
              usa tu ID de pedido como referencia de pago. Tu pedido no será
              enviado hasta que los fondos hayan sido acreditados en nuestra
              cuenta.
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paypal"
              />
              <label className="form-check-label" htmlFor="paypal">
                Tarjeta Credito o Debito
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cash"
              />
              <label className="form-check-label" htmlFor="cash">
                PSE
              </label>
            </div>

            <button className="boton-card mt-4">Finalizar Compra</button>
          </div>
        </div>
      </div>
      <section>
        <FooterMyAccount />
      </section>
    </div>
  );
};
