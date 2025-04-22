import { Helmet } from "react-helmet";
import FavIcon from "../../assets/favicon/favicon.ico";

function SEO() {
    return (
        <>
            {/* Tambahkan metadata di sini */}
            <Helmet>
                <title>Kapita Konsul Sinergi</title>
                <meta name="description" content="Ini adalah deskripsi halaman." />
                <meta name="keywords" content="react, website, company profile" />
                <meta name="author" content="Kapita Konsul Sinergi" />
                <meta name="robots" content="index, follow" />
                {/* <meta property="og:title" content="Judul OG" />
                <meta property="og:description" content="Deskripsi OG" />
                <meta property="og:image" content="https://contoh.com/image.jpg" />
                <meta property="og:url" content="https://contoh.com" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
        </>
    )
}

export default SEO;