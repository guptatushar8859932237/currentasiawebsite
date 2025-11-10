
import React, { useEffect } from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import image from '../../assestss/terms-banner.jpg'
export default function Privacypolicy() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <Topbar />
            <Navbar />
            <>
                <section
                    className="bannerBg"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Privacy Policies</h1>
                                <h5>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. illo quae
                                    vero{" "}
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentTerms">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                              
                                <h4>Introduction</h4>
                                <ul>
                                    <li>
                                        This privacy policy applies when you visit or use our website, and
                                        other service, that refer or link to this privacy policy (a
                                        "Service"). This privacy policy may be supplemented by additional
                                        privacy statements, terms or notices provided to you.
                                    </li>
                                    <li>
                                        1.2 Asia Direct processes personal data for a variety of purposes.
                                        We collect this personal data directly from you, for example, if
                                        you engage us to prepare your tax return, if you visit
                                        www.AsiaDirect.africa (our Site), if you submit your contact
                                        details to receive marketing communications from us.
                                        Alternatively, we process your personal data in the context of
                                        providing professional services to your employer or service
                                        provider. This privacy notice is intended to cover all of the
                                        above-mentioned scenarios.
                                    </li>
                                </ul>
                                <h4>Data Covered</h4>
                                <ul>
                                    <li>
                                        {" "}
                                        In order to provide you with the proper services, you may be
                                        required to provide Asia Direct with Personal Information.
                                        Personal Information is information that identifies you as an
                                        individual including but not limited to your name and contact
                                        details, an identification number, location data or an online
                                        identifier. It also refers to physical, physiological, genetic,
                                        mental, economic, cultural or social identity of an individual
                                    </li>
                                    <li>
                                        It also includes special categories of personal data (special
                                        category data) from which we can determine or infer an
                                        individual's
                                    </li>
                                    <li>
                                        {" "}
                                        Racial or ethnic origin; Religious or philosophical beliefs;
                                        Membership of a trade union; Genetic data; Biometric data; Sex
                                        life or sexual orientation; as well as personal data relating to
                                        criminal convictions and offenses
                                    </li>
                                    <li>
                                        You have the following rights with respect to your personal data:
                                    </li>
                                    <li> To access the personal data held by Asia Direct about you</li>
                                    <li>
                                        {" "}
                                        To have your personal data corrected, for example, if it is
                                        incomplete or incorrect
                                    </li>
                                    <li>
                                        To opt out of receiving marketing communications at any time
                                    </li>
                                    <li>
                                        {" "}
                                        To restrict or object to the processing of personal data or
                                        request erasing personal data (in certain circumstances and
                                        subject to applicable law)
                                    </li>
                                    <li>
                                        {" "}
                                        To receive a copy of the personal data which you have provided to
                                        Asia Direct
                                    </li>
                                    <li>
                                        {" "}
                                        Where you have provided personal data voluntarily, or otherwise
                                        consented to its use, the right to withdraw your consent
                                    </li>
                                    <li> The right to complain to a data protection authority</li>
                                </ul>
                                <h4> Voluntary information provided by you</h4>
                                <ul>
                                    <li>
                                        {" "}
                                        We collect personal data that you provide voluntarily through our
                                        site, for example, when completing online forms to contact us,
                                        subscribing to receive marketing communications from us, The
                                        information we collect about you may include the following
                                    </li>
                                    <li>
                                        {" "}
                                        Name; Job title, job level or job function role; Contact
                                        information, including primary email, email address and telephone
                                        numbers; Demographic information, such as industry, country,
                                        postcode, information pertinent to fulfilling our services to you
                                    </li>
                                    <li>
                                        {" "}
                                        Any other personal data that you voluntarily choose to provide to
                                        us
                                    </li>
                                    <li>
                                        {" "}
                                        We do not intentionally collect sensitive category data, unless
                                        you provide us with such data. If you choose to provide any
                                        sensitive personal information in a text box on our website, you
                                        acknowledge you consent to the collection and processing of this
                                        sensitive information.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </div>
    )
}
