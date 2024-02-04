import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Wallet from "@components/wallet";
import Anchor from "@ui/anchor";

const ConnectArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-connect-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g mb--50 mb_md--30 mb_sm--30 align-items-center">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <h3 className="connect-title">Conecta tu billetera</h3>
                    <p className="connect-td">
                        Conecta una de tus siguientes billeteras o crea una
                        nueva billetera. También es possible pagar con tarjeta
                        de credito/debito para crear una nueva billetera.{" "}
                        <Anchor path="/collection">
                            ¿Qué es una billetera?
                        </Anchor>
                    </p>
                </div>
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <p className="wallet-bootm-disc">
                        No guardamos tus claves privadas y no podemos acceder
                        tus divisas sin tu permiso y confirmacion.
                    </p>
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="500"
                >
                    <div className="connect-thumbnail">
                        <div className="left-image">
                            <Image
                                src="/images/connect/connect-01.jpg"
                                alt="Nft_Profile"
                                width={670}
                                height={576}
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-5">
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Bitcollect"
                                description="La billetera de la plataforma Bitconnect"
                                path="/collection"
                                icon="feather-cast"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="GrashCash"
                                description="La mejor opción para pagar con tu tarjeta de finanzas tradicionales"
                                path="/collection"
                                icon="feather-box"
                                color="purple"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Import"
                                description="Importa una billetera que no está en la lista"
                                path="/collection"
                                icon="feather-award"
                                color="pink"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="TiOne"
                                description="Una billetera más tradicional"
                                path="/collection"
                                icon="feather-briefcase"
                                color="yellow"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Bkashes"
                                description="Transfiera tus nft's de manera sencilla"
                                path="/collection"
                                icon="feather-command"
                                color="green"
                            />
                        </div>
                        <div
                            className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="Pyynle"
                                description="Billetera de la plataforma Pyynle"
                                path="/collection"
                                icon="feather-cpu"
                                color="blue"
                            />
                        </div>
                        <div
                            className="col-12"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-duration="800"
                        >
                            <Wallet
                                title="YesCash"
                                description="Compra NFT's de manera segura y rápida"
                                path="/collection"
                                icon="feather-gitlab"
                                color="red"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ConnectArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
ConnectArea.defaultProps = {
    space: 1,
};

export default ConnectArea;
