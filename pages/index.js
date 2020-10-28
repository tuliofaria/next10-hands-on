import Image from 'next/image'

const Index = () => {
    return (
        <div>
            <h1>DevPleno NextJS10</h1>
            <Image src='/praia.jpg' width={800} height={600} alt='Praia' />
        </div>
    )
}
export default Index