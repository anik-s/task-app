import img from '../../assets/illustrations/illustration_404.svg'
import Image from 'next/image';


export default function Error404() {

    return (
        <>
            <div
                style={{
                    maxWidth: 480,
                    margin: 'auto',
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '12px 0px',
                    textAlign: 'center', alignItems: 'center'
                }}
            >
                <h3>
                    Sorry, page not found!
                </h3>

                <h5 style={{ color: '#1c2331' }}>
                    Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
                </h5>

                <Image src={img} style={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}  alt="" />
            </div>
        </>
    )
}