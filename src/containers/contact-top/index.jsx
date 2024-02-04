import PropTypes from "prop-types";
import clsx from "clsx";
import AddressBox from "@components/address-box";

const ContactTopArea = ({ space, className }) => (
    <div
        className={clsx(
            "rn-contact-top-area bg_color--5",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="section-title mb--30 text-center">
                        <h2 className="title">Contáctanos</h2>
                        <p className="description">
                            Si tienes preguntas o quieres contactarnos, buscanos
                            en Discord, <br /> o llena el formulario de más
                            abajo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="feather-headphones"
                        title="Numero de contacto"
                        phoneNumbers={["+593995701748"]}
                    />
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="feather-mail"
                        title="Nuestro correo electronico"
                        emails={["support@nexonft.com"]}
                    />
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="250"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="feather-map-pin"
                        title="Nuestra ubicación"
                        address="La Cadena de Bloques"
                    />
                </div>
            </div>
        </div>
    </div>
);

ContactTopArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContactTopArea.defaultProps = {
    space: 1,
};

export default ContactTopArea;
