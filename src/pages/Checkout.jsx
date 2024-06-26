import React, { useState, useContext } from "react";
import FooterMyAccount from "../components/Footers/FooterMyAccount";
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";
import { createOrderService } from "../services/OrderService";
import { CartContext } from "../components/Cart/CartContext";

export const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos requeridos
    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "address",
      "state",
      "city",
      "zipCode",
      "phoneNumber",
      "email",
    ];
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "Este campo es requerido";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const orderData = {
      id_user: datosUsuario.user.id,
      products: cartItems.map((item) => ({
        id_product: item.id,
        quantity: item.quantity,
      })),
      total_price: total,
      first_name: formData.firstName,
      last_name: formData.lastName,
      company_name: formData.companyName,
      country: formData.country,
      address: formData.address,
      state: formData.state,
      city: formData.city,
      zip_code: formData.zipCode,
      phone_number: formData.phoneNumber,
      email: formData.email,
    };

    try {
      const createdOrder = await createOrderService(orderData);
      setMessage("Orden creada correctamente.!");
      setMessageType("success");
      console.log("Order created successfully:", createdOrder);

      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        address: "",
        state: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
        email: "",
      });

      // Vaciar el carrito
      clearCart();
    } catch (error) {
      setMessage("Error al crear la orden. " + error.message);
      setMessageType("error");
      console.error("Error creating order:", error.message);
    }
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 5000);
  };

  return (
    <div>
      <section className="banner-page d-flex align-items-center justify-content-center">
        <div>
          <img src={imagenes.logoSinFond} alt="logo ecommerce" />
          <h1>Checkout</h1>
          <div className="d-flex justify-content-center">
            <Link to="/">Home </Link> /<p> Checkout</p>
          </div>
        </div>
      </section>
      <div className="row container-intern">
        <div className="col-md-6">
          <div className="form-section-checkout">
            <h1 className="h3 text-start">Checkout</h1>
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-between">
                <div className="form-group col-md-5 text-start mb-4">
                  <label htmlFor="firstName">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-danger">{errors.firstName}</p>
                  )}
                </div>
                <div className="form-group col-md-5 text-start mb-2">
                  <label htmlFor="lastName">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-danger">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="companyName">
                  Nombre de la Empresa (Opcional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Nombre de la empresa"
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="country">País</label>
                <select
                  id="country"
                  className="form-control custom-select-icon"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Elige un país...
                  </option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="mx">Mexico</option>
                  <option value="gb">United Kingdom</option>
                  <option value="co">Colombia</option>
                </select>
                {errors.country && (
                  <p className="text-danger">{errors.country}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {errors.address && (
                  <p className="text-danger">{errors.address}</p>
                )}
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="state">Departamento</label>
                <select
                  id="state"
                  className="form-control custom-select-icon"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Elige un Departamento...
                  </option>
                  <option value="cun">Cundinamarca</option>
                  <option value="boj">Boyaca</option>
                  <option value="ant">Antioquia</option>
                  <option value="atl">Atlántico</option>
                  <option value="cal">Caldas</option>
                </select>
                {errors.state && <p className="text-danger">{errors.state}</p>}
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Eje. New York"
                  required
                />
                {errors.city && <p className="text-danger">{errors.city}</p>}
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
                {errors.zipCode && (
                  <p className="text-danger">{errors.zipCode}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Teléfono / Celular</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-danger">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <button className="boton-card mt-1" type="submit">
                Finalizar Compra
              </button>
            </form>
          </div>
          {message && (
            <div className={`alert alert-${messageType}`} role="alert">
              {message}
            </div>
          )}
        </div>
        <div className="col-md-6 sticky-sidebar">
          <div className="order-summary mb-4">
            <div className="d-flex justify-content-between">
              <span className="fw-bold fs-5">Producto</span>
              <span className="fw-bold fs-5">Subtotal</span>
            </div>
            <div className="scroll-product">
              {cartItems.map((item, index) => (
                <div key={index} className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                    <span>{item.name}</span>
                    <p>x{item.quantity}</p>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr />
            <div className="d-flex justify-content-between font-weight-bold">
              <span className="fw-bold fs-4">Total</span>
              <span className="fs-4 fw-semibold color-total">
                ${total.toFixed(2)}
              </span>
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
          </div>
        </div>
      </div>
      <FooterMyAccount />
    </div>
  );
};

export default Checkout;
