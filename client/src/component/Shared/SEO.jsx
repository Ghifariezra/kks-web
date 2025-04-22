import { Helmet } from "react-helmet";
import FavIcon from "../../assets/favicon/favicon.ico";

function SEO() {
    return (
        <>
            {/* Tambahkan metadata di sini */}
            <Helmet>
                <title>PT. Kapita Konsul Sinergi | Konsultan Teknik, K3, & Lingkungan Profesional</title>
                <meta name="description" content="PT. Kapita Konsul Sinergi adalah perusahaan konsultasi terpercaya yang menyediakan layanan profesional di bidang teknik, K3, dan lingkungan untuk meningkatkan kinerja bisnis Anda."></meta>
                <meta name="keywords" content="konsultan TKDN, konsultan teknik, konsultan K3, SMK3, ISO 45001, konsultan lingkungan, PROPER, dokumen lingkungan, training awareness, jasa konsultasi berkelanjutan"></meta>
                <meta name="author" content="PT. Kapita Konsul Sinergi"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta property="og:title" content="PT. Kapita Konsul Sinergi | Konsultan Teknik, K3, & Lingkungan"></meta>
                <meta property="og:description" content="Solusi strategis dan berkelanjutan dalam bidang teknik, keselamatan kerja, dan lingkungan."></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content="https://www.kapitakonsul.co.id"></meta>
                <meta property="og:image" content="/assets/logo/hero-logo.png" />
                <link rel="icon" href={FavIcon} />
            </Helmet>
        </>
    );
}
export default SEO;